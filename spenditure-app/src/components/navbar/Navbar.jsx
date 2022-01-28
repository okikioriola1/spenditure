import React, {useState} from 'react'
import logo from '../../images/logo.png'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'

const Menu = () => (
    <>
    <p><a href="https://dev-spenditure.pantheonsite.io/blog/">Blog</a></p>
    <p><a href="#what-we-offer">Services</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#contact">Contact</a></p>
    
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    
    return (
        <div className="spenditure__navbar">
            <div className="spenditure__navbar-links">
                <div className="spenditure__navbar-links-logo">
                    <img className="logo-img" src={logo} alt="spenditure-logo"/>
                    <span className="spenditure__logo-text"><h3>Spenditure</h3></span>
                    
                </div>
                <div className="spenditure__navbar-links_container">
                    <Menu/>
                </div>
            </div>
            <div className="spenditure__navbar-sign">
                    <p>Sign in</p>
                    <button type="button">Create a free account</button>
                </div>

                <div className="spenditure__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#666" size={27} onClick={()=>setToggleMenu(false)}/>
                    :<RiMenu3Line color="#666" size={27} onClick={()=>setToggleMenu(true)}/>
                    }
                    {toggleMenu && (
                        <div className="spenditure__navbar-menu_container">
                            <div className="spenditure__navbar-menu_container-links">
                                <Menu/>
                                <div className="spenditure__navbar-menu_container-links-sign">
                    <p>Sign in</p>
                    <button type="button">Create a free account</button>
                </div>

                        </div>
                        </div>
                    )}

                </div>
            
        </div>
    )
}

export default Navbar

