import React from 'react';
import first from '../assets/first-feature.gif';
import second from '../assets/second-feature.gif';
import third from '../assets/third-feature.gif';

function Gallery() {
  return (
    <div class='gallery'>
      {/* <h1>Features</h1> */}
      <div class='feature-row'>
        <h2 class='feature-desc'>
          📉 Chart Visualizations sit atop the dashboard displaying current CPU
          utilization and Memory utilization in 2 Grafana iframes.
        </h2>
        <img src={first} alt='First Image on the right' class='feature-img'></img>
      </div>
      <div class='feature-row'>
        <img src={second} alt='Second Image on the Left' class='feature-img'></img>
        <h2 class='feature-desc'>
          🗃️ The lower section of DRX's dashboard is shared by 2 panels. The
          left section houses interactive Container Cards that allow for dynamic
          searches, filtering, and selection where containers can be run,
          stopped, viewed, or pruned.
        </h2>
      </div>
      <div class='feature-row'>
        <h2 class='feature-desc'>
          👑 The crown jewel of DRX is Optimization. Suggestions are prescribed
          in the bottom right panel. Once a container is selected, DRX
          automatically assesses the health of the containerized application and
          suggests 3 levels of optimization displayed in the accordion along
          with a comparative analysis of historical data.
        </h2>
        <img src={third} alt='Third Image on the right' class='feature-img'></img>
      </div>
    </div>
  );
}

export default Gallery;
