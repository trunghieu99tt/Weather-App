import React from "react";
import Clear from "../../static/images/Clear.png";
import Hail from "../../static/images/Hail.png";
import HeavyCloud from "../../static/images/HeavyCloud.png";
import HeavyRain from "../../static/images/HeavyRain.png";
import LightCloud from "../../static/images/LightCloud.png";
import LightRain from "../../static/images/LightRain.png";
import Shower from "../../static/images/Shower.png";
import Sleet from "../../static/images/Sleet.png";
import Snow from "../../static/images/Snow.png";
import Thunderstorm from "../../static/images/Thunderstorm.png";

const WeatherIcon = ({ status, className }) => {
    let iconSrc = null;

    switch (status) {
        case "sn":
            iconSrc = Snow;
            break;
        case "sl":
            iconSrc = Sleet;
            break;
        case "h":
            iconSrc = Hail;
            break;
        case "t":
            iconSrc = Thunderstorm;
            break;
        case "hr":
            iconSrc = HeavyRain;
            break;
        case "lr":
            iconSrc = LightRain;
            break;
        case "s":
            iconSrc = Shower;
            break;
        case "hc":
            iconSrc = HeavyCloud;
            break;
        case "lc":
            iconSrc = LightCloud;
            break;
        case "c":
            iconSrc = Snow;
            break;

        default:
            iconSrc = Clear;
    }

    return <img src={iconSrc} className={className} alt="weather-icon" />;
};

export default WeatherIcon;
