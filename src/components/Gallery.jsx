import React from 'react';

function Gallery() {
  return (
    <div class='gallery'>
      <h1>Features</h1>
      <div class='feature-row'>
        <h2>First Feature Goes Here</h2>
        <img src='#' alt='First Image on the right'></img>
      </div>
      <div class='feature-row'>
        <img src='#' alt='Second Image on the Left'></img>
        <h2>Second Feature Goes Here</h2>
      </div>
      <div class='feature-row'>
        <h2>Third Feature Goes Here</h2>
        <img src='#' alt='Third Image on the right'></img>
      </div>
    </div>
  );
}

export default Gallery;
