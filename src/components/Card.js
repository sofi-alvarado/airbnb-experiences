import React from 'react';
import imgStar from '../images/imgStar.png';

import '../styles/styles.css';

export default function Card(props) {
    return (
        <div className="card">
                <img src={props.img} className="card--image" alt="card" />
            <div className="card--stats">
                <img src={imgStar} className="card--star" alt="star" />
                <span> {props.rating} </span>
                <span className="gray"> ({props.reviewCount}) • </span>
                <span className="gray"> {props.country} </span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}