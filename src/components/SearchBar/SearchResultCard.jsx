import React, { useCallback } from "react";
import RightArrow from "../../static/images/righ-arrow.png";
import { useDispatch } from "react-redux";
import * as actionTypes from "../../redux/app/app.types";

const SearchResultCard = (props) => {
    const dispatch = useDispatch();

    const getData = useCallback(
        (data) => {
            dispatch({
                type: actionTypes.FETCH_DATA,
                payload: {
                    locationID: data && data.woeid,
                },
            });
        },
        [dispatch]
    );
    const clearData = useCallback(() => {
        dispatch({
            type: actionTypes.CLEAR_DATA,
        });
    }, [dispatch]);

    return (
        <article
            className="searchResultCard"
            onClick={() => {
                clearData();
                props.closeSearchBar();
                getData(props);
            }}
        >
            <p className="searchResultCard__name">{props.title || ""}</p>
            <img
                src={RightArrow}
                alt="right-arrow"
                className="searchResultCard__icon"
            ></img>
        </article>
    );
};

export default SearchResultCard;
