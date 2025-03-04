import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-md flex items-center justify-between px-6 py-4 z-50">
        <button className="text-gray-700 text-2xl">&#9776;</button> {/* Menú hamburguesa */}
        <Link to="/">
            <img src="logo.jpg" alt="Little Lemon" className="h-10" /> {/* Logo en el centro */}
        </Link>
        <Link to="/">
            <button className="text-gray-700 text-2xl">&#8592;</button> {/* Botón de regreso */}
        </Link>
        </nav>
    );
};

export default Navbar;