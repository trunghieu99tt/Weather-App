import React from "react";
import HumidityBar from "../HumidityBar/HumidityBar";

const WeatherCard3 = ({ humidity }) => {
    return (
        <article className="card WeatherCard3">
            <div className="card__title WeatherCard3__title">Humidity</div>

            <div className="card__number WeatherCard3__number">
                {Math.round(humidity)} <span>%</span>
            </div>

            <HumidityBar percent={Math.round(humidity)} />
        </article>
    );
};

export default WeatherCard3;
