import image from '../images/circle.png'

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
        <img className="circle" src={image} alt='circle'/>
        <div className='mission-title'>
        <h1>Our Mission</h1>
        </div>
        <div className="mission-box">
        <p>We are passionate about giving <b>every</b> child the opportunity to play sports, regardless of their economic circumstances</p>
        </div>
       </div>
       <div className='stats'>
        <div className='stat' id='statA'></div>
        <div className='stat' id='statB'></div>
        <div className='stat' id='statC'></div>
       </div>

    </div>
    )

}


export default Home;