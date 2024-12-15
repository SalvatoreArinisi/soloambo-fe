import React, { useState } from "react";
import PropTypes from "prop-types";
import './MenuMobile.css';

const MobileMenu = ({ onRegulationClick,onLogoutClick,isAuthenticated}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="mobile-menu">
            <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            {menuOpen && (
                <ul>
                    <li>
                        <a href="#regolamento" onClick={onRegulationClick}>
                            Regolamento
                        </a>
                    </li>
                    {isAuthenticated && (<li>
                        <a  href="#logout" onClick={onLogoutClick}>
                            logout
                        </a>
                    </li>)}
                </ul>
            )}
        </div>
    );
};

MobileMenu.propTypes = {
    onRegulationClick: PropTypes.func.isRequired,
    onLogoutClick:PropTypes.func.isRequired
};

export default MobileMenu;
