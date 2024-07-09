import React from 'react';
import './intro.css';
import bg from '../../assets/image2.png';
import btnImg from '../../assets/hireme3.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
   <section id='intro'>
        <div className='introcontent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Chidinma,</span> <br/>Website Designer</span>
            <p className='introPara'>I am a skilled web designer with experience in creating <br />visually appealing and user friendly websites</p>
            <Link>
                <button className='btn'>
                <img src={btnImg} alt='Hire me' className='btnImg' />Hire me</button>
            </Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
   </section>
  )
}

export default Intro
