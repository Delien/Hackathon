import React, { Component } from "react";
import FaceVisible from "./FaceVisible";
import "./App.css";
import haeder from "./img/haeder.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Galerie from "./components/Galerie";
import Var from "./components/var";
import Compte from "./components/compte";
const EasterEgg = require("react-easter");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true
    };
  }

  componentDidMount() {
    console.log("Parent Mounted");
  }

  reloadChild = () => {
    this.setState({
      showChild: false
    });

    setTimeout(() => {
      this.setState({
        showChild: true
      });
    }, 100);

    console.log("Reload Child Invoked");
  };

  render() {
    const Loic = ["v", "a", "r"];
    const konamiCode = [
      "arrowup",
      "arrowup",
      "arrowdown",
      "arrowdown",
      "arrowleft",
      "arrowright",
      "arrowleft",
      "arrowright",
      "b",
      "a"
    ];
    const fin = ["f", "i", "n"];
    return (
      <div className="App">
        <header className="App-header">
          <img src={haeder} alt="logo" />
          <h1 className="title">EasterEgg fight</h1>
        </header>
        <EasterEgg keys={Loic}>
          <Var />
        </EasterEgg>
        <EasterEgg keys={konamiCode}>
          <div class="overlay">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-YCN-a0NsNk?rel=0&amp;autoplay=1"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </EasterEgg>
        <EasterEgg keys={fin}>
          <img src="https://media.giphy.com/media/IOCXHPvn3WErm/giphy.gif" />
        </EasterEgg>
        <Compte />
        {this.state.showChild ? (
          <Galerie reloadChild={this.reloadChild} />
        ) : null}

        <footer className="Footer mt-2">
          <p>
            Made with <span className="love">❤️</span> by Wild Code School
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
