import React from 'react';
import justin from '../assets/justin-selfie.jpeg';
import bryan from '../assets/bryan-selfie.png';
import christian from '../assets/christian-selfie.jpeg';
import nate from '../assets/nate-selfie.jpeg';
import github from '../assets/github-logo.png';
import linkedin from '../assets/linkedin.png';

function Footer() {
  return (
    <div id='footer'>
      <h1 id='meet'>Meet the Team</h1>
      <br></br>
      <div>
        <div class='team-row'>
          <div class='headshot'>
            <h2>Justin Chu</h2>
            <img src={justin} alt='Justin Selfie' class='selfie'></img>
            <div class='icon-row'>
              <a
                href='https://github.com/jchu47'
                target='_blank'
                rel='noreferrer'>
                <img src={github} class='github' alt='github'></img>
              </a>
              <a
                href='https://www.linkedin.com/in/justin-chu-10a70a205/'
                target='_blank'
                rel='noreferrer'>
                <img
                  src={linkedin}
                  href='#'
                  class='linkedin'
                  alt='linkedin'></img>
              </a>
            </div>
          </div>
          <div class='headshot'>
            <h2>Bryan Choe</h2>
            <img src={bryan} alt='Bryan Selfie' class='selfie'></img>
            <div class='icon-row'>
              <a
                href='https://github.com/Choebryan'
                target='_blank'
                rel='noreferrer'>
                <img src={github} class='github' alt='github'></img>
              </a>
              <a
                href='https://www.linkedin.com/in/bryan-choe/'
                target='_blank'
                rel='noreferrer'>
                <img
                  src={linkedin}
                  href='#'
                  class='linkedin'
                  alt='linkedin'></img>
              </a>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div class='team-row'>
          <div class='headshot'>
            <h2>Christian Robinson</h2>
            <img src={christian} alt='Christian Selfie' class='selfie'></img>
            <div class='icon-row'>
              <a
                href='https://github.com/hommesweethomme'
                target='_blank'
                rel='noreferrer'>
                <img src={github} class='github' alt='github'></img>
              </a>
              <a
                href='https://www.linkedin.com/in/christian-daniel-robinson/'
                target='_blank'
                rel='noreferrer'>
                <img
                  src={linkedin}
                  href='#'
                  class='linkedin'
                  alt='linkedin'></img>
              </a>
            </div>
          </div>
          <div class='headshot'>
            <h2>Nate Doucette</h2>
            <img src={nate} alt='Nate Selfie' class='selfie'></img>
            <div class='icon-row'>
              <a
                href='https://github.com/Zampare'
                target='_blank'
                rel='noreferrer'>
                <img src={github} class='github' alt='github'></img>
              </a>
              <a
                href='https://www.linkedin.com/in/nate-doucette-473a04141/'
                target='_blank'
                rel='noreferrer'>
                <img
                  src={linkedin}
                  href='#'
                  class='linkedin'
                  alt='linkedin'></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
