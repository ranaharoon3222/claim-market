import React from 'react';

const Section8 = () => {
  return (
    <>
      <div className='backColor5'>
        <div className='star-4'>
          <img src='./star-2.png' alt='' />
        </div>
        <div className='star-5'>
          <img src='./star-2.png' alt='' />
        </div>
        <div className='container'>
          <div className='history'>
            <h1 className='again'> claims-market</h1>
          </div>
          <div className='trans'>
            <h2>CONTACT</h2>
          </div>
        </div>
      </div>
      <div className='backPic2'>
        <div className='container'>
          <div className='inner-pic2'>
            <div className='form'>
              <h3>Contact form</h3>
              <div className='inp'>
                <p>Full Name*</p>
                <input type='text' />
              </div>
              <div className='inp'>
                <p>Email*</p>
                <input type='text' />
              </div>
              <div className='inp'>
                <p>Bankruptcy Case</p>
                <input type='text' />
              </div>
              <div className='inp'>
                <p>Comments</p>
                <textarea name='' id='' cols='30' rows='10'></textarea>
              </div>
              <div className='form-btn'>
                <button>Send</button>
              </div>
            </div>
            <div className='adress'>
              <p>
                Claims Market is a platform dedicated to simplifying the market
                for trade claims. We’re happy to help you with the process of
                listing your claims or answer any other questions you may have.
              </p>
              <div className='email'>
                <h4>Address:</h4>
                <p>1384 Broadway, Suite 906New York, NY 10018</p>
              </div>
              <div className='email'>
                <h4>Email:</h4>
                <p>email@gmail.com</p>
              </div>
              <div className='email'>
                <h4>phone:</h4>
                <p>(212) 259 - 4300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section8;
