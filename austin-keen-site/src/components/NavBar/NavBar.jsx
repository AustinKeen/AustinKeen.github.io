import React, { useState } from "react"; // Import the React library
import styles from "./NavBar.module.css"; // Import the CSS module
import menuIcon from "../../assets/nav/menuIcon.png";  // Import the getImageUrl function from the utils.js file
import closeIcon from "../../assets/nav/closeIcon.png";  // Import the getImageUrl function from the utils.js file

export const NavBar = () => { // Create a new component called NavBar  
    const [menuOpen, setMenuOpen] = useState(false); // Create a state variable called menuOpen and a function called setMenuOpen to update it

    return ( // Return the following JSX
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Uncle Austin's Portfolio
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                        ? closeIcon
                        : menuIcon
                    }
                    alt="Menu" 
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
