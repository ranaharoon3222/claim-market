import React from 'react';
// import logo from 'logo.png';
const Navbar = () => {
  return (
    <>
      <div className='back-pic'>
        <div className='container'>
          <nav className='navbar'>
            <div className='logo'>
              <img src='/logo.png' alt='' />
              <p>by</p>
              <img src='/logo-next.png' alt='' className='logo-nex' />
            </div>
            <ul>
              <a href=''>
                {' '}
                <li>How it works</li>
              </a>
              <a href=''>
                {' '}
                <li>Agreements</li>
              </a>
              <a href=''>
                {' '}
                <li>Prices</li>
              </a>
              <a href=''>
                <li>
                  <div className='btn'>
                    <button>Login</button>
                  </div>
                </li>
              </a>
            </ul>
          </nav>

          <div className='boxes'>
            <div className='text'>
              <h1 className='bold'>
                BEST PRICE and <span>FASTEST CLOSING</span>
              </h1>
              <p>
                Claims Market is a platform dedicated to providing the best
                price and fastest closing for claim sellers.
              </p>
              <div className='btn-arrow'>
                <button>get started</button>
                <img src='/arrow-button.png' alt='' />
              </div>
            </div>
            <div className='inner-box'>
              <div className='inner-text'>
                <h3>Celsius</h3>
                <img src='/celsius.png' alt='' className='cel' />
                <p>Sign Up and See Claims size</p>
              </div>
              <div className='inner-text'>
                <h3>Voyager</h3>
                <img src='/voyager.png' alt='' />
                <p className='voy'>Sign Up and See Claims size</p>
              </div>
              <div className='inner-text'>
                <h3>BLOCKFI</h3>
                <img src='/blockfi.png' alt='' />
                <p className='blo'>Sign Up and See Claims size</p>
              </div>
              <div className='inner-text'>
                <h3>FTX</h3>
                <img src='/ftx.png' alt='' className='cel' />
                <p>Sign Up and See Claims size</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
