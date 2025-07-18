import '../styles/HomePage.css';
import React, { useState, useEffect, useRef } from 'react';
const HomePage = () => {
  const heroImageUrl = '/images/mob1.jpg';

   const collections = [
    { img: '/images/mob5.jpg', title: 'Complete your look', link: '#' },
    { img: '/images/mob2.jpg', title: 'Sophisticated protection', link: '#' },
    { img: '/images/mob3.jpg', title: 'Minimalist style statement', link: '#' },
    { img: '/images/mob4.jpg', title: 'Timeless urban fashion', link: '#' },
    { img: '/images/mob6.jpg', title: 'Timeless urban fashion', link: '#' },
    { img: '/images/mob7.jpg', title: 'Timeless urban fashion', link: '#' },
    { img: '/images/mob8.jpg', title: 'Timeless urban fashion', link: '#' },
  ];


 const cardWidth = 300;
  const cardMarginRight = 16;
  const visibleCards = 4;

  // Width of one card plus margin-right
  const extendedCollections = [...collections, ...collections.slice(0, visibleCards)];

  const slideWidth = cardWidth + cardMarginRight;
  const containerWidth = slideWidth * visibleCards - cardMarginRight;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  // Reset instantly to beginning after reaching cloned slides
   useEffect(() => {
    if (currentSlide === collections.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 300); // Match the CSS transition duration

      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true);
    }
  }, [currentSlide, collections.length]);

  const heroSectionStyle = {
    backgroundImage: `url(${heroImageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="homepage">
      <section className="hero-section" style={heroSectionStyle}>
        <h1>
          Luxury.<br />
          Confidence.<br />
          Perfection.
        </h1>
        <p>Elevate your wardrobe with handcrafted excellence</p>
        <div className="cta-buttons">
          <button className="btn primary">Shop New Arrivals</button>
          <button className="btn outline">Discover Collections</button>
        </div>
      </section>

      {/* Collections slider */}
      <section className="collections-section">
        <h2>Our Collections</h2>

        <div
          className="collections-container"
          style={{
            overflow: 'hidden',
            width: `${slideWidth * visibleCards - cardMarginRight}px`, // container width exactly visible cards (subtract last margin)
            margin: 'auto',
          }}
        >
           <div style={{ background: '#000', padding: '40px 0', color: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Collections</h2>

      <div
        style={{
          overflow: 'hidden',
          width: `${containerWidth}px`,
          margin: 'auto',
        }}
      >
        <div
          ref={sliderRef}
          style={{
            display: 'flex',
            transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none',
            transform: `translateX(-${currentSlide * slideWidth}px)`,
          }}
        >
          {extendedCollections.map((col, idx) => (
            <div
              key={idx}
              style={{
                minWidth: `${cardWidth}px`,
                marginRight: idx % visibleCards === visibleCards - 1 ? 0 : `${cardMarginRight}px`,
                backgroundColor: '#111',
                borderRadius: '8px',
                padding: '10px',
                boxSizing: 'border-box',
                color: '#fff',
              }}
            >
              <img
                src={col.img}
                alt={col.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div style={{ marginTop: '10px', fontWeight: 'bold' }}>{col.title}</div>
              <a
                href={col.link}
                style={{ color: 'yellow', textDecoration: 'underline', marginTop: '6px', display: 'inline-block' }}
              >
                Explore Collection
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
