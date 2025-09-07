import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/Hero.jsx";
import { heroData } from "./data/hero.js";

export default function App() {
    return (
        <>
            <Hero {...heroData} />
        </>
    )
}
