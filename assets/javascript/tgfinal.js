// Global document function
$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
	time: 120,
	reset: function() {
		this.time = 120;
		$('#timer').html('<h3>' + this.time + ' seconds remaining</h3>');
	},

	start: function() {
		counter = setInterval(countdownTimer.count, 1000);
	},

	stop: function() {
		clearInterval(counter);
	},

	count: function() {
		countdownTimer.time--;

		if (countdownTimer.time >= 0) {
			$('#timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
		};
	}
}

console.log(index);
console.log(countdownTimer);

var correct = 0;
var wrong = 0;

// An array full of objects
var trivia = [

	{
		questions: ["The beaver is the national emblem of which country?",
					"How many players are there in a baseball team?",
					"What is the name of Batman's butler?",
					"Hg is the chemical symbol of which element?",
					"In Fahrenheit, at what temperature does water freeze?",
					"What is the military alphabet term for Q?",
					"What is the highest waterfall in the world?",
					"Who was the U.S. president during World War 1?"]
	},

	{
		answers: [" Canada", " United States", " Russia", " Denmark",
				" 15", " 17", " 9", " 8",
				" Roger", " Victor", " Wayne", " Alfred",
				" Mercury", " Iron", " Uranium", " Platonium",
				" 42", " 22", " 32", " 52",
				" Quebec", " Quartz", " Quintet", " Quarter",
				" Angel Falls", " Browne Falls", " Tugela Falls", " Lake Unknown",
				" Theodore Roosevelt", " William McKinley", " Woodrow Wilson", " Calvin Coolidge"]
				
	},

	{
		correctAnswer: [" Canada",
						" 9",
						" Alfred",
						" Mercury",
						" 32",
						" Quebec",
						" Angel Falls",
						" Woodrow Wilson"]
	}
	
];


// Click to start
$('#clickToStart').on('click', function populate() {

// Begin timer
countdownTimer.start();

// for loop for questions

for (var i = 0; i < trivia[0].questions.length; i++) {
	document.getElementById("questions" + i).innerHTML = ("<h3>" + trivia[0].questions[i] + "</h3>");
};

// first question possible answers
	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[0] + "</button>");
	var answerDiv = document.getElementById("answers0");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[1] + "</button>");
	var answerDiv = document.getElementById("answers0");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[2] + "</button>");
	var answerDiv = document.getElementById("answers0");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[3] + "</button>");
	var answerDiv = document.getElementById("answers0");
	answerDiv.appendChild(firstAnswerDiv);

	// second question possible answers

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[4] + "</button>");
	var answerDiv = document.getElementById("answers1");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[5] + "</button>");
	var answerDiv = document.getElementById("answers1");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[6] + "</button>");
	var answerDiv = document.getElementById("answers1");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[7] + "</button>");
	var answerDiv = document.getElementById("answers1");
	answerDiv.appendChild(firstAnswerDiv);

	// third question possible answers

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[8] + "</button>");
	var answerDiv = document.getElementById("answers2");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[9] + "</button>");
	var answerDiv = document.getElementById("answers2");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[10] + "</button>");
	var answerDiv = document.getElementById("answers2");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[11] + "</button>");
	var answerDiv = document.getElementById("answers2");
	answerDiv.appendChild(firstAnswerDiv);

	// fourth question possible answers

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[12] + "</button>");
	var answerDiv = document.getElementById("answers3");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[13] + "</button>");
	var answerDiv = document.getElementById("answers3");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[14] + "</button>");
	var answerDiv = document.getElementById("answers3");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[15] + "</button>");
	var answerDiv = document.getElementById("answers3");
	answerDiv.appendChild(firstAnswerDiv);

	// fifth question possible answers

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[16] + "</button>");
	var answerDiv = document.getElementById("answers4");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[17] + "</button>");
	var answerDiv = document.getElementById("answers4");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[18] + "</button>");
	var answerDiv = document.getElementById("answers4");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[19] + "</button>");
	var answerDiv = document.getElementById("answers4");
	answerDiv.appendChild(firstAnswerDiv);

	// sixth question possible answers

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[20] + "</button>");
	var answerDiv = document.getElementById("answers5");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[21] + "</button>");
	var answerDiv = document.getElementById("answers5");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[22] + "</button>");
	var answerDiv = document.getElementById("answers5");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[23] + "</button>");
	var answerDiv = document.getElementById("answers5");
	answerDiv.appendChild(firstAnswerDiv);

	// seventh question possible answers

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[24] + "</button>");
	var answerDiv = document.getElementById("answers6");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[25] + "</button>");
	var answerDiv = document.getElementById("answers6");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[26] + "</button>");
	var answerDiv = document.getElementById("answers6");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[27] + "</button>");
	var answerDiv = document.getElementById("answers6");
	answerDiv.appendChild(firstAnswerDiv);

	// eighth question possible answers

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[28] + "</button>");
	var answerDiv = document.getElementById("answers7");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[29] + "</button>");
	var answerDiv = document.getElementById("answers7");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[30] + "</button>");
	var answerDiv = document.getElementById("answers7");
	answerDiv.appendChild(firstAnswerDiv);

	var firstAnswerDiv = document.createElement("div2");
	firstAnswerDiv.innerHTML = ("<button>" + trivia[1].answers[31] + "</button>");
	var answerDiv = document.getElementById("answers7");
	answerDiv.appendChild(firstAnswerDiv);

	$('button').on('click', function() {
		$(this).css('background-color', 'lightblue');
	})

	
/*for loop for answers....
for (var j = 0; j < trivia[1].answers.length; j++) {
	document.getElementById("answers" + j).innerHTML = ("<h4>" + trivia[1].answers[j] + "</h4>");
};
*/

// for loop for correct answers
for (var k = 0; k < trivia[2].correctAnswer.length; k++) {
	
};



// correct answers
function answerCorrect() {
	correct++;
	console.log("correct");
}

// wrong answers
function answerWrong() {
	wrong++;
	console.log("wrong");
}

// show the score

// I'm done

$('#clickToEnd').on('click', function done() {
	$('#correct').append("<h2><p>" + correct + " correct</p></h2>");
	$('#wrong').append("<h2><p>" + wrong + " wrong</p></h2>");
	countdownTimer.stop();
	$('#timer').empty();

})




// Finish click to start
})

})














