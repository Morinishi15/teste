import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Index";
//import About from "./pages/About";
import Clock from "../src/components/Clock/Clock"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/About" element={ <About /> }/>
                <Route path="/Clock" element={ < setPomodoroCycleType={undefined}/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;