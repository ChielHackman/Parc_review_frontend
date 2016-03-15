import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ReviewForm from './ReviewForm';
import ReviewItem from './ReviewItem';
import SkyLight from 'react-skylight';
import model from './Model';

class ReviewList extends React.Component {
  constructor() {
    super();

     this.state = {
       reviews: []
     };
   }

   componentDidMount() {
      this.showReviews();
    }

   showReviews() {
     let component = this;
     let parcId = this.props.parcId;

     function onDone(data) {
       console.log("Attaching reviews to parc");

       component.setState({
         reviews: data.reviews
       });

       component.props.onChange();
     }

     model.parcReviews.index( onDone, parcId );
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
              <li><ReviewItem key={review.id} id={review.id} name={review.name} comment={review.comment} rating={review.rating} parcsId={review.parcsId} onChange={this.showReviews.bind(this)} /></li>
            );
            }, this)}
            </ul>
            <hr />
          <ReviewForm onChange={this.showReviews.bind(this)} parcId={this.props.parcId} />
          </SkyLight>
        </div>
      );
    }
  }

export default ReviewList;
