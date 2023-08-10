// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import your styles
// src/components/LandingPage.js
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// ...



const Home = () => {
  return (
    <div className="landing-page">

<Carousel showThumbs={false}>
  
  <div>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.r8IqnZvajmcmfws6fDgfvwHaEo%26pid%3DApi&f=1&ipt=847775903afc07e06f63de398a9a37ac420a62e1a68da719e9a08818ea204de2&ipo=images" alt="Image 1" style={{height:'500px'}} />
  </div>
  <div>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.keIG-gLYH4XdTkLvAFqI2QHaEo%26pid%3DApi&f=1&ipt=05645126f79b703cf69a12f6526cdfb9c7512a75d90ff21afedb214fab82d191&ipo=images" alt="Image 2" style={{height:'500px'}}/>
  </div>
  <div>
    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FQDO40f0.jpg&f=1&nofb=1&ipt=8635f186db19c37b55c57d4803590b82f13eba6b155629cc7d741431171bbb62&ipo=images" alt="Image 2" style={{height:'500px'}} />
  </div>
  <div>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FQfyMMSjVR1HvLHFUmU8AwHaE8%26pid%3DApi&f=1&ipt=84741e49ebddfe7a6d23dda536c73b6e85865512220cda3090044212b34bd15e&ipo=images" alt="Image 2" style={{height:'500px'}} />
  </div>
  
</Carousel>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav> */}
      <section className="hero">
        <h1>Welcome to Our Fictional Product</h1>
        <p>Discover the extraordinary with us!</p>
        <Link to="/contact" className="cta-button">Get in touch</Link>
      </section>
      {/* Additional component (e.g., image carousel, testimonials) */}
    </div>
    
  );
}

export default Home;
