import React, { useState, useCallback } from "react";
import MyLocationIcon from "../../static/images/myLocation.png";
import { useSelector, useDispatch } from "react-redux";
import WeatherIcon from "../WeatherIcon";
import Loader from "../Loader";
import Location from "../../static/images/location.png";
import { convertDate, convertToF } from "../../utils/Helper";
import SearchBar from "../SearchBar/SearchBar";
import * as actionTypes from "../../redux/app/app.types";

const SideBar = ({ setMyLocation }) => {
    const [iSearchBarOpening, setIsSearchBarOpening] = useState(false);
    const data = useSelector((state) => state.app.data);
    const isCelsius = useSelector((state) => state.app.isCelsius);
    const dispatch = useDispatch();

    const clearAllData = useCallback(() => {
        dispatch({ type: actionTypes.CLEAR_PLACES });
        dispatch({ type: actionTypes.CLEAR_DATA });
    }, [dispatch]);

    const openSearchBar = () => setIsSearchBarOpening(true);
    const closeSearchBar = () => {
        setIsSearchBarOpening(false);
    }

    const getMyLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const lattlong = `${position.coords.latitude},${position.coords.longitude}`;
                clearAllData();
                setMyLocation(lattlong);
            });
        } else {
        }
    };

    const modifyTempValue = (value) => {
        let temp = Math.round(value);
        if (!isCelsius) {
            temp = Math.round(convertToF(value));
        }
        return temp;
    };

    return (
        <aside
            className="sidebar"
            style={{
                background: `url(${require("../../static/images/sidebarBg.png")}) ,url(${require("../../static/images/Cloud-background.png")})`,
            }}
        >
            <SearchBar
                isOpen={iSearchBarOpening}
                closeSearchBar={closeSearchBar}
            />
            <React.Fragment>
                <header className="sidebar-header">
                    <button
                        className="sidebar__searchBtn"
                        onClick={openSearchBar}
                    >
                        Search for places
                    </button>
                    <button className="sidebar__setMyLocation">
                        <img
                            src={MyLocationIcon}
                            alt="my-location-icon"
                            onClick={getMyLocation}
                        />
                    </button>
                </header>

                <section className="sidebar-main weatherNow">
                    {(!data && <Loader />) || (
                        <React.Fragment>
                            <div className="weatherNow__icon">
                                <WeatherIcon
                                    status={
                                        data?.consolidated_weather?.[0]
                                            ?.weather_state_abbr
                                    }
                                />
                            </div>

                            <div className="weatherNow__temperature">
                                {modifyTempValue(
                                    data?.consolidated_weather?.[0]?.the_temp
                                )}
                                {isCelsius ? (
                                    <span>&#8451;</span>
                                ) : (
                                    <span>&#8457;</span>
                                )}
                            </div>

                            <div className="weatherNow__status">
                                {
                                    data?.consolidated_weather?.[0]
                                        ?.weather_state_name
                                }
                            </div>

                            <div className="weatherNow__date">
                                <span className="weatherNow__today">Today</span>

                                <span
                                    style={{
                                        margin: "0 10px",
                                    }}
                                >
                                    .
                                </span>

                                <span className="weatherNow__today">
                                    {convertDate(
                                        data?.consolidated_weather?.[0]?.created
                                    )}
                                </span>
                            </div>

                            <figure className="weatherNow-location">
                                <img
                                    src={Location}
                                    alt={data?.title}
                                    className="weatherNow-location__icon"
                                />

                                <figcaption className="weatherNow-location__name">
                                    {data?.title}
                                </figcaption>
                            </figure>
                        </React.Fragment>
                    )}
                </section>
            </React.Fragment>
        </aside>
    );
};

export default SideBar;
