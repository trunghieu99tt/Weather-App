import * as actionTypes from "./app.types";

export const fetchData = () => ({
    type: actionTypes.FETCH_DATA,
});

export const fetchPlaces = () => ({
    type: actionTypes.FETCH_PLACES
})