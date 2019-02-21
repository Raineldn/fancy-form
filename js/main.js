// Questions Array

const questions = [
{ question: 'Enter Your First Name'},
{ question: 'Enter Your Last Name'},
{ question: 'Enter Your Email', pattern: /\S+@\S+\.\S+/ },
{ question: 'Create A Password', type: 'password'}
];

// Transition Times

const shakeTime = 100; // Shake transition time
const switchTime = 200; // Transition between questions

// Init Position At First Question

let position = 0;

// Init DOM Elements

const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

// EVENTS

document.addEventListener('DOMContentLoaded', getQuestion);

// FUNCTIONS

//Get Question From Array & Add To Markup
function getQuestion() {
	// Get Current Question
	inputLabel.innerHTML = questions[position].question;
	// Get Current Type
	inputField.type = questions[position].type || 'text';
	// Get Current Answer
	inputField.value = questions[position].answer || '';
	// Focus On Element
	inputField.focus();

	// Set Progress Bar Width - Variable to the questions length
	progress.style.width = (position * 100) / questions.length + '%';

	// Add User Icon OR Back Arrow Depending On Question
	prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';

	showQuestion();
}

// Display Question To User

function showQuestion() {
	inputGroup.style.opacity = 1;
	inputProgress.style.transition = '';
	inputProgress.style.width = '100%';
}

// Hide Question From User

function hideQuestion() {
	inputGroup.style.opacity = 0;
	inputLabel.style.marginLeft = 0;
	inputProgress.style.width = 0;
	inputProgress.style.transition = 'none';
	inputGroup.style.border = null;
}













