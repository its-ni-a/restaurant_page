import React, { useState } from 'react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900', alt: 'Delicious pasta' },
    { url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900', alt: 'Fresh bruschetta' },
    { url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900', alt: 'Gourmet pizza' },
    { url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=900', alt: 'Restaurant interior' },
    { url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=900', alt: 'Elegant plating' },
    { url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900', alt: 'Fine dining' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="carousel-container">
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={image.url} alt={image.alt} />
              </div>
            ))}
          </div>
          <button className="carousel-control carousel-control-prev" onClick={prevSlide}>
            <span className="carousel-control-prev-icon" aria-hidden="true">‹</span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control carousel-control-next" onClick={nextSlide}>
            <span className="carousel-control-next-icon" aria-hidden="true">›</span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
