async function getQuestions(number, category, difficulty, type) {
  const numberOfQuestions = `amount=${number}`;
  const whichCategory = `category=${category}`;

  let questions = [];
  if (difficulty && type) {
    const data = await fetch(
      `https://opentdb.com/api.php?${numberOfQuestions}&${whichCategory}&difficulty=${difficulty}&type=${type}`
    );
    questions = await data.json();
  } else if (difficulty && !type) {
    const data = await fetch(
      `https://opentdb.com/api.php?${numberOfQuestions}&${whichCategory}&difficulty=${difficulty}`
    );
    questions = await data.json();
  } else if (!difficulty && type) {
    const data = await fetch(
      `https://opentdb.com/api.php?${numberOfQuestions}&${whichCategory}&type=${type}`
    );
    questions = await data.json();
  } else {
    const data = await fetch(
      `https://opentdb.com/api.php?${numberOfQuestions}&${whichCategory}`
    );
    questions = await data.json();
  }
  const allQuestions = questions.results;
  
  if (questions.response_code===1){
    alert("No hay preguntas disponibles con estos parámetros. Prueba otra combinación")
    console.log(allQuestions);
  } else
  {paintQuestions(allQuestions);
  const correctAnswers = allQuestions.map(
    (question) => question.correct_answer
  );
  
  const checkGame = document.getElementById("check-game");
  checkGame.addEventListener("click", () => {
    checkResult(correctAnswers);
  });}
}

const gameboard = document.getElementById("gameboard");
const inputNumberOfQuestions = document.getElementById("questions-number");
let numberOfQuestions = 10;
inputNumberOfQuestions.addEventListener("change", () => {
  numberOfQuestions = inputNumberOfQuestions.value;
  return numberOfQuestions;
});
const selectCategory = document.getElementById("questions-category");
let categorySelected = "9";
selectCategory.addEventListener("change", () => {
  categorySelected = selectCategory.value;
  return categorySelected;
});
const selectDifficulty = document.getElementById("questions-difficulty");
let difficultySelected = false;
selectDifficulty.addEventListener("change", () => {
  if (selectDifficulty.value != "all") {
    difficultySelected = selectDifficulty.value;
  }
});
const selectType = document.getElementById("questions-type");
let typeSelected = false;
selectType.addEventListener("change", () => {
  if (selectType.value != "both") {
    typeSelected = selectType.value;
  }
});
const botonInicio = document.getElementById("start-game");
botonInicio.addEventListener("click", () => {
  getQuestions(
    numberOfQuestions,
    categorySelected,
    difficultySelected,
    typeSelected
  );
});
function paintQuestions(array) {
  gameboard.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const questionFieldset = document.createElement("fieldset");
    questionFieldset.setAttribute("title", `question${i + 1}`);
    questionFieldset.setAttribute("id", `fieldset${i}`);
    const questionText = document.createElement("p");
    questionText.className='question'
    const questionDifficulty = document.createElement("p");
    questionDifficulty.innerHTML = `DIFFICULTY: ${array[i].difficulty}`;
    const questionCategory = document.createElement("p");
    questionCategory.innerHTML = `CATEGORY: ${array[i].category}`;
    questionText.innerHTML = array[i].question;
    questionFieldset.appendChild(questionText);

    let positionCorrectAnswer = Math.floor(
      Math.random() * array[i].incorrect_answers.length
    );
    let possibleAnswers = [...array[i].incorrect_answers];
    possibleAnswers.splice(positionCorrectAnswer, 0, array[i].correct_answer);
    for (const answer of possibleAnswers) {
      const botonRespuesta = document.createElement("input");
      botonRespuesta.setAttribute("type", "radio");
      botonRespuesta.setAttribute("name", `question${i}`);
      botonRespuesta.setAttribute("value", answer);
      botonRespuesta.setAttribute("id", answer);
      const textoRespuesta = document.createElement("label");
      textoRespuesta.setAttribute("for", answer);
      textoRespuesta.innerHTML = answer;
      questionFieldset.appendChild(textoRespuesta);
      questionFieldset.appendChild(botonRespuesta);
    }
    questionFieldset.appendChild(questionCategory)
    questionFieldset.appendChild(questionDifficulty)

    gameboard.appendChild(questionFieldset);

  }
}

function checkResult(array) {
  let playerAnswers = document.querySelectorAll("input:checked");
  console.log(playerAnswers.length, array.length);
  if (playerAnswers.length < array.length) {
    alert("Tienes preguntas sin contestar");
  } else {
    for (let i = 0; i < array.length; i++) {
      const paintAnswer = document.getElementById(`fieldset${i}`);
      if (playerAnswers[i].value === array[i]) {
        paintAnswer.style.backgroundColor = "green";
      } else paintAnswer.style.backgroundColor = "red";
    }
  }
}
// botonInicio.addEventListener()
