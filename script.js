var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
var selectedLangId = 1;
document.getElementById("save_card").addEventListener("click", () => {
  addFlashcard();
});

document.getElementById("delete_cards").addEventListener("click", () => {
  localStorage.clear();
  flashcards.innerHTML = '';
  contentArray = [];
});

document.getElementById("show_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "block";
});

document.getElementById("close_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "none";
});

flashcardMaker = (text) => {
  const flashcard = document.createElement("div");
  const question = document.createElement('h2');
  const answer = document.createElement('h2');

  flashcard.className = 'flashcard';

  question.setAttribute("style", "border-top:1px solid darkblue; padding: 20px; margin-top:30px");
  question.textContent = text.my_question;

  answer.setAttribute("style", "text-align:center; display:none; color:red");
  answer.textContent = text.my_answer;

  flashcard.appendChild(question);
  flashcard.appendChild(answer);

  flashcard.addEventListener("click", () => {
    if(answer.style.display == "none")
      answer.style.display = "block";
    else
      answer.style.display = "none";
  })

  document.querySelector("#flashcards").appendChild(flashcard);
}

contentArray.forEach(flashcardMaker);

addFlashcard = () => {
  console.log(localStorage.getItem('items'))
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");
  console.log(selectedLangId)
  let flashcard_info = {
    'my_question' : question.value,
    'my_answer'  : answer.value,
    "language_id": selectedLangId
  }

  

  contentArray.push(flashcard_info);
  localStorage.setItem('items', JSON.stringify(contentArray));
  flashcardMaker(contentArray[contentArray.length - 1]);
  question.value = "";
  answer.value = "";
}



function i_Dont_Know() {
 console.log(contentArray);
 
}

function myNewFunction(sel) {
  selectedLangId = sel.selectedIndex+1;
}
if(getContentWithFilter==1){
  const englishwords = localStorage.getItem(getContentWithFilter==1);

}

function getContentWithFilter(id){
  contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  list = document.getElementById("flashcards"); 
  list.innerHTML = '';
  contentArray = contentArray.filter(o => o.language_id == id);
  
  contentArray.forEach(flashcardMaker);
}


function getAll(){
  contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  list = document.getElementById("flashcards"); 
  list.innerHTML = '';
  contentArray.forEach(flashcardMaker);
}