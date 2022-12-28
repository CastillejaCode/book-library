/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let myLibrary = [];

function Book(title, author, date, rating) {
	this.title = title;
	this.author = author;
	this.date = date;
	this.rating = rating;
}

function addBookToLibrary(title, author, date, rating) {
	let shit = new Book(title, author, date, rating);
	console.log(shit);
	myLibrary.push(shit);
}

addBookToLibrary('Moby Dick', 'Herman Melville', '2022/04/13', 5);
console.log(myLibrary);
