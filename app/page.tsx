"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    justify-content: center; /* Center vertically */
    height: 100vh;
    background-color: #f8f0df;
    padding: 2rem;
`;

const StyledH1 = styled.h1`
    font-size: 2.5rem;
    margin: 1rem 0;
    color: #333;
    
`;

const StyledInput = styled.input`
    font-size: 1rem;
    padding: 0.7rem 1rem;
    margin: 1rem 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 200px;

    &::placeholder {
        font-style: italic;
        color: #aaa;
    }
`;

const StyledButton = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-top: 5px;
    padding: 8px 15px;
    background-color: #84c7e4;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    a {
        text-decoration: none;
    }
`;


export default function Home() {
    const [city, setCity] = useState("");

    return (
        <StyledDiv>
            <StyledH1>Explore Today’s Weather in Any City</StyledH1>
            <StyledInput
                type="text"
                value={city}
                placeholder="Enter city name"
                onChange={(e) => setCity(e.target.value)}
            />
            <StyledButton>
                <Link href={`/${city}`}>Get Weather</Link>
            </StyledButton>
        </StyledDiv>
    );
}
