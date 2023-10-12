import React from 'react';
import logo from '../assets/Dockasaurus.jpg';

function Intro() {
  return (
    <div id='intro'>
      <div id='spotlight'>
        <img id='logo' src={logo} alt='DRX Logo'></img>
        <header id='header'>Dockasaurus-RX</header>
      </div>

      <br></br>
      <h2 id='intro-paragraph'>
        A nimble and easy-to-use DevOps container tool, Dockasaurus RX has a
        major trick up its sleeve beyond mere monitoring and visualization. It's
        more than a pulse check. To keep your applications happy and healthy,
        Dockasaurus RX retains important vitals of all your containers for
        7 days allowing comparisons to be drawn regarding the well-being of
        concurrent container workloads over a designated period.
      </h2>
      <a href='#'>Learn More/ Link to Medium</a>
      <br></br>
      <br></br>
      <br></br>
      <h1 id='features'>Features</h1>
      <br></br>
    </div>
  );
}

export default Intro;
