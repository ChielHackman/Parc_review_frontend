import React from 'react';
 import jQuery from 'jquery';

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

     jQuery.ajax({
       type: "POST",
       url: `http://parcreviewapp.herokuapp.com/parcs/${parcId}/reviews`,
       data: JSON.stringify({
           review: newReview
       }),
       contentType: "application/json",
       dataType: "json"
     })
       .done(function(data) {
         component.props.onChange();
         component.refs.newName.value = "";
         component.refs.newComment.value = "";
         component.refs.newRating.value = "";
       })

       .fail(function(error) {
         console.log(error);
       });
   }

   render() {
     return (
       <form onSubmit={this.createReview.bind(this)}>
         <div>
          <input ref="newName" placeholder="Firstname Lastname" />
        </div>
        <div>
          <input ref="newComment" placeholder="Comment/review" />
        </div>
        <div>
          <select ref="newRating">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
           </select>
           <button type="submit">Rate</button>
         </div>
       </form>
     );
   }
 }

 export default ReviewForm;
