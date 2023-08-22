import React, { useContext } from 'react';
import banner from './../../assets/sonevajani-1880.webp'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const {logOut, user} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/login')
    }
    // console.log(user.email)
    const handleSignOut = () => {
        logOut()
    }
    return (
        <>
            <nav>
                <div className='header-links'>
                    <Link to="/">Home</Link>
                    <Link to="/login">Log In</Link>
                    <Link to="/book">Book</Link>
                </div>
                <div className='logout-container'>
                    {
                        user ?
                         <div style={{display:'flex', gap:'20px',alignItems:'baseline'}}>
                            <p>{user.email}</p> 
                            <Button onClick={handleSignOut} variant="outlined">Log Out</Button>
                         </div> :
                          <div style={{display:'flex', gap:'20px',alignItems:'baseline'}}>
                            <p>No User Found</p> <Button onClick={handleNavigate} variant="outlined">Log In</Button>
                          </div>
                    }
                    
                </div>
            </nav>
            <div className='header-container'>

                <img src={banner} alt="" />
                <span>
                    <h1>Burj Al Arab</h1>
                    <h4>A Global Icon of Arabian Luxury</h4>
                </span>
            </div>
           <div className="marquee">
           <Marquee speed={100}> 
                Discover the Splendor of Our Luxurious Accommodations. Reserve Your Spot Today!  Step into Elegance and Comfort at Our Luxurious Hotel. Secure Your Stay Now! Embrace Luxury and Hospitality at Our Exquisite Hotel. Make Your Reservation Today! Indulge in Opulence and Relaxation at Our Prestigious Hotel. Book Your Stay Today! Experience the Grandeur of Our Luxurious Retreat. Plan Your Stay with Us! Immerse Yourself in the Lap of Luxury at Our Elegant Hotel. Reserve Today!
                Unveil a World of Luxury and Comfort at Our Grand Hotel. Secure Your Stay!
                Welcome to a Sanctuary of Luxury and Hospitality. Reserve Your Room Today!
                Immerse in Luxury and Unwind in Style at Our Hotel. Book Your Experience Today!
                Step into a Realm of Opulence and Serenity. Book Your Luxurious Getaway Now!
            </Marquee>
           </div>
        </>
    );
};

export default Header;
