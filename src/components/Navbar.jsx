import React, { useState, useEffect } from 'react';
import Logo from "../assets/Shiesta.svg";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // ✅ Tambahkan ini

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0); // ✅ Ubah scroll state
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={Logo} alt="logo" />
                <div className='hiddenLinks'>
                    <Link to="/"> Home </Link>
                    <Link to="/about"> About Us </Link>
                    <Link to="/price"> Price </Link>
                    <Link to="/work"> Work </Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to="/"> Home </Link>
                <Link to="/about"> About Us </Link>
                <Link to="/price"> Price </Link>
                <Link to="/work"> Work </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
