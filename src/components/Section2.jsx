import React from 'react';

const Section2 = () => {
  return (
    <>
      <div className='container'>
        <div className='history'>
          <h1>claims-market</h1>
        </div>
        <div className='trans'>
          <h2>How it works</h2>
          <p>
            Our goal is to bring together Sellers and Buyers of claimsthrough a
            transparent site that reduces transaction costs. EXPLAINER VIDEO
          </p>
        </div>

        <div className='three-icons'>
          <div className='icon'>
            <img src='/icon-1.png' alt='' />
            <h4>Sellers</h4>
            <p>
              Sellers can list their claims on the site, and upload necessary
              documents. Sellers can also review other Sellers' asking prices
            </p>
          </div>
          <div className='icon'>
            <img src='/icon-2.png' alt='' />
            <h4>Save Time</h4>
            <p>
              We curate all claims offered, and only list scheduled or allowed
              claims which will be offered for sale on our site.
            </p>
          </div>
          <div className='icon'>
            <img src='/icon-3.png' alt='' />
            <h4>Buyers</h4>
            <p>
              Buyers can scroll through the claims offered and select which
              claims they would like to bid for or purchase. All offered prices
              are executable.
            </p>
          </div>
        </div>
        <div className='stars'>
          <div className='star-2'>
            <img src='/star-2.png' alt='' />
          </div>
        </div>
      </div>
      <div className='sec-elip'>
        <img src='/elip-2.png' alt='' />
      </div>
    </>
  );
};

export default Section2;
