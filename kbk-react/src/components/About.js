import image1 from "../images/69ba5b_25690ae97244444f930a4f3ff90ea00b~mv2.webp";
import image2 from "../images/69ba5b_86aa0cc93ce841509b8f3d93e2b2a771~mv2.webp";
import underline from "../images/underline.png"
import "../styles/About.css";

const items = ["Kids being Kids is founded by two dedicates students, Ben Lambert and Adam Cohen, with the shared goal of giving back to their community.",
"Ben and Adam rally their community members, including fellow students, families, and local businesses, to join their cause.",
"Since its establishment, the organization has managed to donate over $20,000 worth of sports equipment and running shoes to renowned organizations such as the Boys and Girls Club, YMCA, and Teen Challenge.",
"Looking ahead, Kids being Kids has ambitious plans to expand their outreach efforts by securing monetary donations from generous supporters. By the end of 2023, they hope to establish a robust financial support system that will enable them to extend their reach to even more deserving children in the community."];

// function TimelineItem({ description, index }){
//     return (
//         <div className={`timelineItem timelineItem${index}`}>
//             <div className='timelineIcon'>lol</div>
//             <div className="timelineContent">
//                 {description}
//             </div>
//         </div>
//     )
// }

// function TimelineItems({ items }){
//     return (
//         <div className="timelineItems">
//             {items.map((item, index) => {
//                 return <TimelineItem key={index} description={item} index={index}/>
//             })}
//         </div>
//     )
// }


function About(){
    return (
        <div className='aboutComponent'>
            
            <div className='aboutHeader'>
                <div className='about-disp-box'>
                    <h1 id='about-title'>About Us</h1>
                    <div className='about-text-box'>
                        <p id='about-head1' className='about-text'>The Kids being Kids Organization was founded by two dedicated students from Western University, Ben Lambert and Adam Cohen, 
                            who share a common goal of giving back to their community. Recognizing the tremendous impact that sports can have on a child's life, 
                            they firmly believe that every child should have the opportunity to experience the joy, camaraderie, 
                            and personal growth that come with participating in sports, regardless of their economic circumstances.</p>
                        <p id='about-head1' className='about-text'>Motivated by their own experiences and the support they received from their community, Ben and Adam decided to harness the power of their local 
                            community and extend the same opportunities to the next generation of athletes. 
                            They rallied their community members, including fellow students, families, and local businesses, to join their cause.</p>
                    </div>
                    
                </div>
                

            </div>
            <div className="timelineHeader">
                <div className="timelineHeaderText">Timeline . . .</div>
                <img className="timelineUnderline" src={underline}/>
            </div>
            <div className="timelineContainer">
                <div className="timelineLeft">
                    <div className="timeline-line">
                        <div className="timelinePoint"></div>
                    </div>
                    <div className="timelineComponent">"Kids being Kids is founded by two dedicates students, Ben Lambert and Adam Cohen, with the shared goal of giving back to their community."</div>
                    <div className="timeline-line">
                        <div className="timelinePoint timelinePointMiddle"></div>
                    </div>
                    <div className="timelineComponent">"Ben and Adam rally their community members, including fellow students, families, and local businesses, to join their cause."</div>
                    <div className="timeline-line">
                        <div className="timelinePoint timelinePointMiddle"></div>
                    </div>
                    <div className="timelineComponent">"Since its establishment, the organization has managed to donate over $20,000 worth of sports equipment and running shoes to renowned organizations such as the Boys and Girls Club, YMCA, and Teen Challenge."</div>
                    <div className="timeline-line">
                        <div className="timelinePoint timelinePointBottom"></div>
                    </div>
                    <div className="timelineComponent">"Looking ahead, Kids being Kids has ambitious plans to expand their outreach efforts by securing monetary donations from generous supporters. By the end of 2023, they hope to establish a robust financial support system that will enable them to extend their reach to even more deserving children in the community."</div>
                </div>
                <div className='timelineImages'>
                    <img className="timelineImage" src={image1}></img>
                    <img className="timelineImage" src={image2}></img>
                </div>
            </div>
        </div>
    )
}

export default About;