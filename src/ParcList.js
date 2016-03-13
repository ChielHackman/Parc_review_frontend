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

      var myBlock = {
        backgroundImage: 'url()',
        textAlign: 'center',
        width: '400px',
        height: '400px',
        color: 'black',
      };
        return (
              <div>
                <table>
                <tr>
                <td  style={myBlock}>
                <img src="http://static1.centerparcs.com/76/img/logo-cp.png" />
                <h2><u>Holland</u></h2>
                {this.state.parcs.map(function(parc, i) {
                  return(
                  <ParcItem key={parc.id} id={parc.id} name={parc.name} average_rating={parc.average_rating} />
                  );
                })}
                </td>
                <td  style={myBlock}>
                <img src="http://static1.centerparcs.com/76/img/logo-cp.png" />
                <h2><u>Belgium</u></h2>

                </td>
                <td  style={myBlock}>
                <img src="http://static1.centerparcs.com/76/img/logo-cp.png" />
                <h2><u>Germany</u></h2>

                </td>
                </tr>
                </table>
              </div>
        );
    }
}

export default ParcList;
