import React from 'react'
import './Tracker.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'
import image8 from '../images/image8.png'
import image9 from '../images/image9.png';
const Tracker = () => {
  return (
    <div>
      <h1> Track Milestones </h1>
      <section >

        <h2>LEVEL</h2>
        <div> <img src={image3} alt='logo3' className='imageSize1 imageSpace1' /></div>
        <h4> Complete more challenge, gain more levels,
          unlock more rewards!
        </h4>
        <hr />
      </section>
      <div className="full-page-box">
        <div className="box-content">
          <section className=' box displayInLine'>
            <h2>LEVEL 2</h2>
            <div> <img src={image9} alt='logo8' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className=' box displayInLine'>
            <h2>LEVEL 5</h2>
            <div> <img src={image8} alt='logo8' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className='box displayInLine'>
            <h2>LEVEL 1</h2>
            <div> <img src={image7} alt='logo7' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className='box displayInLine'>
            <h2>LEVEL 4</h2>
            <div> <img src={image6} alt='logo6' className='imageSize1 imageSpace1' /></div>
          </section>

        </div>
      </div>
      <section className='logos'>
        <div>
          <img src={image1} alt="logo1 " className='imageSize imageSpace' />
        </div>
        <div> <img src={image2} alt='logo2' className='imageSize imageSpace' /></div>
        <div> <img src={image3} alt='logo3' className='imageSize imageSpace' /></div>
        <div><img src={image4} alt='logo4' className='imageSize imageSpace' />
        </div>
      </section>

    </div>
  )
}

export default Tracker