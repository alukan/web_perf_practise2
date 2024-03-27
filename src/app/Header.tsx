'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import '../../public/assets/css/tooplate-crispy-kitchen.css';
import '../../public/assets/css/bootstrap-icons.css';
import '../../public/assets/css/bootstrap.min.css'
import axios from 'axios';
const Header = () => {
    const path = usePathname()

    function handleReservationClick () {
        console.log("works")
        
    };

    const isActive = (pathname: string) => pathname === path;

    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-lg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link className="navbar-brand" href="/">
                    Crispy Kitchen
                </Link>



                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} href="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} href="/about">
                                Story
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/menu') ? 'active' : ''}`} href="/menu">
                                Menu
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/news') ? 'active' : ''}`} href="/news">
                                Our Updates
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="d-none d-lg-block">
                    <button type="button" className="custom-btn btn btn-danger" onClick={handleReservationClick}>Reservation</button>
                </div>

            </div>
        </nav>
    );
};

export default Header;
