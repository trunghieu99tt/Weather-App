import React from "react";
import WindIcon from "../../static/images/wind.png";

const WeatherCard2 = ({ windSpeed }) => {
    return (
        <article className="card weatherCard2">
            <div className="card__title weatherCard2__title">Wind status</div>

            <div className="card__number weatherCard2__number">
                {Math.round(windSpeed)} <span>mph</span>
            </div>

            <figure className="weatherCard2__icon-container">
                <img
                    src={WindIcon}
                    alt="wind-icon"
                    className="weatherCard2__icon"
                />
                <figcaption>WSW</figcaption>
            </figure>
        </article>
    );
};

export default WeatherCard2;
