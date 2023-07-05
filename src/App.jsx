import React from "react";
import * as Project from "./project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/keyboard"
                        element={<Project.VirtualKeyBoard.default />}
                    />
                    <Route path="/" element={<Project.ImageSlider.default />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
