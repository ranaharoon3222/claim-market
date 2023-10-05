import React from 'react';

export const Section5 = () => {
  return (
    <>
      <div className='container'>
        <div className='history'>
          <h1>claims-market</h1>
        </div>
        <div className='trans'>
          <h2>Prices</h2>
          <p className='price'>
            Prices displayed on the charts below represent estimated historical
            prices for larger claims of the referenced Debtor entities. Please
            note that prices for smaller claims are usually lower. Future prices
            may change based on developments in each bankruptcy case and changes
            in financial market conditions. Feel free to contact us at
            <a href=''> all@cherokeeacq.com</a> for current prices.
          </p>
        </div>

        <div className='faq-drawer'>
          <input
            className='faq-drawer__trigger'
            id='faq-drawer'
            type='checkbox'
          />
          <label className='faq-drawer__title' for='faq-drawer'>
            BlockFi Inc.{' '}
          </label>
          <div className='faq-drawer__content-wrapper'>
            <div className='faq-drawer__content'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
        <div className='star-3'>
          <img src='/star-2.png' alt='' />
        </div>
      </div>
    </>
  );
};
