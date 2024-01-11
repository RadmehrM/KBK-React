import image1 from "../images/69ba5b_25690ae97244444f930a4f3ff90ea00b~mv2.webp";
import image2 from "../images/69ba5b_86aa0cc93ce841509b8f3d93e2b2a771~mv2.webp";
import "./About.css";

const items = ["Kids being Kids is founded by two dedicates students, Ben Lambert and Adam Cohen, with the shared goal of giving back to their community.",
"Ben and Adam rally their community members, including fellow students, families, and local businesses, to join their cause.",
"Since its establishment, the organization has managed to donate over $20,000 worth of sports equipment and running shoes to renowned organizations such as the Boys and Girls Club, YMCA, and Teen Challenge.",
"Looking ahead, Kids being Kids has ambitious plans to expand their outreach efforts by securing monetary donations from generous supporters. By the end of 2023, they hope to establish a robust financial support system that will enable them to extend their reach to even more deserving children in the community."];

function TimelineItem({ description, index }){
    return (
        <div className={`timelineItem timelineItem-${index}`}>
            <div className='timelineIcon'></div>
            <div className="timelineContent">
                {description}
            </div>
        </div>
    )
}

function TimelineItems({ items }){
    return (
        <div className="timelineItems">
            {items.map((item, index) => {
                return <TimelineItem key={index} description={item} index={index}/>
            })}
        </div>
    )
}


function About(){
    return (
        <div className="timelineContainer">
            <div className="timeline"></div>
            <TimelineItems items={items}/>
            <div className='timelineImages'>
                <img className="image1" src={image1}></img>
                <img className="image2" src={image2}></img>
            </div>
        </div>
    )
}

export default About;