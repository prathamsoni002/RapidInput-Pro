import React, { useState } from 'react';
import '../App.css'; // Import CSS file for styling

const FeatureMenu = () => {
  // State variables with more descriptive names
  const [selectedLanguage, setSelectedLanguage] = useState('Python');
  const [isCommentsEnabled, setIsCommentsEnabled] = useState(false);
  const [selectedTime, setSelectedTime] = useState(15);

  // Event handlers for language change, comments toggle, and time selection
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleCommentsToggle = () => {
    setIsCommentsEnabled(!isCommentsEnabled);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  // Time options array
  const timeOptions = [15, 30, 45, 60, 90, 120, 180, 240, 300];

  return (
    <div className="features-menu">
      <div className="feature-item">
        <span>Languages:</span>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="Python">Python</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Java">Java</option>
        <option value="C++">C++</option>
        <option value="C#">C#</option>
        <option value="Ruby">Ruby</option>
        <option value="PHP">PHP</option>
        <option value="Swift">Swift</option>
        <option value="Go">Go</option>
        <option value="TypeScript">TypeScript</option>
        <option value="Kotlin">Kotlin</option>
        <option value="Rust">Rust</option>
        <option value="CSS">CSS</option>
        <option value="HTML">HTML</option>
        <option value="Shell/Scripting">Shell/Scripting</option>
        <option value="SQL">SQL</option>
        <option value="MATLAB">MATLAB</option>
        <option value="R">R</option>
        <option value="Perl">Perl</option>
        <option value="Scala">Scala</option>
        <option value="Dart">Dart</option>
        </select>
      </div>
      <div className="feature-item">
        <span>Comments:</span>
        <button
          className={`toggle-button ${isCommentsEnabled ? 'active' : ''}`}
          aria-label="Toggle comments on/off"
          onClick={handleCommentsToggle}
        >
          {isCommentsEnabled ? 'On' : 'Off'}
        </button>
      </div>
      <div className="feature-item">
        <span>Time:</span>
        <div className="time-options">
          {timeOptions.map((time) => (
            <button
              key={time}
              className={`time-option ${selectedTime === time ? 'active' : ''}`}
              onClick={() => handleTimeChange(time)}
              aria-label={`Select ${time} seconds`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureMenu;
