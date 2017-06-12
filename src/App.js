import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Image">
          <div className="Info">
          <p>Sami Valimaki</p>
          <p>Phone: 801-376-3123</p>
          <p>Email: sam.valimaki@gmail.com</p>
          </div>
        </div>

        <div className="Title">Projects</div>

        <div className="Projects">
          <div className="StarWars">
            <a href="https://samivalimaki.github.io/NoServerProject/#/home">
              <img height="200px" width="200px" src="images/starwars.jpg" />
            </a>
            <p>NoServer Project</p>
          </div>
          <div className="Four7">
            <a href="https://samivalimaki.github.io/Four7/#/">
              <img height="200px" width="200px" src="images/four7logo.png" />
            </a>
            <p>Four7 MMA Clone</p>
          </div>
          <div className="VisionBoard">
            <a href="http://174.138.61.131:3000/#!/">
              <img height="200px" width="200px" src="images/visionboard.jpg" />
            </a>
            <p>Full-Stack VisionBoard Project</p>
          </div>
        </div>

        <div className="Title">Skills</div>

        <div className="Skills">
          <div className="Skill">
            <img height="150px"  src="images/HTML5logo.svg.png" />
          </div>
          <div className="Skill">
            <img height="150px"  src="images/css.png" />
          </div>
          <div className="Skill">
            <img height="150px"  src="images/javascript.png" />
          </div>
          <div className="Skill">
            <img height="150px"  src="images/angularjs-logo.png" />
          </div>
          <div className="Skill">
            <img height="150px"  src="images/node.svg" />
          </div>
          <div className="Skill">
            <img height="150px"  src="images/sql.png" />
          </div>
          <div className="Skill">
            <img height="150px" src="images/reactimg.svg" />
          </div>
        </div>

        <div className="Title">Links</div>
        <div className='SocialMedia'>
          <div className="Links">
            <a href="http://www.facebook.com/SamValimaki">
              <img className="img" src="https://c866088.ssl.cf3.rackcdn.com/assets/facebook30x30.png" />
            </a>
            <a href="http://www.instagram.com/samvalimaki">
              <img className="img" src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram30x30.png" />
            </a>
            <a href="https://github.com/SamiValimaki">
              <img className="img" src="http://icons.iconarchive.com/icons/limav/flat-gradient-social/32/Github-icon.png" />
            </a>
            <a href="https://www.linkedin.com/in/samivalimaki/">
              <img className="img" height="30px" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" />
            </a>
            </div>
        </div>

      </div>
    );
  }
}

export default App;
