import image from '../images/circle.png'
import Footer from './Footer';

function Home() {

    return(
    <div className="root-container">
       <div className="startBanner">
       <div className="box"></div>
       <div className="headline">
           <p>Small Catchy Headline To Introduce your Service</p>
       </div>
       </div>
       <div className="mission">
        <div className='mission-group'>
        <img className="circle" src={image} alt='circle'/>
        <div className='mission-title'>
        <h1>Our Mission</h1>
        </div>
        <div className="mission-box">
        <p>We are passionate about giving <b>every</b> child the opportunity to play sports, regardless of their economic circumstances</p>
        </div>
        </div>
       </div>
       <div className='stats'>
        <div className='stat' id='statA'>
            <div className='stat-title'>8</div>
            <div className='stat-content'>Presently collaborating with seven partner organizations and companies to facilitate the distribution of donated equipment to deserving families. These include the YMCA, Boys and Girls Club (BGC), NB Toronto, and Teen Challenge, among others</div>
        </div>
        <div className='stat' id='statB'>
            <div className='stat-title'>$70,000</div>
            <div className='stat-content'>In just one year, our team has donated over $70,000 worth of sports equipment and running shoes, making a remarkable impact. We are dedicated to supporting the community and have successfully provided valuable resources to individuals and organizations in need. These contributions enhance access to sports and positively influence countless lives, empowering individuals to pursue their athletic aspirations. We are proud of our accomplishments and remain committed to making a difference through impactful initiatives.</div>
        </div>
        <div className='stat' id='statC'>
            <div className='stat-title'>350+</div>
            <div className='stat-content'>We have extended our support to more than 350 children throughout Ontario, granting them the invaluable opportunity to engage in sports activities. By providing equipment donations, we aim to ensure that children have the means to participate in sports and experience the numerous benefits that come with it.</div>
        </div>
       </div>
       <div className='main-stat'>
        <div className='main-stat-group'>
            <p>
            <b>1 in 3 Canadian Kids</b> are not in organized sports due to the high costs. Kids being Kids Organization provides sports equipment to children to help mitigate the cost to play
            </p>
        </div>
       </div>

    </div>
    )

}


export default Home;