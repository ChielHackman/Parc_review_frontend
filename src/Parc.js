import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import model from './Model';

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
    this.getParc();
  }

  getParc() {
    console.log("Searching your parc");

    let parcId = this.props.params.parcId;

    let component = this;

    function onDone(data) {
      component.setState({
        parc: data.parc,
        average_rating: data.average_rating
    });
  }

  model.parcs.show(onDone, parcId);
}

  render() {
    var myBlock = {
      backgroundColor: '#58B4F5',
      textAlign: 'center',
      width: '100%',
      height: 'auto',
    };
    return(
      <div style={myBlock}>
        <h1>{this.state.parc.name} </h1><h3>has an average rating of {this.state.average_rating}</h3>
        <hr />
        <h4>{this.state.parc.description}</h4>
        <p>Adres: {this.state.parc.city}</p>
        <hr />
        <ReviewList onChange={this.getParc.bind(this)} parcId={this.props.params.parcId} />
      </div>
    );
  }
}

export default Parc;
