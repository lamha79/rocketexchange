import React from "react"

import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import RocketSwap from "../pages/RocketSwap"
import Contact from "../pages/Contact"
import NftStaking from "../pages/NftStaking"
import Admin from "../pages/Admin"

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/swap" element={<RocketSwap />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/staking" element={<NftStaking />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    )
}

export default Routers
