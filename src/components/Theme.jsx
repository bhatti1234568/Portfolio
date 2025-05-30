import React from 'react';
import { RiCloseLine, RiSettings4Line } from 'react-icons/ri';

const Theme = ({ isOpen, onClose }) => {
    // Color options
    const colors = [
        { hue: 271, name: 'Purple' },
        { hue: 340, name: 'Red' },
        { hue: 200, name: 'Blue' },
        { hue: 160, name: 'Green' },
        { hue: 40, name: 'Orange' },
    ];

    // Handle color change
    const handleColorChange = (hue) => {
        document.documentElement.style.setProperty('--hue', hue);
        // Save to localStorage
        localStorage.setItem('selected-hue', hue);
    };

    // Load saved color on mount
    React.useEffect(() => {
        const savedHue = localStorage.getItem('selected-hue');
        if (savedHue) {
            document.documentElement.style.setProperty('--hue', savedHue);
        }
    }, []);

    return (
        <div className={`theme ${isOpen ? 'show-theme' : ''}`}>
            <div className="theme__container">
                <h3 className="theme__title">
                    <RiSettings4Line /> Customize Theme
                </h3>
                <button className="theme__close" onClick={onClose}>
                    <RiCloseLine />
                </button>

                <div className="theme__colors">
                    <h4 className="theme__subtitle">Color Picker</h4>
                    <div className="theme__colors-list">
                        {colors.map((color) => (
                            <button
                                key={color.hue}
                                className="theme__color-btn"
                                style={{
                                    backgroundColor: `hsl(${color.hue}, 76%, 53%)`,
                                }}
                                onClick={() => handleColorChange(color.hue)}
                                title={color.name}
                            />
                        ))}
                    </div>
                </div>

                <div className="theme__background">
                    <h4 className="theme__subtitle">Background Style</h4>
                    <div className="theme__background-list">
                        <button className="theme__background-btn active">
                            Light
                        </button>
                        <button className="theme__background-btn">
                            Dark
                        </button>
                    </div>
                </div>

                <div className="theme__tip">
                    <RiSettings4Line className="theme__tip-icon" />
                    <p>Customize your view, choose your preferred colors and background.</p>
                </div>
            </div>
        </div>
    );
};

export default Theme; 