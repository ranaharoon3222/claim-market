import React from 'react';

const Section1 = () => {
  return (
    <>
      <div className='backColor1'>
        <div className='scale'>
          <img src='./scale.png' alt='' />
        </div>
        <div className='container'>
          <div className='history'>
            <h1>claims-market</h1>
          </div>
          <div className='trans'>
            <h2>Transaction History</h2>
            <p>
              Creditors have sold <span>$190,258,405.81</span> of claims through
              Claims Market in 295 transactions.
            </p>
          </div>
          <div className='table'>
            <div className='sold'>
              <h4>Sold</h4>
              <p>Aug 11, 2023</p>
              <p>Aug 09, 2023</p>
              <p>Aug 05, 2023</p>
              <p>Aug 05, 2023</p>
              <p>Aug 03, 2023</p>
              <p>Aug 01, 2023</p>
              <p>Aug 01, 2023</p>
              <p>Aug 01, 2023</p>
            </div>
            <div className='sold'>
              <h4>Listed</h4>
              <p>Aug 05, 2023</p>
              <p>Aug 09, 2023</p>
              <p>Aug 04, 2023</p>
              <p>Aug 05, 2023</p>
              <p>Aug 02, 2023</p>
              <p>Aug 01, 2023</p>
              <p>Jul 21, 2023</p>
              <p>Jul 21, 2023</p>
            </div>
            <div className='sold'>
              <h4>Lead Debtor</h4>
              <p>BlockFi Inc.</p>
              <p>Celsius Network LLC</p>
              <p>Celsius Network LLC</p>
              <p>Celsius Network LLC</p>
              <p>Celsius Network LLC</p>
              <p>Celsius Network LLC</p>
              <p>Genesis Global Holdco, LLC</p>
              <p>Genesis Global Holdco, LLC</p>
            </div>
            <div className='Amount'>
              <h4> Minimum Claim Amount</h4>
              <p>$73,053.90</p>
              <p>$78,394.07</p>
              <p>$338,863.93</p>
              <p>$66,711.68</p>
              <p>$336,175.56</p>
              <p>$72,021.35</p>
              <p>$46,573,201.76</p>
              <p>$46,573,201.76</p>
            </div>
          </div>
          <div className='btn-table'>
            <button>Show more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
