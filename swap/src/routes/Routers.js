import React from "react"

import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import RocketSwap from "../pages/RocketSwap"

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/swap" element={<RocketSwap />} />
        </Routes>
    )
}

export default Routers
