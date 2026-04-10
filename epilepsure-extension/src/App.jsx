import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [isActive, setIsActive] = useState(true)
  const [sensitivity, setSensitivity] = useState(50)
  const [triggersPrevented, setTriggersPrevented] = useState(0)

  useEffect(() => {
    // When the popup opens, fetch current state from Chrome Storage
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.get(['isActive', 'sensitivity', 'triggersPrevented'], (result) => {
        if (result.isActive !== undefined) setIsActive(result.isActive)
        if (result.sensitivity !== undefined) setSensitivity(result.sensitivity)
        if (result.triggersPrevented !== undefined) setTriggersPrevented(result.triggersPrevented)
      })
    }
  }, [])

  const toggleActive = () => {
    const newState = !isActive;
    setIsActive(newState);
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.set({ isActive: newState });
    }
  }

  const handleSensitivityChange = (e) => {
    const val = parseInt(e.target.value);
    setSensitivity(val);
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.set({ sensitivity: val });
    }
  }

  return (
    <div className={`app-container ${isActive ? 'active' : 'inactive'}`}>
      <div className="glass-panel">
        <header>
          <div className="logo">
             <div className="icon-pulse">
                <span className="icon">🛡️</span>
             </div>
             <h1>Epilepsure</h1>
          </div>
          <label className="switch">
            <input type="checkbox" checked={isActive} onChange={toggleActive} />
            <span className="slider round"></span>
          </label>
        </header>
        
        <main>
          <div className="status-badge">
             <div className={`indicator ${isActive ? 'pulse' : ''}`}></div>
             <span>{isActive ? 'Shield Active on YouTube' : 'Shield Disabled'}</span>
          </div>

          <div className={`control-group ${!isActive ? 'disabled' : ''}`}>
             <div className="label-row">
                 <label>Detection Sensitivity</label>
                 <span className="val-badge">{sensitivity}%</span>
             </div>
             <input 
               type="range" 
               min="0" max="100" 
               value={sensitivity} 
               onChange={handleSensitivityChange} 
               className="range-slider"
               disabled={!isActive}
             />
             <div className="range-labels">
               <span>Conservative</span>
               <span>Aggressive</span>
             </div>
          </div>

          <div className="stats-card">
              <div className="stat-value">{triggersPrevented}</div>
              <div className="stat-label">Triggers Prevented</div>
          </div>
        </main>
        
        <footer>
           <p>Automated visual protection for social media.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
