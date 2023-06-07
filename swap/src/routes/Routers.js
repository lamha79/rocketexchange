import React from "react"

import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import RocketSwap from "../pages/RocketSwap"
import Contact from "../pages/Contact"
import NftStacking from "../pages/NftStacking"

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/swap" element={<RocketSwap />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/stacking" element={<NftStacking />} />
        </Routes>
    )
}

export default Routers
