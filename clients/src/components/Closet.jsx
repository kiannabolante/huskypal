import React from 'react'
import './Closet.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'
import image8 from '../images/image8.png'
const Closet = () => {
  return (
    <div className='container '>
      <h1>Your Accessories</h1>
      <section className='displayLine'>
        <table class="table custom-table">
          <thead>
            <tr className="taller-row">
              <th><img src={image5} alt='activate1' className='activate' />
                <button type="button" class="oval-button">In-Use</button>
              </th>
              <th>
                <img src={image6} alt='activate6' className='activate' />
                <button type="button" class="oval-button">In-Use</button>

              </th>

            </tr>
          </thead>
          <tbody>
            <tr className="taller-row">
              <th><img src={image7} alt='activate1' className='activate' />
                <button type="button" class="oval-button">In-Use</button>

              </th>
              <th><img src={image8} alt='activate1' className='activate' />
                <button type="button" class="oval-button">In-Use</button>

              </th>
            </tr>
            <tr className="taller-row">
              <th></th>
              <td></td>
            </tr>
            <tr className="taller-row">
              <th></th>
              <td></td>
            </tr>
            <tr className="taller-row">
              <th></th>
              <td></td>
            </tr>
          </tbody>
        </table>
        <section className='logos'>
          <div>
            <img src={image1} alt="logo1 " className='imageSize imageSpace' />
          </div>
          <div> <img src={image2} alt='logo2' className='imageSize imageSpace' /></div>
          <div> <img src={image3} alt='logo3' className='imageSize imageSpace' /></div>
          <div><img src={image4} alt='logo4' className='imageSize imageSpace' />
          </div>
        </section>
      </section>
    </div>


  )
}
export default Closet