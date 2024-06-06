import React from 'react';
import './Home.css'; // Make sure this path is correct

function Home() {
    return (
        <div className="home">
            <div className="hero">
                <div className="hero-content">
                    <h1>ReNest</h1>
                    <p className="catchphrase">Collect. Invest. ReNest.</p>
                    <p className="mission-statement">Empowering community through inclusive real estate investment.</p>
                </div>
            </div>
            <div className="slideshow">
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vS68iceyJCH5pRJ6QGN9M_K-vgWuoDeEdE_E4pHJOcsw2maCqVNwHoLZ6LA8YK3XDkS-Eh6JsoCKmWp/embed?start=false&loop=false&delayms=3000"
                    frameborder="0"
                    width="960"
                    height="569"
                    allowfullscreen="true"
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    title="ReNest Slideshow"
                ></iframe>
            </div>
        </div>
    );
}

export default Home;
