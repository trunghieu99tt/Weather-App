import React from "react";

const HumidityBar = ({ percent }) => {
    return (
        <div className="humidityBar">
            <div className="humidityBar__percentNumbers">
                <p id="0">0</p>
                <p id="50">50</p>
                <p id="100">100</p>
            </div>

            <div className="progress-bar">
                <div
                    className="progress-bar__inner"
                    style={{
                        width: `${percent}%`,
                    }}
                ></div>
            </div>

            <div className="humidityBar__unit">%</div>
        </div>
    );
};

export default HumidityBar;
