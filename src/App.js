import React, { useEffect, useState, useCallback } from "react";
import "./static/css/main.min.css";
import SideBar from "./components/SideBar";
import WeatherContent from "./components/WeatherContent";
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "./redux/app/app.types";

const App = () => {
    const [location, setLocation] = useState(null);
    const [place, setPlace] = useState(null);
    const dispatch = useDispatch();
    const places = useSelector((state) => state.app.places);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const lattlong = `${position.coords.latitude},${position.coords.longitude}`;
                setLocation(lattlong);
            });
        } else {
        }
    }, []);

    useEffect(() => {
        if (!places && location) {
            getLocationPlace(location);
        }
    }, [location]);

    useEffect(() => {
        const firstResult = (places?.length > 0 && places[0]) || null;
        setPlace(firstResult);
    }, [places]);

    useEffect(() => {
        if (place) {
            getWeatherData(place);
        }
    }, [place]);

    const getLocationPlace = useCallback(
        (location) => {
            dispatch({
                type: actionTypes.FETCH_PLACES,
                payload: {
                    value: location,
                    isName: false,
                },
            });
        },
        [dispatch]
    );

    const getWeatherData = useCallback(
        (place) => {
            dispatch({
                type: actionTypes.FETCH_DATA,
                payload: {
                    locationID: place && place.woeid,
                },
            });
        },
        [dispatch]
    );

    return (
        <section className="page-container">
            <main className="page-main">
                <SideBar setMyLocation={getLocationPlace} />
                <WeatherContent />
            </main>
            <footer></footer>
        </section>
    );
};

export default App;
