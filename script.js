/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

const titleWindow = document.querySelector('.title-window');
const form = document.querySelector('.add-book-form');
const content = document.querySelector('.content');
const btnSumbit = document.querySelector('.submit-form');

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const dateInput = document.querySelector('#date');
const ratingInput = document.querySelector('#rating');
const statusInput = document.querySelector('#status');

let myLibrary = [];

function Book(title, author, date, rating, status) {
	this.title = title;
	this.author = author;
	this.date = date;
	this.rating = rating;
	this.status = status;
}

function addBookToLibrary(title, author, date, rating, status) {
	myLibrary.push(new Book(title, author, date, rating, status));
}

addBookToLibrary('Moby Dick', 'Herman Melville', '2022/04/13', 5, true);
addBookToLibrary('Lolita', 'Vladmir Nabokov', '2020/01/13', 5, false);

function displayAllBooks(arr) {
	arr.forEach((element) => {
		content.insertAdjacentHTML(
			'beforeend',
			`
		<div class="card" data-index=${myLibrary.indexOf(element)}>
					<div class="title-card">${element.title}</div>
					<div class="author-card">${element.author}</div>
					<div class="date-card">${element.date}</div>
					<div class="rating-card">${element.rating}</div>
					<div class="status-card">${element.status}</div>
					<button class="delete-card">X</button>

				</div>`
		);
	});
}

function resetBooks() {
	document.querySelectorAll('.card').forEach((element) => {
		element.remove();
	});
}

function updateDisplay(arr) {
	resetBooks();
	displayAllBooks(arr);
}

displayAllBooks(myLibrary);
// resetBooks();

titleWindow.addEventListener('click', () => {
	form.classList.toggle('hidden');
});

// FIXME: Form is hidden due to opacity but still exists and can be moused over

btnSumbit.addEventListener('click', (e) => {
	e.preventDefault();
	form.classList.toggle('hidden');
	addBookToLibrary(
		titleInput.value,
		authorInput.value,
		dateInput.value,
		ratingInput.value,
		statusInput.value
	);
	updateDisplay(myLibrary);
});

console.log(myLibrary);

content.addEventListener('click', (e) => {
	if (!e.target.classList.contains('delete-card')) return;

	let indexCard = e.target.closest('.card').getAttribute('data-index');

	myLibrary.splice(indexCard, 1);

	updateDisplay(myLibrary);
});
