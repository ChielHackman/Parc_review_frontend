import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ReviewForm from './ReviewForm';
import ReviewItem from './ReviewItem';
import SkyLight from 'react-skylight';

class ReviewList extends React.Component {
  constructor() {
    super();

     this.state = {
       reviews: [],
       counts: {
         review: 0
       }
     };
   }

   reloadReviews(event) {
     console.log(this.props)
     let parcId = this.props.parcId;

     let component = this;

     jQuery.getJSON(`http://parcreviewapp.herokuapp.com/parcs/${parcId}/reviews`, function(data) {
       console.log(data);

       component.setState({
         reviews: data.reviews
       });
     });
   }

   componentDidMount() {
      this.reloadReviews();
    }

   render() {
     var myDialog = {
       backgroundColor: '#58B4F5',
       width: '70%',
       height: '600px',
       marginTop: '-300px',
       marginLeft: '-35%',
       overflow: 'auto',
       textAlign: 'left',
     };
      return(
        <div>
          <button onClick={() => this.refs.customDialog.show()}>Reviews</button>
          <SkyLight dialogStyles={myDialog} hideOnOverlayClicked ref="customDialog" title="Reviews">
          <hr />
          <ul>
            {this.state.reviews.map(function(review, i) {
            return(
              <li><ReviewItem key={review.id} id={review.id} name={review.name} comment={review.comment} rating={review.rating} parcsId={review.parcsId} onChange={this.reloadReviews.bind(this)} /></li>
            );
            }, this)}
            </ul>
            <hr />
          <ReviewForm onChange={this.reloadReviews.bind(this)} parcId={this.props.parcId} />
          </SkyLight>
        </div>
      );
    }
  }

export default ReviewList;
