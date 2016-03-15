import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ParcItem from './ParcItem';
import model from './Model';

class ParcList extends React.Component {

    constructor(){
        super();

        this.state = {
            nederland: [],
            belgië: [],
            duitsland: []
        };
    }

  loadParcs(event){
  let component = this;

    function onDone(data) {
      console.log("Parcs loaded");

    component.setState({
      nederland: data.nederland,
      belgië: data.belgië,
      duitsland: data.duitsland
      });
    }

    model.parcs.index( onDone );
  }

  componentDidMount() {
  this.loadParcs();
 }

    render() {

      var myBlock = {
        textAlign: 'center',
        width: '1200px',
        height: '100px',
        color: 'black'
      };

      var blockOne = {
        textAlign: 'center',
        width: '400px',
        height: '100px',
        color: 'black'
      };
        return (
              <div>
                <table>
                <tr>
                <td style={myBlock}>
                <img src="http://summercampaignvideo.centerparcs.com/bundles/centerparcsfront/images/logo.png" />
                <h1>Welcome at CenterParcs reviews.</h1>
                <p>Choose a parc to look at the details and reviews.</p>
                </td>
                </tr>
                </table>
                <table>
                <tr>
                <td style={blockOne}>
                <h2><u>Belgium</u></h2>
                {this.state.belgië.map(function(parc, i) {
                  return(
                  <ParcItem key={parc.id} id={parc.id} name={parc.name} />
                  );
                })}
                </td>
                <td style={blockOne}>
                <h2><u>Germany</u></h2>
                {this.state.duitsland.map(function(parc, i) {
                  return(
                  <ParcItem key={parc.id} id={parc.id} name={parc.name} />
                  );
                })}
                </td>
                <td style={blockOne}>
                <h2><u>Holland</u></h2>
                {this.state.nederland.map(function(parc, i) {
                  return(
                  <ParcItem key={parc.id} id={parc.id} name={parc.name} />
                  );
                })}
                </td>
                </tr>
                </table>
              </div>
        );
    }
}

export default ParcList;
