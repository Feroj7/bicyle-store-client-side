import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-area">
            <div className="text-area">
                <h1>Fly With Bicycle</h1>
                <Button>Explore</Button>
            </div>
        </div>
    );
};

export default Banner;