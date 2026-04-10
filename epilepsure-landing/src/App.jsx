import React from 'react';
import { Shield, Info, Activity, Monitor, Smartphone, Download, Chrome, Zap } from 'lucide-react';
import './index.css';

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
            <img src="/logo.png" alt="Epilepsure Logo" style={{ width: '32px', height: '32px', borderRadius: '4px' }} />
            <span>Epilepsure</span>
          </div>
          <div className="nav-links">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
            <a href="#science" onClick={(e) => { e.preventDefault(); scrollTo('science'); }}>The Science</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollTo('features'); }}>Features</a>
            <a href="#downloads" onClick={(e) => { e.preventDefault(); scrollTo('downloads'); }}>Download</a>
          </div>
          <button className="btn btn-primary" onClick={() => scrollTo('downloads')}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="hero-pill">Harding Test Compliant Detection</div>
          <h1 style={{ color: 'var(--text-primary)' }}>Make the internet safer<br />for photosensitive users.</h1>
          <p>
            An automated trigger warning system that detects bright flickering lights and saturated red flashes in real-time.
          </p>
          <div className="hero-actions">
            <button onClick={() => scrollTo('downloads')} className="btn btn-primary">
              <Download size={20} />
              Install Protection
            </button>
            <button onClick={() => scrollTo('about')} className="btn btn-outline">
              Learn the Science
            </button>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="about" className="info-section">
        <div className="container info-grid">
          <div className="info-content">
            <h2 style={{ color: 'var(--text-primary)' }}>The Problem with Autoplay</h2>
            <p>
              For individuals with photosensitive epilepsy, navigating modern social media is a risk. Platforms like YouTube and Instagram are filled with high-frequency flashes andProvocative patterns.
            </p>
            <p>
              <strong>Epilepsure</strong> acts as your digital shield. Our algorithm uses localized frame analysis to intervene within milliseconds, ensuring you stay safe without sacrificing your browsing experience.
            </p>
          </div>
          <div className="problem-card" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
              <Activity size={24} color="var(--primary-color)" />
              Safety Thresholds
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', marginTop: '0.6rem' }} />
                <p><strong>Flicker Rate:</strong> Detection of sequences with &gt;3 flashes per second.</p>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--alert-color)', marginTop: '0.6rem' }} />
                <p><strong>Red Delta:</strong> Monitoring for sudden red-saturation shifts that provoke excitation.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Science / Harding Test */}
      <section id="science" className="info-section" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>The Science of Protection</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
            Epilepsure implements a localized version of the <strong>ITU-R BT.1702</strong> recommendation, commonly known as the <strong>Harding Test</strong>. 
            This standard ensures that photosensitive viewers are protected from hazardous luminance fluctuations and saturated red flickers.
          </p>
          <div className="features-grid">
             <div className="feature-card">
                <Zap size={24} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
                <h3>Luminance Deltas</h3>
                <p>We analyze the mathematical difference in brightness between consecutive frames in real-time.</p>
             </div>
             <div className="feature-card">
                <Activity size={24} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
                <h3>Frequency Check</h3>
                <p>Our rolling buffer confirms if the flicker frequency exceeds safe biological limits (3Hz to 30Hz).</p>
             </div>
             <div className="feature-card">
                <Shield size={24} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
                <h3>Instant Intervention</h3>
                <p>If risk is detected, the video is instantly blurred and paused before a seizure can be triggered.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <div className="container">
          <div className="features-header">
            <h2 style={{ color: 'var(--text-primary)' }}>Privacy & Performance</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Designed to protect you without slowing down your browser.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Chrome size={24} /></div>
              <h3>Browser Integrated</h3>
              <p>Built for Chromium-based browsers (Chrome, Edge, Brave). Zero setup required after installation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Shield size={24} /></div>
              <h3>Local Processing</h3>
              <p>Analysis happens locally on your machine. Your camera, screen, and data never leave your device.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Monitor size={24} /></div>
              <h3>Smart Overlays</h3>
              <p>Warnings appear exactly where you need them, providing a safe bridge to override if you choose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="downloads" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <h2 style={{ color: 'var(--text-primary)' }}>Install Protection</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Deploy the shield to your system.</p>
          
          <div className="downloads-grid">
            <div className="download-card" style={{ backgroundColor: 'var(--bg-card)' }}>
              <Chrome size={40} color="var(--primary-color)" />
              <h4>Chrome Extension</h4>
              <p>Standard protection for YouTube and web video platforms.</p>
              <a href="/epilepsure-extension-v1.zip" download className="btn btn-primary" style={{ width: '100%' }}>
                <Download size={18} />
                Download v1.0
              </a>
            </div>

            <div className="download-card" style={{ backgroundColor: 'var(--bg-card)' }}>
              <Monitor size={40} color="var(--text-secondary)" />
              <h4>Windows Desktop</h4>
              <p>System-wide protection for apps and gaming. Coming in 2026.</p>
              <button className="btn btn-disabled" style={{ width: '100%' }} disabled>
                Coming 2026
              </button>
            </div>

            <div className="download-card" style={{ backgroundColor: 'var(--bg-card)' }}>
              <Smartphone size={40} color="var(--text-secondary)" />
              <h4>Mobile App</h4>
              <p>Integrated protection for the iOS/Android apps. Coming in 2026.</p>
              <button className="btn btn-disabled" style={{ width: '100%' }} disabled>
                Coming 2026
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <img src="/logo.png" alt="" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
            <span style={{ fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Epilepsure</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} Epilepsure. An open-source digital accessibility project.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
