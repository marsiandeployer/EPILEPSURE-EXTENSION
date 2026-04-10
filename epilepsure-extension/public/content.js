// Epilepsure Content Script
console.log("Epilepsure: Content Script Injected on YouTube.");

let isActive = true;
let sensitivity = 50; // 0-100 scale

function updateThreshold() {
    // scale sensitivity (0-100) to actual luminance threshold
    // 100 sensitivity = trigger easily (e.g. diff of 15)
    // 0 sensitivity = hard to trigger (e.g. diff of 70)
    return 70 - (sensitivity * 0.55);
}

chrome.storage.local.get(['isActive', 'sensitivity'], (result) => {
    if (result.isActive !== undefined) isActive = result.isActive;
    if (result.sensitivity !== undefined) sensitivity = result.sensitivity;
});

chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.isActive) isActive = changes.isActive.newValue;
    if (changes.sensitivity) sensitivity = changes.sensitivity.newValue;
});

const FPS = 15;
const INTERVAL_MS = 1000 / FPS;
const FLICKER_COUNT_TRIGGER = 3; 
const FLICKER_TIME_WINDOW = 1200; // 1.2 secs to capture 3 successive flashes

let videoElements = new Map();

function getLuminance(r, g, b) {
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function processVideo(video, canvas, ctx, state) {
    if (!isActive || video.paused || video.ended || video.readyState < 2 || state.warningActive) return;

    const w = 64; 
    const h = 64;
    canvas.width = w;
    canvas.height = h;

    try {
        ctx.drawImage(video, 0, 0, w, h);
        const imageData = ctx.getImageData(0, 0, w, h);
        const data = imageData.data;
        let totalLum = 0;

        for (let i = 0; i < data.length; i += 4) {
            totalLum += getLuminance(data[i], data[i + 1], data[i + 2]);
        }
        const avgLum = totalLum / (w * h);

        const now = Date.now();
        if (state.lastLum !== null) {
            const diff = Math.abs(avgLum - state.lastLum);
            const FLICKER_THRESHOLD = updateThreshold();
            
            if (diff > FLICKER_THRESHOLD) {
                state.flickers.push(now);
                state.flickers = state.flickers.filter(t => now - t <= FLICKER_TIME_WINDOW);

                if (state.flickers.length >= FLICKER_COUNT_TRIGGER) {
                    triggerWarning(video, state);
                }
            }
        }
        state.lastLum = avgLum;
    } catch (e) {
        // Cross-origin issues or context errors
    }
}

function triggerWarning(video, state) {
    console.warn("Epilepsure: Flashing lights detected! Triggering warning over video.");
    state.warningActive = true;
    state.flickers = [];

    // Pause video
    video.pause();
    
    // Add blur
    video.classList.add("epilepsure-blur");

    const container = video.parentElement;
    
    // Safety check if we already have an overlay
    if(container.querySelector('.epilepsure-warning-overlay')) return;

    const overlay = document.createElement("div");
    overlay.className = "epilepsure-warning-overlay";
    overlay.innerHTML = `
        <h1>⚠️ EPILEPSURE WARNING</h1>
        <p>Flashing or bright lights detected.</p>
        <p>Click here to dismiss and watch anyway.</p>
    `;

    overlay.onclick = () => {
        video.classList.remove("epilepsure-blur");
        overlay.remove();
        state.warningActive = false;
        state.flickers = []; 
        state.lastLum = null;
        
        // Let user continue watching. We might want to add a temporary cooldown here.
    };

    container.appendChild(overlay);
    
    // Notify React extension popup for stats
    chrome.storage.local.get(['triggersPrevented'], (result) => {
        let count = result.triggersPrevented || 0;
        chrome.storage.local.set({triggersPrevented: count + 1});
    });
}

function observeYouTube() {
    setInterval(() => {
        const videos = document.querySelectorAll("video");
        videos.forEach(v => {
            if (!videoElements.has(v)) {
                // Ensure proper parent layout for absolute positioning overlay
                if(v.parentElement && window.getComputedStyle(v.parentElement).position === 'static'){
                    v.parentElement.style.position = 'relative';
                }
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d", { willReadFrequently: true });
                videoElements.set(v, {
                    canvas,
                    ctx,
                    lastLum: null,
                    flickers: [],
                    warningActive: false
                });
            }
        });

        videoElements.forEach((state, video) => {
            if (!document.body.contains(video)) {
                videoElements.delete(video);
            } else {
                processVideo(video, state.canvas, state.ctx, state);
            }
        });
    }, INTERVAL_MS);
}

// Ensure the storage is setup with initial default values on load
chrome.storage.local.get(['triggersPrevented'], (result) => {
    if(result.triggersPrevented === undefined) {
         chrome.storage.local.set({triggersPrevented: 0});
    }
});

observeYouTube();
