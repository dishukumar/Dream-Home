import React from 'react';
import './valuer.css'
function valuer(props) {
  return (
    <div>
      <div className='valuer_img'>
        {/* <img src="/img/about/01.jpg" alt="" /> */}
      </div>

      <h1>Card Flip with Text</h1>
      <div className="container">
      <div className='row'>
        <div className='col-lg-4'>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front ">
                <img src="/img/value/v1.jpg" alt="" height="350px" width="100%"></img>
              </div>
              <div className="flip-card-back">
                <h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/img/value/v2.jpg" alt="" height="350px" width="450px"></img>
              </div>
              <div className="flip-card-back">

                <h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/img/value/v3.jpg" alt="" height="350px" width="450px"></img>
              </div>
              <div className="flip-card-back">

                <h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/img/value/v4.jpg" alt="" height="350px" width="450px"></img>
              </div>
              <div className="flip-card-back">

                <h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/img/value/v5.jpg" alt="" height="350px" width="450px"></img>
              </div>
              <div className="flip-card-back">

                <h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/img/value/v6.jpg" alt="" height="350px" width="450px" ></img>
              </div>
              <div className="flip-card-back">

                <h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default valuer;
{/* <h1>John Doe</h1> 
      <p>Architect Engineer</p> 
      <p>We love that guy</p> */}