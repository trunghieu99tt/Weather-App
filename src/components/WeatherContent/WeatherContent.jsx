import React, { useCallback } from "react";
import Loader from "../Loader";
import { useSelector, useDispatch } from "react-redux";
import WeatherCard1 from "../WeatherCards/Card1";
import WeatherCard2 from "../WeatherCards/Card2";
import WeatherCard3 from "../WeatherCards/Card3";
import WeatherCard4 from "../WeatherCards/Card4";
import * as actionTypes from "../../redux/app/app.types";

const WeatherContent = () => {
    const data = useSelector((state) => state.app.data);
    const dispatch = useDispatch();
    const isCelsius = useSelector((state) => state.app.isCelsius);

    const weatherInfo =
        (data?.consolidated_weather?.length > 1 &&
            data.consolidated_weather.slice(1)) ||
        [];

    const setCDegree = useCallback(
        () => dispatch({ type: actionTypes.SET_C_DEGREE }),
        [dispatch]
    );

    const setFDegree = useCallback(
        () => dispatch({ type: actionTypes.SET_F_DEGREE }),
        [dispatch]
    );

    return (
        <section className="weatherContent">
            {(!data && <Loader />) || (
                <React.Fragment>
                    <section className="weatherContent-changeDegreeBtns">
                        <button
                            onClick={setCDegree}
                            className={`changeDegree-btn ${
                                isCelsius ? "active" : ""
                            }`}
                        >
                            <span>&#8451;</span>
                        </button>

                        <button
                            onClick={setFDegree}
                            className={`changeDegree-btn ${
                                !isCelsius ? "active" : ""
                            }`}
                        >
                            <span>&#8457;</span>
                        </button>
                    </section>

                    <section className="weatherContent-nextDays">
                        {weatherInfo?.length > 0 &&
                            weatherInfo.map((item, index) => (
                                <WeatherCard1 {...item} index={index} />
                            ))}
                    </section>

                    <section className="weatherContent-highLights">
                        <h3 className="weatherContent-highLights__heading">
                            Today's Highlight
                        </h3>

                        <section className="weatherContent-highLightsCards">
                            <WeatherCard2
                                windSpeed={
                                    data?.consolidated_weather?.[0]?.wind_speed
                                }
                            />
                            <WeatherCard3
                                humidity={
                                    data?.consolidated_weather?.[0]?.humidity
                                }
                            />
                            <WeatherCard4
                                title="Visibility"
                                unit="miles"
                                number={
                                    data?.consolidated_weather?.[0]?.visibility
                                }
                            />
                            <WeatherCard4
                                title="Air Pressure"
                                unit="mb"
                                number={
                                    data?.consolidated_weather?.[0]
                                        ?.air_pressure
                                }
                            />
                        </section>
                    </section>
                </React.Fragment>
            )}
        </section>
    );
};

export default WeatherContent;
