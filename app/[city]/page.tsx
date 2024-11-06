"use client";

import { useParams } from "next/navigation";
import styled from "styled-components";
import { Weather } from "@/app/interfaces/weather";
import useSWR from "swr";
import WeatherCard from "@/components/weatherCard";

const WeatherContentWrapper = styled.main`
    width: 80vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    justify-content: center; /* Center vertically */
    height: 100vh;
    background-color: #f8f0df;
    padding: 2rem;
`;

const CityName = styled.h1`
    font-size: 2.5rem;
    text-transform: capitalize; /* Capitalizes city name */
    margin-bottom: 1rem;
    color: #333;
`;

const WeatherCardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    color: #333;
    justify-content: center; /* Center vertically */
`;

export default function CityPage() {
    const params = useParams();

    // Fetch weather data with SWR
    const { data, error } = useSWR(`/api/getWeatherData?city=${params.city}`, (url) =>
        fetch(url).then((res) => res.json())
    );

    // Handle error and loading states
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    // If there is data, get the days otherwise an empty array.
    const days = data?.days || [];

    return (
        <WeatherContentWrapper>
            <CityName>{params.city}</CityName>
            <WeatherCardsContainer>
                {days.map((weather: Weather, i: number) => (
                    <WeatherCard
                        key={i}
                        datetime={weather.datetime}
                        conditions={weather.conditions}
                        description={weather.description}
                        tempmin={weather.tempmin}
                        tempmax={weather.tempmax}
                    />
                ))}
            </WeatherCardsContainer>
        </WeatherContentWrapper>
    );
}
