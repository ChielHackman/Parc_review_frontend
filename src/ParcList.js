import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ParcItem from './ParcItem';

class ParcList extends React.Component {

    constructor(){
        super();

        this.state = {
            parcs: []
        };
    }

  reloadParcs(event){
  let component = this;

    jQuery.getJSON("http://parcreviewapp.herokuapp.com/parcs", function(data){
      console.log(data);

        component.setState({
          parcs: data.parcs
        });
      });
    }

  componentDidMount() {
  this.reloadParcs();
 }

    render() {
        return (
            <div>
            <h1>Parcs:</h1>
              <table>
                <tbody>
                  {this.state.parcs.map(function(parc, i) {
                    return(
                    <ParcItem key={parc.id} id={parc.id} name={parc.name} average_rating={parc.average_rating} />
                    );
                  })}
                </tbody>
              </table>
              </div>
        );
    }
}

export default ParcList;
