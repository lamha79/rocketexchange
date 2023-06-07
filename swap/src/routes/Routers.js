import React from "react"

import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Rocketswap from "../pages/Rocketswap"

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
                path="/home"
                element={
                    <Home />
                }
            />
            <Route
                path="/swap"
                element={
                    <Rocketswap />
                }
            />
        </Routes>
    )
}

export default Routers
