import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillsTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and possionate web designer with experience in creating visually appealing and user-friendly website. I have a strong undestanding of design and a keen eye for detail. I am proficient in HTML, CSS, React and Javascript, as well as design software such as Adobe Photoshop and Corel Draw also have knowledge in Microsoft Packages.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX design</h2>
                    <p>my next tech career</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Website design</h2>
                    <p>Out for Intern</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App design</h2>
                    <p>my next tech career</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
