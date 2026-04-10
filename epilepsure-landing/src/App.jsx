import React from 'react';
import { Shield, Info, Activity, Monitor, Smartphone, Download, Globe, Zap, CheckCircle2, AlertTriangle, Cpu } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Shield size={24} color="var(--primary-color)" fill="var(--primary-color)" fillOpacity={0.1} />
            Epilepsure
          </div>
          <div className="nav-links">
            <a href="#about">The Problem</a>
            <a href="#method">How it Works</a>
            <a href="#features">Features</a>
            <a href="#downloads">Install</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-pill">
            <Zap size={14} fill="currentColor" />
            Harding Test Compliant Detection
          </div>
          <h1>Make the internet safer<br />for photosensitive users.</h1>
          <p>
            An automated trigger warning system that detects bright flickering lights and saturated red flashes on social media.
          </p>
          <div className="hero-actions">
            <a href="#downloads" className="btn btn-primary">
              <Download size={20} />
              Get the Extension
            </a>
            <a href="#about" className="btn btn-outline">
              Learn the Science
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="about" className="info-section">
        <div className="container info-grid">
          <div className="info-content">
            <h2>The Risk of Autoplay</h2>
            <p>
              For individuals with photosensitive epilepsy, daily internet use is a minefield. Modern social media feeds are optimized for engagement, often leading to content with high-frequency strobes, flash photography, or provocative visual patterns.
            </p>
            <p>
              Without automated intervention, a single autoplaying video can trigger a seizure before the user has time to look away or close the page.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--alert-color)', fontSize: '2rem' }}>3%</h4>
                <p style={{ fontSize: '0.875rem' }}>of people with epilepsy are photosensitive</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>&lt;50ms</h4>
                <p style={{ fontSize: '0.875rem' }}>Detection latency in browsers</p>
              </div>
            </div>
          </div>
          <div className="problem-card">
            <h3>Common Risk Factors</h3>
            <ul className="trigger-list">
              <li className="trigger-item">
                <div className="trigger-dot" />
                <div>
                  <strong>High Frequency Stroboscopic Effects</strong>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>More than 3 flashes within a one-second window.</p>
                </div>
              </li>
              <li className="trigger-item">
                <div className="trigger-dot" style={{ backgroundColor: 'var(--alert-color)' }} />
                <div>
                  <strong>Provocative Red Transitions</strong>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Saturated red flashes are statistically more likely to trigger cortical excitation.</p>
                </div>
              </li>
              <li className="trigger-item">
                <div className="trigger-dot" style={{ backgroundColor: '#64748b' }} />
                <div>
                  <strong>Spatial Pattern Provocation</strong>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>High-contrast stripes or geometric patterns that flicker during scrolling.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it Works / The Science */}
      <section id="method" className="features" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="features-header">
            <h2>The Science of Protection</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>
              Epilepsure implements a localized version of the ITU-R BT.1702 recommendation, commonly known as the Harding Test.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Cpu size={24} /></div>
              <h3>Real-time Analysis</h3>
              <p>The system samples video frames 30 times per second using a hidden canvas, calculating the relative luminance of every frame locally on your device.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Activity size={24} /></div>
              <h3>Frequency Tracking</h3>
              <p>A rolling buffer tracks the mathematical delta between frames. If the pattern matches a "dangerous sequence" (rapid luminance oscillation), the shield activates.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Shield size={24} /></div>
              <h3>Automatic Intervention</h3>
              <p>The video is instantly blured and paused. You are presented with a clear warning and must manually choose to "Reveal Video" to continue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section id="features" className="features">
        <div className="container">
          <div className="features-header">
            <h2>Browser Integrated</h2>
            <p>Built for the modern web with performance and privacy at its core.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Globe size={24} /></div>
              <h3>YouTube Optimized</h3>
              <p>Deep integration with the YouTube player ensures detection works across shorts, livestreams, and standard video uploads.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Info size={24} /></div>
              <h3>Privacy-First</h3>
              <p>All video analysis happens inside your browser. No data is sent to our servers, and your watch history remains completely private.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><CheckCircle2 size={24} /></div>
              <h3>Zero Latency</h3>
              <p>Optimized algorithms ensure that the extension doesn't slow down your browsing or cause video buffering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="downloads">
        <div className="container">
          <h2>Install Protection</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Free, open-source, and ready to protect.</p>
          
          <div className="downloads-grid">
            {/* Chrome Extension */}
            <div className="download-card">
              <Globe size={40} color="var(--primary-color)" />
              <h4>Browser Extension</h4>
              <p>Currently available for Chrome and Edge. Works on YouTube PC via developer mode.</p>
              <a href="/epilepsure-extension-v1.zip" download className="btn btn-primary" style={{ width: '100%' }}>
                <Download size={18} />
                Download v1.0
              </a>
            </div>

            {/* Windows Desktop */}
            <div className="download-card">
              <Monitor size={40} color="#94a3b8" />
              <h4>Windows Desktop</h4>
              <p>System-wide protection for apps and gaming. Coming soon to the Microsoft Store.</p>
              <button className="btn btn-disabled" style={{ width: '100%' }} disabled>
                Coming Q4 2024
              </button>
            </div>

            {/* Mobile App */}
            <div className="download-card">
              <Smartphone size={40} color="#94a3b8" />
              <h4>Mobile App</h4>
              <p>Integrated protection for Instagram and TikTok feeds. Currently in Beta testing.</p>
              <button className="btn btn-disabled" style={{ width: '100%' }} disabled>
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="logo">
            <Shield size={24} color="var(--primary-color)" fill="var(--primary-color)" fillOpacity={0.1} />
            Epilepsure
          </div>
          <div className="footer-links">
            <a href="https://github.com/agneloze/EPILEPSURE-EXTENSION" target="_blank" rel="noopener noreferrer">GitHub Project</a>
            <a href="#about">Privacy Policy</a>
            <a href="mailto:support@epilepsure.com">Report a Bug</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Epilepsure Open Source Project. Documentation-first approach.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

