# 🛡️ Epilepsure

**Protecting photosensitive users from harmful flickering lights on the modern web.**

Epilepsure is an automated trigger warning system designed to detect and block hazardous visual content in real-time. By implementing a localized version of the **Harding Test** (ITU-R BT.1702), the system mathematically analyzes video frames for rapid luminance changes and saturated red flashes, intervening before a dangerous sequence can trigger a seizure.

---

## 🚀 Features

- **Real-time Video Monitoring**: Lightweight background analysis of luminance deltas.
- **Instant Intervention**: Automatically blurs and pauses videos when a hazard is detected.
- **Harding Test Compliance**: Specifically targets high-frequency flickers and provocative red transitions.
- **Privacy First**: All video analysis happens locally in the browser; no data ever leaves your device.
- **Adjustable Sensitivity**: Personalize the detection threshold to fit your specific needs.
- **Modern Landing Page**: Comprehensive informational site with download links and medical context.

---

## 📂 Project Structure

- **`epilepsure-extension/`**: The core Chrome/Edge extension built with React, Vite, and Manifest V3.
- **`epilepsure-landing/`**: The informational landing page and download portal built with React and Tailwind-inspired premium CSS.

---

## 🛠️ Installation (Browser Extension)

Currently, Epilepsure is available as a developer-mode package for Chromium-based browsers (Chrome, Edge, Brave).

### 1. Download the Package
- Вownload directly from this repo: [`epilepsure-landing/public/epilepsure-extension-v1.zip`](epilepsure-landing/public/epilepsure-extension-v1.zip).
- Extract the ZIP file to a folder on your computer.

### 2. Load into Browser
1. Open Chrome and navigate to `chrome://extensions`.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked**.
4. Select the folder where you extracted the extension.
5. The Epilepsure shield icon should now appear in your extension bar.

### 3. Usage
- Navigate to YouTube or any site with video content.
- Click the extension icon to toggle protection or adjust sensitivity.
- When a hazard is detected, the video will blur. Click the overlay to override and continue watching if desired.

---

## 💻 Development

### Prerequisites
- Node.js (v18+)
- npm

### Setup
```bash
# Clone the repository
git clone https://github.com/agneloze/EPILEPSURE-EXTENSION.git

# Install dependencies for the extension
cd epilepsure-extension
npm install

# Install dependencies for the landing page
cd ../epilepsure-landing
npm install
```

### Running Locally
```bash
# Start landing page dev server
cd epilepsure-landing
npm run dev

# Build extension
cd ../epilepsure-extension
npm run build
```

---

## 🧠 Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Styling**: Vanilla CSS (Premium Design System)
- **Deployment**: Vercel

---

## 📄 License
This project is open-source and dedicated to digital accessibility. See [LICENSE](LICENSE) for more details.

---

## 🤝 Contributing
We welcome contributions to improve the detection algorithm and expand support to more platforms. Please see `CONTRIBUTING.md` (coming soon) for guidelines.

*Designed for safety. Engineered for accessibility.*
