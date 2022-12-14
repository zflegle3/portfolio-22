//React
import { useEffect } from "react";
//UUID
import { v4 as uuidv4 } from 'uuid';
//Svgs
import { ReactComponent as GithubSvg } from "../images/github2.svg";
import { ReactComponent as LinkSvg } from "../images/link.svg";
import { ReactComponent as HtmlSvg } from "../images/svgs/icons/html5.svg";
import { ReactComponent as CssSvg } from "../images/svgs/icons/css3.svg";
import { ReactComponent as JSSvg } from "../images/svgs/icons/javascript.svg";
import { ReactComponent as NpmSvg } from "../images/svgs/icons/npm.svg";
import { ReactComponent as ReactSvg } from "../images/svgs/icons/react.svg";
import { ReactComponent as SassSvg } from "../images/svgs/icons/sass.svg";
import { ReactComponent as WebpSvg } from "../images/svgs/icons/webpack.svg";
import { ReactComponent as ApiSvg } from "../images/svgs/icons/api.svg";
import { ReactComponent as FbSvg } from "../images/svgs/icons/firebase.svg";
import { ReactComponent as JestSvg } from "../images/svgs/icons/jest.svg";

//GSAP
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function ProjectMobile(props) {
    //props.projectData

    const getTechLogo = (techType) => {
        switch (techType) {
            case "html":
                return(
                    <div className="tech-logo">
                        <HtmlSvg />
                    </div>);
            case "css":
                return(
                    <div className="tech-logo">
                        <CssSvg />
                    </div>);
            case "javascript":
                return(
                    <div className="tech-logo">
                        <JSSvg />
                    </div>);
            case "sass":
                return(
                    <div className="tech-logo">
                        <SassSvg />
                    </div>);
            case "react":
                return(
                    <div className="tech-logo">
                        <ReactSvg />
                    </div>);
            case "npm":
                return(
                    <div className="tech-logo">
                        <NpmSvg />
                    </div>);
            case "webpack":
                return(
                    <div className="tech-logo">
                        <WebpSvg />
                    </div>);
            case "jest":
                return(
                    <div className="tech-logo">
                        <JestSvg />
                    </div>);
            case "firebase":
                return(
                    <div className="tech-logo">
                        <FbSvg />
                    </div>);
            case "api":
                return(
                    <div className="tech-logo">
                        <ApiSvg />
                    </div>);
            default:
        }
    }
 
    let projTech = props.projectData.tech.map((techItem) => 
        <div key={uuidv4()} className={`tech-item ${techItem[1]}`} >
            {getTechLogo(techItem[1])}
            <p > {techItem[0]}</p>
        </div>
    );

    useEffect(() => {
        // Project Content Slide Up
        gsap.to(`.project-container-mobile-${props.projectData.id}`, {
            scrollTrigger: {
                trigger: `.project-container-mobile-${props.projectData.id}`,
                start: "-50% center",
                end: "bottom top",
                // markers: true,
                toggleActions: "play none none none",
            },
            duration: 0.5,
            y: 0,
            opacity: 1,
        });
    },[]);

    return (
        <div className={`project-container-mobile-${props.projectData.id}`}>
            <div className="project-content-container">

                <div className={`project-header-${props.projectData.id}`}>
                    <p className={`project-title-${props.projectData.id}`}>{props.projectData.title}</p>
                </div>

                <div className={`project-details-${props.projectData.id}`}>
                    <p className="project-desc">{props.projectData.desc}</p>
                    
                    <div className="tech-list">
                        {projTech}
                    </div>

                    <div className="project-links">
                            <a className="project-btn" href={props.projectData.demoUrl}>
                                <div className="link-svg-proj">
                                    <LinkSvg />
                                </div>
                                <p>Live Demo</p>
                            </a>
                            <a className="project-btn" href={props.projectData.codeUrl}>
                                <div className="link-svg-proj">
                                    <GithubSvg />
                                </div>
                                <p>See Code</p>
                            </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectMobile;