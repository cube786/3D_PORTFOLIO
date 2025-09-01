import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'



const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className='font-semibold'>Aneesh</span>👋
            <br />
            A Web Developer Based in Dubai
            </h1>
    ),
    2: (
       <InfoBox
        text = "Gained experiences working with companies in India and KSA, building scalable web applications and managing IT systems"
        link = "/about"
        btnText="Learn more"
       />
    ),
    3: (
        <InfoBox
        text = "Here's a collection of my portfolios showcasing the projects I've built."
        link = "/projects"
        btnText="View My Projects"
       />
    ),
    4: (
        <InfoBox
        text = "Need a project done or looking for a dev? Reach out, I'd love to discuss opportunities."
        link = "/contact"
        btnText="Contact Me"
       />
    ),

}




const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo