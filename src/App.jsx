import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import SkillsRings from "./components/SkillsRings";
import { heroData } from "./data/hero.js";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsAndExperience from "./components/SkillsAndExperience";

export default function App() {
    return (
        <>
            <Hero {...heroData} />
            <Projects id="work" />
            <SkillsAndExperience/>
        </>
    )
}
