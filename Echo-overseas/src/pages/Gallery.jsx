import React, { useState } from 'react';
import { X } from 'lucide-react';
import './Gallery.css';
import img1 from '../assets/Echoo-overseas -photos/1.jpeg';
import img2 from '../assets/Echoo-overseas -photos/2.jpeg';
import img3 from '../assets/Echoo-overseas -photos/3.jpeg';
import img4 from '../assets/Echoo-overseas -photos/4.jpeg';
import img5 from '../assets/Echoo-overseas -photos/5.jpeg';
import img6 from '../assets/Echoo-overseas -photos/6.jpeg';
import img7 from '../assets/Echoo-overseas -photos/7.jpeg';
import img8 from '../assets/Echoo-overseas -photos/8.jpeg';
import img9 from '../assets/Echoo-overseas -photos/9.jpeg';
import img10 from '../assets/Echoo-overseas -photos/10.jpeg';
import img11 from '../assets/Echoo-overseas -photos/11.jpeg';
import img12 from '../assets/Echoo-overseas -photos/12.jpeg';
import img13 from '../assets/Echoo-overseas -photos/13.jpeg';
import img14 from '../assets/Echoo-overseas -photos/14.jpeg';
import img15 from '../assets/Echoo-overseas -photos/15.jpeg';
import img16 from '../assets/Echoo-overseas -photos/16.jpeg';
import img17 from '../assets/Echoo-overseas -photos/17.jpeg';
import img18 from '../assets/Echoo-overseas -photos/18.jpeg';
import img19 from '../assets/Echoo-overseas -photos/19.jpeg';
import img20 from '../assets/Echoo-overseas -photos/20.jpeg';
import img21 from '../assets/Echoo-overseas -photos/21.jpeg';
import img22 from '../assets/Echoo-overseas -photos/22.jpeg';
import img23 from '../assets/Echoo-overseas -photos/23.jpeg';
import img24 from '../assets/Echoo-overseas -photos/24.jpeg';
import img25 from '../assets/Echoo-overseas -photos/25.jpeg';
import img26 from '../assets/Echoo-overseas -photos/26.jpeg';
import img27 from '../assets/Echoo-overseas -photos/27.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { id: 1, url: img1 },
    { id: 2, url: img2 },
    { id: 3, url: img3 },
    { id: 4, url: img4 },
    { id: 5, url: img5 },
    { id: 6, url: img6 },
    { id: 7, url: img7 },
    { id: 8, url: img8 },
    { id: 9, url: img9 },
    { id: 10, url: img10 },
    { id: 11, url: img11 },
    { id: 12, url: img12 },
    { id: 13, url: img13 },
    { id: 14, url: img14 },
    { id: 15, url: img15 },
    { id: 16, url: img16 },
    { id: 17, url: img17 },
    { id: 18, url: img18 },
    { id: 19, url: img19 },
    { id: 20, url: img20 },
    { id: 21, url: img21 },
    { id: 22, url: img22 },
    { id: 23, url: img23 },
    { id: 24, url: img24 },
    { id: 25, url: img25 },
    { id: 26, url: img26 },
    { id: 27, url: img27 },
  ];

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <h1>Our Gallery</h1>
          <p>Glimpses of success, global campuses, and student journeys.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-container">
        <div className="container">
          <div className="gallery-grid">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="gallery-card"
                onClick={() => setSelectedImage(photo.url)}
              >
                <img src={photo.url} alt="Gallery image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged gallery view" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
