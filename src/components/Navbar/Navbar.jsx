import React, { useRef, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underLine from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollY, setLastScrollY] = useState(0);

    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    };

    // Track scroll direction
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');  // User is scrolling down
            } else {
                setScrollDirection('up');  // User is scrolling up
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    // Function to handle click on menu items
    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);  // Update the active menu item
        closeMenu();  // Close the menu after clicking
    };

    return (
        <div className={`navbar ${scrollDirection === 'down' ? 'navbar-hidden' : 'navbar-visible'}`}>
            <img src={logo} alt="" />
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open ' />
            <ul ref={menuRef} className='nav-menu'>
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#home'>
                        <p onClick={() => handleMenuClick("home")}>Home</p>
                    </AnchorLink>
                    {menu === 'home' ? <img src={underLine}></img> : null}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#about'>
                        <p onClick={() => handleMenuClick("about")}>About Me</p>
                    </AnchorLink>
                    {menu === 'about' ? <img src={underLine}></img> : null}
                </li>
                {/* <li>
                    <AnchorLink className='anchor-link' offset={50} href='#services'>
                        <p onClick={() => handleMenuClick("services")}>Services</p>
                    </AnchorLink>
                    {menu === 'services' ? <img src={underLine}></img> : null}
                </li> */}
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#work'>
                        <p onClick={() => handleMenuClick("work")}>Works</p>
                    </AnchorLink>
                    {menu === 'work' ? <img src={underLine}></img> : null}
                </li>
                <li className="nav-connect" onClick={() => handleMenuClick("contact")}>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        <p>Contact</p>
                    </AnchorLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
