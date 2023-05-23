import React , { useState, useEffect, useRef } from 'react';
import arrow_left from '../../assets/icon/arrow_left.svg';
import arrow_right from '../../assets/icon/arrow_right.svg';

//RUTE IMG
const IMAGES = Object.freeze([
    {
        img_: '/src/assets/carrusel_img/1.png',
        alt_: '1',
        haveLabel_: true,
    },
    {
        img_: '/src/assets/carrusel_img/2.png',
        alt_: '2',
        haveLabel_: false,
    },
    {
        img_: '/src/assets/carrusel_img/3.png',
        alt_: '3',
        haveLabel_: false,
    },
    {
        img_: '/src/assets/carrusel_img/4.png',
        alt_: '4',
        haveLabel_: false,
    }
]);



/**
 * @author <cristian.machado@correounivalle.edu.co>
 * @returns COMPONENTE Carrusel
*/
const Carrusel = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const containerRef = useRef(null);
  
    useEffect(() => {

      //al primer elemento _action_cirlcle ._circle le agrega la clase _active
      const _action_cirlcle = document.getElementsByClassName('_action_cirlcle')[0];
      const _circle = _action_cirlcle.getElementsByClassName('_circle')[0];
      _circle.classList.add('_active');

      const handleScroll = () => {
        console.log('handleScroll');
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

        if (currentImageIndex !== index) {
            //quita la clase _active al elemento que la tenga
            const _action_cirlcle = document.getElementsByClassName('_action_cirlcle')[0];
            const _circle = _action_cirlcle.getElementsByClassName('_circle')[currentImageIndex];
            _circle.classList.remove('_active');

            //agrega la clase _active al elemento que se le dio click
            const _circle_ = _action_cirlcle.getElementsByClassName('_circle')[index];
            _circle_.classList.add('_active');

        }

    }

     return (
        <>
            <div ref={containerRef} className='_container_primary_carusel'>
                {
                    IMAGES.map((image, index) => {
                        return (
                            <div data-key={index}  key={index} className='_container_img_carusel'>
                                <img src={image.img_} alt={index} />
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
                        IMAGES.map((image, index) => {
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