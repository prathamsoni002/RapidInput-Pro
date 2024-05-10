import React from 'react';

const FeatureMenu = ({ presentValues, onLanguageChange, onCommentsToggle, onTimeChange, timeOptions }) => {
  return (
    <div className="features-menu">
      <div className="feature-item">
        <span>Languages:</span>
        <select value={presentValues.selectedLanguage} onChange={onLanguageChange}>
        <option value="Python">Python</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Java">Java</option>
        <option value="C">C</option>
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
        <option value="Shell">Shell</option>
        <option value="R">R</option>
        <option value="Perl">Perl</option>
        <option value="Scala">Scala</option>
        <option value="Dart">Dart</option>
        </select>
      </div>
      <div className="feature-item">
        <span>Comments:</span>
        <button
          className={`toggle-button ${presentValues.isCommentsEnabled ? 'active' : ''}`}
          aria-label="Toggle comments on/off"
          onClick={onCommentsToggle}
        >
          {presentValues.isCommentsEnabled ? 'On' : 'Off'}
        </button>
      </div>
      <div className="feature-item">
        <span>Time:</span>
        <div className="time-options">
          {timeOptions.map((time) => (
            <button
              key={time}
              className={`time-option ${presentValues.selectedTime === time ? 'active' : ''}`}
              onClick={() => onTimeChange(time)}
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
