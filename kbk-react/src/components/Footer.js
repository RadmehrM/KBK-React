import React from 'react'
import nbImage from '../images/nb.webp';
import leafsImage from '../images/leafs.webp';
import baseballImage from '../images/baseball.webp';
import bgcImage from '../images/bgc.webp';
import { SocialIcon } from 'react-social-icons'
import './Footer.css'


function Footer() {
  return (
    <footer >
        
        <div className='affiliates'>
            <a href="https://www.newbalance.ca/" target="_blank" >
                <img src={nbImage} alt='nb'/>
            </a>
            <a href="https://www.bgclondon.ca/" target="_blank" >
                <img src={bgcImage} alt='nb'/>
            </a>
            <a href="https://westernmustangs.ca/sports/baseball" target="_blank" >
                <img src={baseballImage} alt='nb'/>
            </a>
            <a href="https://nationals.gojhl.ca/" target="_blank" >
                <img src={leafsImage} alt='nb'/>
            </a>
        </div>
            
        <div className='socials'>
            <a href='mailto:kidsbeingkidscharity@gmail.com'> kidsbeingkidscharity@gmail.com</a>

            <SocialIcon url='https://www.linkedin.com/company/kids-being-kids-charity/'
                bgColor='transparent'
                style={{ width: '100px', height: '100px' }}
            />

            <SocialIcon url='https://www.instagram.com/kidsbeingkidsorg/'
                bgColor='transparent'
                style={{ width: '100px', height: '100px' }}
            />
            

            
        </div>
    </footer>
  )
}

export default Footer