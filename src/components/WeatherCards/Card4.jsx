import React from "react";

const WeatherCard4 = ({ number, title, unit }) => {
    return (
        <article className="card WeatherCard4">
            <div className="card__title WeatherCard4__title">{title}</div>

            <div className="card__number WeatherCard4__number">
                {Math.round(number)} <span>{unit}</span>
            </div>
        </article>
    );
};

export default WeatherCard4;
