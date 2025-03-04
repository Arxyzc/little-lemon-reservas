import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white shadow-md py-6 mt-10">
            <div className="container mx-auto text-center">
                <img src="/logo.jpg" alt="Little Lemon Logo" className="mx-auto h-12 mb-4" />
                <p className="text-gray-600">&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
