import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class ParcItem extends React.Component {
    constructor(){
        super();
        this.state = {
          id: null,
          name: "",
          description: "",
          city: "",
          average_rating: 0
        };
    }

  componentDidMount() {
  this.setState({
    key: this.props.id,
    id: this.props.id,
    name: this.props.name,
    description: this.props.description,
    city: this.props.city,
    average_rating: this.props.average_rating
    })
  }

    render() {

        return (
            <div>
              <Link to={`/parc/${this.state.id}`}>{this.state.name}</Link>({this.state.average_rating})
            </div>
        );
    }
}

export default ParcItem;
