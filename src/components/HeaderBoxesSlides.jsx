import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const HeaderBoxesSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
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
      <div className='navigation-wrapper container top-mb-slide desktop-hidden'>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide number-slide1'>
            <div className='inner-text'>
              <h3>Celsius</h3>
              <img src='/celsius.png' alt='' className='cel' />
              <p>Sign Up and See Claims size</p>
            </div>
          </div>
          <div className='keen-slider__slide number-slide2'>
            <div className='inner-text'>
              <h3>Voyager</h3>
              <img src='/voyager.png' alt='' />
              <p className='voy'>Sign Up and See Claims size</p>
            </div>
          </div>

          <div className='keen-slider__slide number-slide2'>
            <div className='inner-text'>
              <h3>BLOCKFI</h3>
              <img src='/blockfi.png' alt='' />
              <p className='blo'>Sign Up and See Claims size</p>
            </div>
          </div>

          <div className='keen-slider__slide number-slide2'>
            <div className='inner-text'>
              <h3>FTX</h3>
              <img src='/ftx.png' alt='' className='cel' />
              <p>Sign Up and See Claims size</p>
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
    </>
  );
};

export default HeaderBoxesSlides;

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
