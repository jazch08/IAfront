import React from "react";
import { Routes, Route } from "react-router-dom";

import Load from "../paginas/Load";
import Home from "../paginas/Home";


const Routing = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/data" element={<Load />}/>
        </Routes>
    )
}
export default Routing;