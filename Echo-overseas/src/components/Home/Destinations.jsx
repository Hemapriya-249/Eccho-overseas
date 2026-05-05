import React from 'react';
import './Destinations.css';

const Destinations = () => {
  const destinations = [
    { name: 'USA', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', color: '#004C8B' },
    { name: 'UK', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', color: '#ED1C24' },
    { name: 'Canada', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', color: '#004C8B' },
    { name: 'Australia', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', color: '#ED1C24' },
    { name: 'Ireland', image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', color: '#004C8B' },
    { name: 'Germany', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', color: '#ED1C24' },
  ];

  return (
    <section className="destinations-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Global Destinations</span>
          <h2 className="section-title">Explore Your Study Abroad Options</h2>
          <p>Choose from the world's most popular study destinations and start your international career.</p>
        </div>

        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <div key={index} className="dest-card">
              <div className="dest-image">
                <img src={dest.image} alt={dest.name} />
                <div className="dest-overlay">
                   <div className="dest-content">
                      <h3>Study in {dest.name}</h3>
                      <a href={`/study-in/${dest.name.toLowerCase()}`} className="btn btn-primary btn-sm">Explore More</a>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
