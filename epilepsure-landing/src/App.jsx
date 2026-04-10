import React from 'react';
import { Shield, Eye, Settings2, Download, Zap, Heart } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <Shield size={22} color="white" strokeWidth={2.5} />
          </div>
          Epilepsure
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#demo">How it works</a>
          <a href="#faq">FAQ</a>
        </div>
        <button className="btn-primary" onClick={() => alert('Download Zip provided by agent!')}>
          <Download size={18} />
          Add to Chrome
        </button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-pill">
          Harding Test Compliant
        </div>
        <h1>
          Browse the web without <br/>
          <span>fear of flashing lights.</span>
        </h1>
        <p>
          Epilepsure is a powerful, lightweight browser extension that instantly detects and blurs harmful strobes and saturated red flashes on social media in real-time.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">
            <Download size={20} />
            Install for Free
          </button>
          <button className="btn-secondary">
            <Eye size={20} />
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <div className="feature-card">
          <div className="feature-icon">
            <Zap size={32} />
          </div>
          <h3>Real-time Detection</h3>
          <p>Scans every frame of web videos at up to 60fps without slowing down your browser, catching flickers instantly.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <Shield size={32} />
          </div>
          <h3>Instant Blur Shield</h3>
          <p>The moment a harmful strobe is detected, the video is paused and obscured by a thick protective blur filter.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <Settings2 size={32} />
          </div>
          <h3>Custom Sensitivity</h3>
          <p>Tune the algorithm's strictness to match your specific photosensitive needs, balancing protection and viewing.</p>
        </div>
      </section>

      {/* Interactive Demo representation */}
      <section id="demo" className="demo">
        <h2>See Epilepsure in Action</h2>
        <p style={{color: 'var(--text-muted)'}}>We simulate a rapid visual trigger below. Notice how the shield completely obscures the risk.</p>
        
        <div className="demo-browser">
          <div className="browser-header">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
            <div style={{marginLeft: '20px', background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', color: '#ccc'}}>youtube.com/watch</div>
          </div>
          <div className="browser-content">
            <div className="fake-video"></div>
            <div className="blur-overlay">
              <h2>⚠️ EPILEPSURE WARNING</h2>
              <p style={{fontWeight: 'bold', background: 'black', padding: '5px 15px', borderRadius: '4px'}}>Flashing lights detected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '10px'}}>
          <Shield size={20} color="var(--primary)" />
          <span style={{fontWeight: 800}}>Epilepsure</span>
        </div>
        <p>Built with <Heart size={14} color="var(--danger)" style={{verticalAlign: 'middle', margin: '0 4px'}}/> to make the internet safer for everyone.</p>
      </footer>
    </div>
  );
}

export default App;
