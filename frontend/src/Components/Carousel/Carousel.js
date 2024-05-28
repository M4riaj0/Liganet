import React, { useRef, useEffect, useState } from 'react';
import './Carousel.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Carousel = ({ children }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current && carouselRef.current.firstChild) {
        setCardWidth(carouselRef.current.firstChild.offsetWidth);
      }
      checkScrollPosition();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [children]);

  useEffect(() => {
    checkScrollPosition();
  }, [children]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= cardWidth;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += cardWidth;
    }
  };

  return (
    <div className="carousel-wrapper">
      {canScrollLeft && <FaAngleLeft className="arrow left" onClick={scrollLeft} />}
      <div className="carousel" ref={carouselRef} onScroll={checkScrollPosition}>
        {children}
      </div>
      {canScrollRight && <FaAngleRight className="arrow right" onClick={scrollRight} />}
    </div>
  );
};

export default Carousel;
