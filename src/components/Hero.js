import React from 'react';
import GridImage from '../images/imgGroup.png';


export default function Hero() {
    return (
        <section className="hero-container">
            <img className="hero-photo" src={GridImage} alt="grid"/>
                <h1 className="hero-header">Online Experiences</h1>
                    <p className="hero-text">
                        Join unnique interactive activities led by
                        one-of-a-kind hosts-all without leaving home.
                    </p>
        </section>
    );
}