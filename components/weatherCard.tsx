import styled from "styled-components";
import { Weather } from "@/app/interfaces/weather";

const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    border: 1px solid #ccc;
    margin: 10px;
    width: 250px;
    border-radius: 10px;
    position: relative;


    h2{
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 0.5rem;
        absolute: right;
    }
    
    #conditions {
        font-size: 1rem;
        font-weight: 500;
        color: #555; /* Secondary text color */
        margin-bottom: 0.5rem;
    }

    #description {
        font-size: 0.9rem;
        color: #777; /* Lighter color for description */
        margin-bottom: 0.8rem;
    }

    p {
        font-size: 1rem;
        color: #333;
        margin: 0;
    }

    small {
        font-size: 0.8rem;
        color: #888;
    }
`;

export default function WeatherCard(props: Weather) {
    return (
        <WeatherCardWrapper className="weather-card">
            <h2>{props.datetime}</h2>
            <p id="conditions">{props.conditions}</p>
            <p id="description">{props.description}</p>
            <p>{props.tempmin}°/{props.tempmax}° <small>min/max</small></p>
        </WeatherCardWrapper>
    );
}
