import { useState } from 'react'
import React  from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils.js'
export const Navbar = () => {
    const [startMenu,setstartMenu]=useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn}
             src={startMenu ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
              alt="menu-button" 
              onClick={()=>
                setstartMenu(!startMenu)}
               />
            <ul className={`${styles.menuItems} ${startMenu && styles.startMenu}`}
             onClick={()=>{setstartMenu(false)}}>
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
  )
}

