import React from 'react';
import imgStar from '../images/imgStar.png';

import '../styles/styles.css';

export default function Card(props) {
    // Displaying Sold out badge

    let badgeText // Declaring a variable to store the value of the badge

    if (props.openSpots === 0) { // If the openSpots for the experience is equals to zero then
        badgeText = "SOLD OUT" // the text in the badge will be "SOLD OUT"
    } else if (props.location === "Online") { // Otherwise if the location is Online
        badgeText = "ONLINE" //the text in the badge will be "ONLINE"
    }

    return (
        <div className="card">
                
                {badgeText && <div className="card--badge">{badgeText}</div>}
                {/*If our variable badgeText has a value it will render the div with our badge*/} 

                <img src={props.coverImg} className="card--image" alt="card" />
            <div className="card--stats">
                <img src={imgStar} className="card--star" alt="star" />
                <span> {props.stats.rating} </span>
                <span className="gray"> ({props.stats.reviewCount}) • </span>
                <span className="gray"> {props.location} </span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}