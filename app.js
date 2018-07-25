function populate() {
	if(quiz.isEnded()) {
		//showScores();
	}

	else{
		//showQuestion
		var element = document.getElementBy Id("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionsIndex().choices;
		for(var i = 0; i< choices.length; i++) {
			var element = document.getElementById("choice"+i);
			element.innerHTML = choices[i];
		}
	}
}


function guess(id,guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var Element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + "of" + quiz.questions.length;

}

function showScores(){
	var gameOverHtml = "<h1>Result</h1>";
		gameOverHtml += "<h2 id='score'>Your scores: " + quiz.score + "</h2>";
		var element = document.getElementById("quiz");
		element.innerHTML = gameOverHtml;
}




var questions= {
	new Questions("Javascript is ___________ language.",["Programming","Application","Scripting","None of these"].["Scripting"]),
	new Questions("Javascript is ___________ Side Scripting language.",["Server","ISP","Browser","None of these"].["Browser"]),
	new Questions("Javascript code is written in file having extension ___________",[".js",".jsv",".jv",".java"].[".js"]),
	new Questions("Local browser used for validation of web pages uses___________",["JS","CSS","java","None of these"].["JS"]),
	new Questions("Which of the following Attribute is used to include External JS code inside your HTML Document.",["link","script","src","ext"].["src"]),

}

var quiz = new Quiz(questions);
populate();
