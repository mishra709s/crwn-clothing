import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

/* A higher order function is essentially a function that takes a component as an arguement, and returns you a modified component. 
Just like our MenuItem, is a function, that takes props and renders out a component. A higher order component, is a function that takes, any component and modifies it in some way and then returns that new modified component.
Its like a function that gives you back a powered up component. 
*/

export default withRouter(MenuItem);
