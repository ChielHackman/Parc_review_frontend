import React from 'react';
import jQuery from 'jquery';

class ReviewItem extends React.Component {
   constructor() {
     super();

     this.state = {
         reviewitem: {}
       };
     }

   componentDidMount() {
    this.setState({
      key: this.props.id,
      id: this.props.id,
      name: this.props.name,
      comment: this.props.comment,
      rating: this.props.rating
    })
  }

   render() {
     return(
      <div>
        <h4>{this.state.name}</h4>
        <p>{this.state.comment}</p>
        <p>Rating: {this.state.rating}</p>
      </div>
     );
   }
 }

 export default ReviewItem;
