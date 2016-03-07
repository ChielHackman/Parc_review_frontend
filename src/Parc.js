import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ReviewList from './ReviewList';

class Parc extends React.Component {
  constructor() {
  super();

  this.state = {
      parc: {},
      average_rating: "",
      reviews: []
    };
  }

  componentDidMount() {
    this.findParc();
  }

  findParc() {
    console.log("Searching your parc");

    let parcId = this.props.params.parcId;

    let component = this;

    jQuery.getJSON("http://parcreviewapp.herokuapp.com/parcs/" + parcId + ".json", function(data) {
      console.log(data);

      component.setState({
        parc: data.parc,
        average_rating: data.average_rating
      });
    });
  }

  render() {
    return(
      <div>
        <h1>{this.state.parc.name}({this.state.average_rating})</h1>
        <hr />
        <h4>{this.state.parc.description}</h4>
        <p>Adres: {this.state.parc.city}</p>
        <hr />
        <h4>Reviews</h4>
        <ReviewList parcId={this.props.params.parcId} />
      </div>
    );
  }
}

export default Parc;
