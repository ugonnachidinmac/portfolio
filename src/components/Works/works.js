import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is probe perect. I am excitted to bring my skills and experience to help business achieve their goals and create a strong online presence.</span>
      <div className='worksImgs'>
        <img src={Portfolio1} alt='Portfolio 1' className='worksImg' />
        <img src={Portfolio2} alt='Portfolio 2' className='worksImg' />
        <img src={Portfolio3} alt='Portfolio 3' className='worksImg' />
        <img src={Portfolio4} alt='Portfolio 4' className='worksImg' />
        <img src={Portfolio5} alt='Portfolio 5' className='worksImg' />
        <img src={Portfolio6} alt='Portfolio 6' className='worksImg' />
      </div>
      <button className='worksBtn'>See More</button>
    </section>
  );
}

export default Works;