'use strict'
function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
}

const post1 = new Post('Petr', 'Some text', new Date());
console.log(post1);
post1.edit('something else for admin1');
console.log(post1);


function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
  this.highlighted = true;
}

const attached1 = new AttachedPost('User', 'User text', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('something else for user2');
console.log(attached1);



class PostNew {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  edit(text) {
    this.text = text;
  }
}

const post2 = new PostNew('PetrNew', 'Some text new', new Date());
console.log(post2);
post2.edit('something else for admin1');
console.log(post2);


class AttachedPostNew extends PostNew {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }

  makeTextHighlightedNew() {
    this.highlighted = true;
  }
}

const attached2 = new AttachedPostNew('Admin', 'Admin text', new Date());
console.log(attached2);
attached2.makeTextHighlightedNew();
attached2.edit('something else for admin2');
console.log(attached2);