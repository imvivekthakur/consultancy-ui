import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
    >
      <div>
        <img id='carousel-img' src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Digital Solutions" />
        <div className="legend" id='custom-legend'>
          <div>
            <h3 id='carousel-header'>Welcome to Digital Solutions</h3>
            <p>Unlock Your Business Potential</p>
            <Button
              style={{
                width: "150px",
                backgroundColor: "rgb(80, 200, 220)",
                border: "none",
                fontSize: "1.3rem",
                boxShadow: "rgba(80, 200, 220, 0.8) 0px 0px 5px, rgba(80, 200, 220, 0.4) 0px 0px 20px",
              }}
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>
      <div>
        <img id='carousel-img' src="https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnN1bHRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="Effective Startegies" />
        <div className="legend" id='custom-legend'>
          <div>
            <h3 id='carousel-header'>Drive Growth with Effective Strategies</h3>
            <p>Boost Your Online Presence Today</p>
            <Button
              style={{
                width: "150px",
                backgroundColor: "rgb(80, 200, 220)",
                border: "none",
                fontSize: "1.3rem",
                boxShadow: "rgba(80, 200, 220, 0.8) 0px 0px 5px, rgba(80, 200, 220, 0.4) 0px 0px 20px",
              }}
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>
      <div>
        <img id='carousel-img' src="https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvbnN1bHRhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="Results" />
        <div className="legend" id='custom-legend'>
          <div>
            <h3 id='carousel-header'>Proven Results & ROI</h3>
            <p>See Your Business Thrive in the Digital World</p>
            <Button
              style={{
                width: "150px",
                backgroundColor: "rgb(80, 200, 220)",
                border: "none",
                fontSize: "1.3rem",
                boxShadow: "rgba(80, 200, 220, 0.8) 0px 0px 5px, rgba(80, 200, 220, 0.4) 0px 0px 20px",
              }}
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
