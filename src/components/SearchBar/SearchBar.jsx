import React, { useState, useCallback, useEffect } from "react";
import searchIcon from "../../static/images/search.png";
import cancelIcon from "../../static/images/cancel.png";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../redux/app/app.types";
import SearchResultCard from "./SearchResultCard";
import Loader from "../Loader";

const SearchBar = ({ isOpen, closeSearchBar }) => {
    const [searchValue, setSearchValue] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();
    const places = useSelector((state) => state.app.places);

    const handleChangeValue = (event) => setSearchValue(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const getPlacesData = useCallback(
        (searchValue) => {
            dispatch({
                type: actionTypes.FETCH_PLACES,
                payload: {
                    value: searchValue,
                    isName: true,
                },
            });
        },
        [dispatch]
    );

    const clearPlaceData = useCallback(
        () => dispatch({ type: actionTypes.CLEAR_PLACES }),
        [dispatch]
    );

    useEffect(() => {
        clearPlaceData();
    }, []);

    useEffect(() => {
        if (submitted) {
            clearPlaceData();
            getPlacesData(searchValue);
            setSubmitted(false);
        }
    }, [submitted]);

    return (
        <section className={`searchBar ${isOpen ? "active" : ""}`}>
            <div className="close-btn">
                <img
                    src={cancelIcon}
                    alt="cancel-btn"
                    onClick={closeSearchBar}
                />
            </div>

            <form className="searchBar-form" onSubmit={onSubmit}>
                <div className="searchBar-form__input-container">
                    <img
                        src={searchIcon}
                        className="searchBar__icon"
                        alt="search"
                    ></img>

                    <input
                        type="text"
                        placeholder="search location"
                        className="searchBar-form__input"
                        value={searchValue}
                        onChange={handleChangeValue}
                    />
                </div>

                <button type="submit" className="searchBar-form__submitBtn">
                    Search
                </button>
            </form>
            <section className="searchBar-results">
                {(places?.length > 0 &&
                    places.map((place) => {
                        return (
                            <SearchResultCard
                                {...place}
                                closeSearchBar={closeSearchBar}
                            />
                        );
                    })) || <Loader />}
            </section>
        </section>
    );
};

export default SearchBar;
