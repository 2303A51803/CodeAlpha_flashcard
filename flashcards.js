let flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Who wrote 'Hamlet'?", answer: "William Shakespeare" }
];

let currentIndex = 0;
let showingAnswer = false;
const card = document.getElementById("card");

function displayCard() {
  if (flashcards.length === 0) {
    card.innerText = "No flashcards available. Add one!";
    return;
  }
  showingAnswer = false;
  card.innerText = flashcards[currentIndex].question;
}

function showAnswer() {
  if (flashcards.length === 0) return;
  if (showingAnswer) {
    card.innerText = flashcards[currentIndex].question;
    showingAnswer = false;
  } else {
    card.innerText = flashcards[currentIndex].answer;
    showingAnswer = true;
  }
}

function nextCard() {
  if (flashcards.length === 0) return;
  currentIndex = (currentIndex + 1) % flashcards.length;
  displayCard();
}

function previousCard() {
  if (flashcards.length === 0) return;
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  displayCard();
}

function addCard() {
  let q = document.getElementById("questionInput").value.trim();
  let a = document.getElementById("answerInput").value.trim();
  if (q && a) {
    flashcards.push({ question: q, answer: a });
    currentIndex = flashcards.length - 1;
    displayCard();
    alert("✅ Flashcard added!");
  } else {
    alert("⚠️ Please enter both question and answer!");
  }
}

function editCard() {
  if (flashcards.length === 0) return;
  let q = document.getElementById("questionInput").value.trim();
  let a = document.getElementById("answerInput").value.trim();
  if (q && a) {
    flashcards[currentIndex] = { question: q, answer: a };
    displayCard();
    alert("✏️ Flashcard updated!");
  } else {
    alert("⚠️ Please enter both question and answer!");
  }
}

function deleteCard() {
  if (flashcards.length === 0) return;
  flashcards.splice(currentIndex, 1);
  if (currentIndex >= flashcards.length) currentIndex = 0;
  displayCard();
  alert("🗑️ Flashcard deleted!");
}

displayCard();
