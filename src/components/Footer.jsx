import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='foter'>
        <div className='container'>
          <div className='fot-grid'>
            <div className='fots'>
              <img src='./logo.png' alt='' />
              <p>
                Claims Market is a platform dedicated to simplifying the market
                for trade claims. Our goal is to bring together Sellers and
                Buyers of claims through a transparent marketplace that reduces
                transaction costs.
              </p>
              <div className='fot-icon'>
                <img src='./in.png' alt='' />
                <img src='./you.png' alt='' />
              </div>
            </div>
            <div className='onlyP'>
              <a href=''>
                {' '}
                <p>How it Works</p>
              </a>
              <a href=''>
                {' '}
                <p>SAC (Simple Assignment of Claim)</p>
              </a>
              <a href=''>
                {' '}
                <p>Seller's Agreement</p>
              </a>
              <a href=''>
                {' '}
                <p>Buyer's Agreement</p>
              </a>
            </div>
            <div className='onlyP'>
              <div className='top'>
                <a href=''>
                  {' '}
                  <p>Claims Offered</p>
                </a>
                <a href=''>
                  {' '}
                  <p>Transactions </p>
                </a>
                <a href=''>
                  {' '}
                  <p> SPTA (Simple Pass Through)</p>
                </a>
                <a href=''>
                  {' '}
                  <p>Assignment)</p>
                </a>
                <a href=''>
                  {' '}
                  <p>FAQ </p>
                </a>
                <a href=''>
                  {' '}
                  <p>Legal </p>
                </a>
                <a href=''>
                  {' '}
                  <p>Contact Us</p>
                </a>
              </div>
            </div>
          </div>
          <div className='link'>
            <p>© 2023 Cherokee Hybrid Markets, Inc.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
