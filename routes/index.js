
/*
 * GET home page.
 */

var db = require('../db/db');

var mongoose = require( 'mongoose' );
var Todo = mongoose.model( 'Todo');

exports.index = function ( req, res ){
  Todo.find( function ( err, todos, count ){
    res.render( 'index', {
        title : 'Express Todo Example',
        todos : todos
    });
  });
};

exports.create = function ( req, res ){
  new Todo({
    content    : req.body.content,
    updated_at : req.body.dueDate,
    doneValue : false
  }).save( function( err, todo, count ){
    res.redirect( '/' );
  });
};


exports.markComplete = function ( req, res ){
  Todo.findById( req.params.id, function ( err, todo ){
     todo.doneValue = true;    
      todo.save( function ( err, todo, count ){
          res.redirect( '/' );
      });
  });
};