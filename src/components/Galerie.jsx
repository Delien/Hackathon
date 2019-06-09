import React from "react";
import Cards from "./Cards";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

const data = ["", "", "", "", ""];

class Galerie extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Child component Mounted");
  }

  componentWillUnmount() {
    console.log("Child Component Unmounted");
  }

  onButtonClick = () => {
    console.log("Button Clicked");
    this.props.reloadChild();
  };
  render() {
    return (
      <div>
        <Button className="mt-2" onClick={this.onButtonClick}>
          Nouvelle manche
        </Button>
        <CardDeck>
          <div className="row">
            {data.map((i, idx) => {
              return <Cards />;
            })}
          </div>
          <div className="row mt-2">
            {data.map((i, idx) => {
              return <Cards />;
            })}
          </div>
        </CardDeck>
      </div>
    );
  }
}
export default Galerie;
