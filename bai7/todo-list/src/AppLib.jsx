import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lib from "./Lib";
import BookCreate from "./BookCreate";
import BookUpdate from "./BookUpdate";

function AppLib() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Lib />} />
                <Route path="/book/create" element={<BookCreate />} />
                <Route path="/book/update/:id" element={<BookUpdate />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppLib;