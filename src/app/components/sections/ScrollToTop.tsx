import React, { useState, useEffect } from 'react';
import "../../styles/sections/ScrollToTop.css";
import { portfolio } from '../../helpers/helpers';

interface TemplateProps {
  data: portfolio;
}

const ScrollToTop: React.FC<TemplateProps> = ({ data }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > window.innerHeight) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= window.innerHeight) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={data.template === 'THREE' ? 'scrolltotopdark' : 'scrolltotop'}
      onClick={scrollToTop}
      style={{ display: showScroll ? 'block' : 'none' }}
    >
      Top
    </div>
  );
};

export default ScrollToTop;
