import { useState } from 'react';
import './toggle.css';

const Toggle = () => {
  const [theme, setTheme] = useState('white');
  const [textColor, setTextColor] = useState('#000000');

  function handleToggle() {
    setTextColor(textColor === '#e10000' ? '#000000' : '#e10000');
    setTheme(theme==='#1b1b1b'?"white":"#1b1b1b");
  }

  return (
    <section style={{ backgroundColor: theme }}>
      <button
        className="toggle-btn"
        onClick={handleToggle}
        style={{ border: `2px solid ${textColor}`, color: textColor }}
      >
        {theme === 'white' ? 'Dark Theme' : 'Light Theme'}
      </button>
      <h1 style={{ color: textColor }}>Mr. Robot</h1>
    </section>
  );
};
export default Toggle;
