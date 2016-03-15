import jQuery from 'jquery';

 class Parcs {
    constructor() {
    }

    index( onDone ) {
      jQuery.getJSON( "http://parcreviewapp.herokuapp.com/parcs/", onDone );
    }

    show( onDone, parcId ) {
      jQuery.getJSON( "http://parcreviewapp.herokuapp.com/parcs/" + parcId + ".json", onDone );
    }
 }

 class ParcReviews {
    constructor() {
    }


    index( onDone, parcId ) {
      jQuery.getJSON( "http://parcreviewapp.herokuapp.com/parcs/" + parcId + ".json", onDone );
    }

    create( review, onDone, onFail, parcId )
    {
       let data = JSON.stringify({ review: review });

       console.log( "creating a review" );

       let request = {
          type: "POST",
          url: "http://parcreviewapp.herokuapp.com/parcs" + parcId + "/reviews.json",
          data: data,
          contentType: "application/json",
          dataType: "json"
       };

       jQuery.ajax( request ).done( onDone ).fail( onFail );
    }
 }

 class Model {
    constructor() {
       this.parcs = new Parcs;
       this.parcReviews = new ParcReviews;
    }
 }


 var model = new Model;

 export default model;
