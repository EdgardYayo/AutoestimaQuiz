const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

const questions = [
  {
    question: "¿Te sientes orgulloso(a) de tus logros?",
    answers: {
      a: "Siempre",
      b: "A veces",
      c: "Casi nunca"
    },
    correctAnswer: "a"
  },
  {
    question: "¿Tienes confianza en tus habilidades?",
    answers: {
      a: "Sí, siempre",
      b: "A veces dudo",
      c: "No confío en mis habilidades"
    },
    correctAnswer: "a"
  },
  {
    question: "¿Te aceptas y te quieres tal como eres?",
    answers: {
      a: "Sí, me acepto completamente",
      b: "A veces me cuesta aceptarme",
      c: "No me acepto como soy"
    },
    correctAnswer: "a"
  },
  {
    question: "¿Cómo te sientes acerca de tu apariencia física?",
    answers: {
      a: "Me siento bien y acepto mi apariencia",
      b: "A veces me siento inseguro/a",
      c: "No me siento satisfecho/a con mi apariencia"
    },
    correctAnswer: "a"
  },
  {
    question: "¿Eres capaz de manejar las críticas constructivas?",
    answers: {
      a: "Sí, las acepto y aprendo de ellas",
      b: "A veces me afectan emocionalmente",
      c: "No puedo lidiar bien con las críticas"
    },
    correctAnswer: "a"
  },
  {
    question: "¿Te sientes valorado(a) por las personas cercanas a ti?",
    answers: {
      a: "Sí, me siento muy valorado(a)",
      b: "A veces me siento valorado(a)",
      c: "No siento que me valoren"
    },
    correctAnswer: "a"
  },
  {
    question: "¿Te consideras una persona competente en tus actividades diarias?",
    answers: {
      a: "Sí, me considero competente en lo que hago",
      b: "A veces dudo de mi competencia",
      c: "No me siento competente en absoluto"
    },
    correctAnswer: "a"
  },
  {
    question: "¿Te sientes capaz de establecer y mantener límites saludables en tus relaciones?",
    answers: {
      a: "Sí, soy capaz de establecer y mantener límites saludables",
      b: "A veces tengo dificultades para establecer límites",
      c: "No puedo establecer límites efectivos en mis relaciones"
    },
    correctAnswer: "a"
  },
  {
    question: "¿Crees en tus propias capacidades para superar obstáculos?",
    answers: {
      a: "Sí, confío en mi capacidad para superar obstáculos",
      b: "A veces dudo de mi capacidad para superar obstáculos",
      c: "No creo en mi capacidad para superar obstáculos"
    },
    correctAnswer: "a"
  },
  {
    question: "¿Te sientes satisfecho(a) con tus logros personales y profesionales?",
    answers: {
      a: "Sí, estoy satisfecho(a) con mis logros",
      b: "A veces me siento insatisfecho(a)",
      c: "No me siento satisfecho(a) con mis logros"
    },
    correctAnswer: "a"
  }
  // Agrega más preguntas aquí...
];

function buildQuiz() {
  const output = [];

  questions.forEach((question, index) => {
    const answers = [];

    for (const letter in question.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${index}" value="${letter}">
          ${letter.toUpperCase()}) ${question.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="question">${question.question}</div>
      <div class="answers">${answers.join('')}</div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResult() {
  const answerContainers = quizContainer.getElementsByClassName('answers');
  let score = 0;

  questions.forEach((question, index) => {
    const answerContainer = answerContainers[index];
    const selector = `input[name=question${index}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if (userAnswer === question.correctAnswer) {
      score++;
      answerContainers[index].style.color = 'green';
    } else {
      answerContainers[index].style.color = 'red';
    }
  });

  resultContainer.innerHTML = `Tu puntuación: ${score} de ${questions.length}`;

  // Evaluar el nivel de autoestima según la puntuación obtenida
  let message = '';
  if (score === questions.length || score === questions.length - 1) {
    message = '¡Excelente autoestima 😊!';
  } else if (score >= questions.length / 2) {
    message = 'Tienes una buena autoestima 😉.';
  } else {
    message = 'Puedes trabajar en mejorar tu autoestima 🙄.';
  }

  resultContainer.innerHTML += `<p>${message}</p>`;
}

// Event listener para el botón de enviar respuestas
submitButton.addEventListener('click', showResult);

// Construir el quiz al cargar la página
buildQuiz();  
