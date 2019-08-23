import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Front from "./Front";
import Back from "./Back";
import axios from "axios";
import "../cards.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eggs: "",
      character: "",
      name: "",
      skills: [],
      power: ""
    };
  }

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  componentDidMount() {
    axios
      .get(`http://localhost:5050/characters/${this.getRandomInt(26)}`)
      .then(res => {
        this.setState({
          character: res.data.image,
          name: res.data.name,
          skills: res.data.skills,
          power: res.data.power
        });
      });
    axios
      .get(`http://localhost:5050/eggs/${this.getRandomInt(3)}`)
      .then(res => {
        this.setState({
          eggs: res.data.image
        });
      });
  }

  render() {
    return (
      <div className="cards">
        <Flippy
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
        >
          <FrontSide className="imageFront">
            <Front src={this.state.eggs} />
          </FrontSide>

          <BackSide className="imageFront">
            <Back
              character={this.state.character}
              name={this.state.name}
              skills={this.state.skills}
              power={this.state.power}
            />
          </BackSide>
        </Flippy>
      </div>
    );
  }
}

export default Cards;
