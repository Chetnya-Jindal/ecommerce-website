/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";

import './product.css'
const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {


    const { loginWithRedirect,isAuthenticated} = useAuth0();
   
  return (
    <>
    {
        close ?
        <div className='product_detail'>+
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
    <div className='products'>
        
        <div className='container'>
           
            <div className='productbox'>
                <div className='contant'>
                    {
                        product.map((curElm) => 
                        {
                            return(
                                <><div className='box' key={curElm.id}>    <div className='img_box'>
  <img src={curElm.Img} alt={curElm.Title}></img>
 <div className='icon'>  {                                          
 isAuthenticated ? 
<li ><AiOutlineShoppingCart /></li>:
 <li ><AiOutlineShoppingCart /></li>
                                            }
     
       </div></div>
 <div className='detail'>
 <p>{curElm.Cat}</p>
   <h3>{curElm.Title}</h3>
 <h4>${curElm.Price}</h4>
     </div> </div>
 </>
   )})  }
   </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product