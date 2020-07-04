import React from "react";
import { convertDate, convertToF } from "../../utils/Helper";
import WeatherIcon from "../WeatherIcon";
import { useSelector } from "react-redux";

const WeatherCard1 = ({
    index,
    weather_state_abbr,
    min_temp,
    max_temp,
    created,
}) => {
    const isCelsius = useSelector((state) => state.app.isCelsius);
    const newDate = new Date(
        new Date(created).getTime() + (index + 1) * (24 * 60 * 60 * 1000)
    );

    const modifyTempValue = (value) => {
        let temp = Math.round(value);
        if (!isCelsius) {
            temp = Math.round(convertToF(value));
        }
        return temp;
    };

    const minTemp = modifyTempValue(min_temp);
    const maxTemp = modifyTempValue(max_temp);

    return (
        <article className="weatherCard1">
            <p className="weatherCard1__date">
                {index === 0 ? "Tomorrow" : `${convertDate(newDate)}`}
            </p>
            <WeatherIcon
                status={weather_state_abbr}
                className="weatherCard1__image"
            />

            <div className="weatherCard1__tempRange">
                <span className="weatherCard1__minTemp">
                    {minTemp}
                    {isCelsius ? <span>&#8451;</span> : <span>&#8457;</span>}
                </span>
                <span className="weatherCard1__maxTemp">
                    {" "}
                    {maxTemp}
                    {isCelsius ? <span>&#8451;</span> : <span>&#8457;</span>}
                </span>
            </div>
        </article>
    );
};

export default WeatherCard1;
