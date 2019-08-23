/*import React from "react";
import Cards from "./Cards";
import { Card, Button } from "reactstrap";

class Compte extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compte1: 0,
      compte2: 0
    };
    this.onCompte1 = this.onCompte1.bind(this);
    this.onCompte2 = this.onCompte2.bind(this);
  }

  onCompte1(e) {
    this.setState({
      compte1: this.state.compte1 + 1
    });
  }
  onCompte2(e) {
    this.setState({
      compte2: this.state.compte2 + 1
    });
  }

  render() {
    return (
      <div className="row justify-content-center">
        <Button className="mr-2" onClick={this.onCompte1}>
          Ajouter point joueur 1
        </Button>
        <Card className="mr-2">
          <p
            className="card-title compteur"
            value={this.state.compte1}
            onChange={this.onCompte1}
          >
            Point du joueur 1 :<br />
            {this.state.compte1}
          </p>
        </Card>
        <Card className="mr-2">
          <p
            className="card-title compteur"
            value={this.state.compte2}
            onChange={this.onCompte2}
          >
            Point du joueur 2 :<br />
            {this.state.compte2}
          </p>
        </Card>

        <Button onClick={this.onCompte2}>Ajouter point joueur 2</Button>
      </div>
    );
  }
}
export default Compte;*/
