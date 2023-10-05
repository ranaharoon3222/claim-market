import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
// import './styles.css';

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      '(max-width: 980px)': {
        slides: { perView: 1, spacing: 10 },
      },
    },
    slides: { perView: 3, spacing: 20 },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className='backColor2'>
        <div className='container'>
          <div className='navigation-wrapper'>
            <div ref={sliderRef} className='keen-slider'>
              <div className='keen-slider__slide slid-color'>
                <div className='inner-slids'>
                  <h3>Simple Assignmentof Claim</h3>
                  <p>
                    We have developed a Simple Assignment of Claim agreement
                    (“SAC”) that balances the interests of both Sellers and
                    Buyers. The SAC gives Buyers assurances they require, such
                    as representations and warranties, and the right to
                    proportional repayment in the event the claim is allowed for
                    a lower amount than the Minimum Claim Amount.
                  </p>
                  <div className='slid-btn'>
                    <button>LEARN MORE</button>
                  </div>
                </div>
              </div>

              <div className='keen-slider__slide slid-color'>
                <div className='inner-slids'>
                  <h3>Seller's Agreement</h3>
                  <p className='agree'>
                    Sellers sign a Seller’s Agreement to offer their claims
                    exclusively through Claims Market for a specified number of
                    business days. Sellers send us an execution copy of the SAC
                    (or a redline of requested changes to the SAC) together with
                    relevant exhibits and copies of supporting documents.
                  </p>
                  <div className='slid-btn'>
                    <button className='seller'>LEARN MORE</button>
                  </div>
                </div>
              </div>
              <div className='keen-slider__slide slid-color'>
                <div className='inner-slids'>
                  <h3>Buyer's Agreement</h3>
                  <h5>TRANSACTION PROCESS</h5>
                  <p>
                    Once a transaction is confirmed by Claims Market, a SAC
                    signed by the Seller with all exhibits will be sent to the
                    winning Buyer identified as “Buyer” in the SAC.If funds are
                    not received by the Seller and Claims Market from the
                    winning Buyer within two business days of the trade date,
                    the Seller’s claim will be offered to other Buyers.
                  </p>
                  <div className='slid-btn'>
                    <button className='seller2'>LEARN MORE</button>
                  </div>
                </div>
              </div>
              <div className='keen-slider__slide slid-color'>
                <div className='inner-slids'>
                  <h3>Simple Assignmentof Claim</h3>
                  <p>
                    We have developed a Simple Assignment of Claim agreement
                    (“SAC”) that balances the interests of both Sellers and
                    Buyers. The SAC gives Buyers assurances they require, such
                    as representations and warranties, and the right to
                    proportional repayment in the event the claim is allowed for
                    a lower amount than the Minimum Claim Amount.
                  </p>
                  <div className='slid-btn'>
                    <button>LEARN MORE</button>
                  </div>
                </div>
              </div>
              <div className='keen-slider__slide slid-color'>
                <div className='inner-slids'>
                  <h3>Seller's Agreement</h3>
                  <p className='agree'>
                    Sellers sign a Seller’s Agreement to offer their claims
                    exclusively through Claims Market for a specified number of
                    business days. Sellers send us an execution copy of the SAC
                    (or a redline of requested changes to the SAC) together with
                    relevant exhibits and copies of supporting documents.
                  </p>
                  <div className='slid-btn'>
                    <button className='seller'>LEARN MORE</button>
                  </div>
                </div>
              </div>
              <div className='keen-slider__slide slid-color'>
                <div className='inner-slids'>
                  <h3>Buyer's Agreement</h3>
                  <h5>TRANSACTION PROCESS</h5>
                  <p>
                    Once a transaction is confirmed by Claims Market, a SAC
                    signed by the Seller with all exhibits will be sent to the
                    winning Buyer identified as “Buyer” in the SAC.If funds are
                    not received by the Seller and Claims Market from the
                    winning Buyer within two business days of the trade date,
                    the Seller’s claim will be offered to other Buyers.
                  </p>
                  <div className='slid-btn'>
                    <button className='seller2'>LEARN MORE</button>
                  </div>
                </div>
              </div>
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
          {loaded && instanceRef.current && (
            <div className='dots'>
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={'dot' + (currentSlide === idx ? ' active' : '')}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className='scale-3'>
        <img src='/scale.png' alt='' />
      </div>
    </>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  );
}
