let myflashcards = [
    {
        question: "What color is the sky?",
        answer: "Blue"
    },
    {
        question: "What color is grass?",
        answer: "Green"
    },
    {
        question: "What color stripes does a zebra have?",
        answer: "Black and White "
    }]

let i = 0;
let ques = document.getElementById('q1');
let ans = document.getElementById('a1');


do {
    ques.innerHTML = myflashcards[i].question;
    let a = myflashcards[i].answer;
    ques.addEventListener("click",function() {
        ans.innerHTML = a;
    });

i++;

} while (i < myflashcards.length)



