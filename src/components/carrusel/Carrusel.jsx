import React , { useState, useEffect, useRef } from 'react';
import arrow_left from '/assets/icon/arrow_left.svg';
import arrow_right from '/assets/icon/arrow_right.svg';


//RUTE IMG
const IMAGES = Object.freeze([
    {
        img_: '/assets/carrusel_img/1.png',
        alt_: '1',
        haveLabel_: true,
    },
    {
        img_: '/assets/carrusel_img/2.png',
        alt_: '2',
        haveLabel_: false,
    },
    {
        img_: '/assets/carrusel_img/3.png',
        alt_: '3',
        haveLabel_: false,
    },
    {
        img_: '/assets/carrusel_img/4.png',
        alt_: '4',
        haveLabel_: false,
    }
]);



/**
 * @author <cristian.machado@correounivalle.edu.co>
 * @returns COMPONENTE Carrusel
*/
const Carrusel = ({
  images_,
  class_primary_,
}) => {
    // console.log(images_, class_primary_);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const containerRef = useRef(null);
    const _images = images_ || IMAGES;
    const class_primary = class_primary_ || '';
    
    useEffect(() => {

      //al primer elemento _action_cirlcle ._circle le agrega la clase _active
      const _action_cirlcle = document.getElementsByClassName('_action_cirlcle')[0];
      const _circle = _action_cirlcle.getElementsByClassName('_circle')[0];
      _circle.classList.add('_active');

      const handleScroll = () => {
        // console.log('handleScroll');
        const container = containerRef.current;

        if (container) {

          const scrollPosition = container.scrollLeft;
          const containerWidth = container.offsetWidth;
          const images = Array.from(container.getElementsByClassName('_container_img_carusel'));

          const imageIndex = images.findIndex((image) => {
            const imageOffset = image.offsetLeft - container.offsetLeft;
            return scrollPosition >= imageOffset && scrollPosition < imageOffset + containerWidth;
          });

          handleCircle(imageIndex);
          setCurrentImageIndex(imageIndex);
          

        }

      };
  
      const container = containerRef.current;
      if (container) {
        container.addEventListener('scroll', handleScroll);
      }

      //var div_ = document.getElementById('__container_primary_carusel');

      // div_.addEventListener('wheel', function(event) {
      //   event.preventDefault();
      //   //dar el scroll a window
      //   window.scrollBy({
      //     top: event.deltaY * 0.5,
      //     behavior: 'smooth',
      //   });
      // }, { passive: false });

  
      return () => {
        if (container) {
          container.removeEventListener('scroll', handleScroll);
        }
      };
      
    }, []);

    const handleScrollTo = (scrollLeft) => {
        const container = containerRef.current;
        if (container) {
          container.scrollTo({
            left: scrollLeft,
            behavior: 'smooth', 
          });
        }
      };
    
    const handlePrevImage = () => {
        const container = containerRef.current;
        if (container && currentImageIndex > 0) {
          const prevImage = container.getElementsByClassName('_container_img_carusel')[currentImageIndex - 1];
          const scrollLeft = prevImage.offsetLeft - container.offsetLeft;
          handleScrollTo(scrollLeft);
          setCurrentImageIndex(currentImageIndex - 1);
          handleCircle(currentImageIndex - 1);
        }
    };
    
    const handleNextImage = () => {
        const container = containerRef.current;
        const images = container.getElementsByClassName('_container_img_carusel');
        if (container && currentImageIndex < images.length - 1) {
          const nextImage = images[currentImageIndex + 1];
          const scrollLeft = nextImage.offsetLeft - container.offsetLeft;
          handleScrollTo(scrollLeft);
          setCurrentImageIndex(currentImageIndex + 1);
          handleCircle(currentImageIndex + 1);
        }
    };

    const handleCircle = (index) => {
        
        if (currentImageIndex !== index && 
            index >= 0 && index < _images.length) {
            //quita la clase _active al elemento que la tenga
            const _action_cirlcle = document.getElementsByClassName('_action_cirlcle')[0];
            const _circle = _action_cirlcle.getElementsByClassName('_circle')[currentImageIndex];
            console.log(_circle);
            _circle.classList?.remove('_active');

            //agrega la clase _active al elemento que se le dio click
            const _circle_ = _action_cirlcle.getElementsByClassName('_circle')[index];
            console.log(_circle_,index);
            _circle_.classList?.add('_active');

        }

    }

     return (
        <>
            <div ref={containerRef} 
                id="__container_primary_carusel"
                 className={`_container_primary_carusel ${class_primary}`}>
                {
                    _images.map((image, index) => {
                        return (
                            <div data-key={index}  key={index} className='_container_img_carusel'>
                                <img src={new URL(image.img_, import.meta.url).href} alt={index} />
                            </div>
                        );
                    })
                }

                <div className='_container_actions'>
                    <a onClick={handlePrevImage}>
                        <img src={arrow_left} alt='arrow_left' />
                    </a>
                    <a onClick={handleNextImage}>
                        <img src={arrow_right} alt='arrow_right' />
                    </a>
                </div>

                <div className='_action_cirlcle'>
                    {
                        _images.map((image, index) => {
                            return (
                                <div key={index} className='_circle'>
                                    <a></a>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
     );

};
  

export default Carrusel;