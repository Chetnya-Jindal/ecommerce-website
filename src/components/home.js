/* eslint-disable no-unused-vars */
import React from 'react'
import {Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import Homeproduct from './homeproduct';
import './home.css'
const Home = ({detail, view, close, setClose, addtocart}) => {
  return (
    <>
        {
        close ?
        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                detail.map((curElm) => 
                {
                    return(
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8... </p>
                                <h3>{curElm.Price}</h3>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
               <p><h2><pre>Be original,<br/>
                        be legendary!!</pre></h2><h5>Quality starts with originality and Originality is the key to innovation...<br/>
It is the core of creativity. So, Be Original and be the change.</h5></p> 
               
            </div>
            <div className='img_box'>
                <img src='./img/slider-img.png' alt='sliderimg'></img>
            </div>
        </div>
    </div>
    <div className='product_type'>
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/Mobile Phone.png' alt='mobile'></img>
          </div>
          <div className='detail'>
            <p>23 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/smart watch.png' alt='watch'></img>
          </div>
          <div className='detail'>
            <p>18 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/headphone.png' alt='headphone'></img>
          </div>
          <div className='detail'>
            <p>52 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/cpu heat.jpg' alt='cpu '></img>
          </div>
          <div className='detail'>
            <p>63 products</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className='product'>
      <h2>Top Products</h2>
      <div className='container'>
        {
          Homeproduct.map((curElm) => 
          {
            return(
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className='icon'>
                    <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                                      
                  </div>
                </div>
                <div className='detail'>
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>${curElm.Price}</h4>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    <div className='banner'>
      <div className='container'>
      <div className='detail'>
        <h4>LATEST TECHNOLOGY ADDED</h4>
        <h3>Apple iPad 10.2 9th Gen - 2021</h3>
        <p>$ 986</p>
        <Link to='/product' className='link'>Shop Now  <BsArrowRight /></Link>
      </div>
      <div className='img_box'>
        <img src='./img/slider-img.png' alt='sliderimg'></img>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home