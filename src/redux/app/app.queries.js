import { WEATHER_API } from "../../variables";

export async function queryFetchData(params) {
    const { locationID } = params;
    const response = await fetch(`${WEATHER_API}${locationID}`);
    const data = await response.json();
    return data;
}

export async function queryFetchLocation(params) {
    const { value, isName } = params;
    const response = await fetch(
        `${WEATHER_API}search/?${isName ? "query" : "lattlong"}=${value}`
    );
    const data = await response.json();
    return data;
}
