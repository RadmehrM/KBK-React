import React from 'react';
import {Link} from 'react-router-dom';
import image from '../images/logo.png'

const Navbar=()=>{
    return (    
                <div>
                <div className='KBKLOGO'>
                    <img src={image} alt='KBKlogo' width="250" height="auto"/>
                </div>
                <div className='navBar'>
                    <div className='homeNAV'>
                        <Link style={{ textDecoration: 'none' }} to="/home">Home</Link>
                    </div>
                    <div className='Team'>
                        <Link style={{ textDecoration: 'none' }} to="/team">Our Story</Link>
                    </div>
                    <div className='Team'>
                        <Link style={{ textDecoration: 'none' }} to="/team">The Team</Link>
                    </div>
                    <div className='About'>
                        <Link style={{ textDecoration: 'none' }} to="/about">About</Link>
                    </div>
                    <div className='Location'>
                        <Link style={{ textDecoration: 'none' }} to="/Location">Location</Link>
                    </div>
                    <div className='Team'>
                        <Link style={{ textDecoration: 'none' }} to="/team">Gallery</Link>
                    </div>
                    <div className='Team'>
                        <Link style={{ textDecoration: 'none' }} to="/team">Contact</Link>
                    </div>
                    <div className='Team'>
                        <Link style={{ textDecoration: 'none' }} to="/team">Testimonial</Link>
                    </div>
                </div>
                </div>
    )

}

export default Navbar;