import React from 'react';
import jQuery from 'jquery';
import model from './Model';

 class ReviewForm extends React.Component {
   constructor() {
     super();
   }

   createReview(event) {
     event.preventDefault();

     let component = this;
     let parcId = this.props.parcId;
     let name = this.refs.newName.value;
     let comment = this.refs.newComment.value;
     let rating = this.refs.newRating.value;

     let newReview = {
       id: null,
       name: name,
       comment: comment,
       rating: rating
     };

     function onDone(data) {
         component.props.onChange();
         component.refs.newName.value = "";
         component.refs.newComment.value = "";
         component.refs.newRating.value = "";
       }

      function onFail(error) {
         console.log(error);
       }

       model.parcReviews.create( newReview, onDone, onFail, parcId)
   };

   render() {
     return (
       <form onSubmit={this.createReview.bind(this)}>
         <div>
          <input ref="newName" placeholder="Firstname Lastname" />
        </div>
        <br />
        <div>
          <textarea ref="newComment" placeholder="Comment/review" />
        </div>
        <div>
        <h4>Rating:</h4>
        <select ref="newRating">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
           </select>
           </div>
           <div>
           <button type="submit">Add review</button>
         </div>
       </form>
     );
   }
 }

 export default ReviewForm;
