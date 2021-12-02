const question_ids = ["q1", "q2", "q3", "q4", "q5", "q6"];

let submitButton = document.getElementById("submit");
let values = []
let results = [0, 0, 0, 0, 0, 0]
const songs = [
    "All To Well",
    "Wildest Dreams",
    "Love Story",
    "I Knew You Were Trouble",
    "We Are Never Ever Getting Back Together",
    "You Belong With Me"
]

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    question_ids.forEach((id) => {
        let ind = parseInt(document.getElementById(id).value);
        console.log(ind);
        results[ind] = results[ind] + 1;
    })
    const maxVal = Math.max(...results);
    const maxInd = results.indexOf(maxVal);

    console.log(songs[maxInd]);

    document.getElementById("quiz").style.display = "none";

    let songResult = document.createElement('h1');
    songResult.innerHTML = songs[maxInd];
    document.getElementById("results").appendChild(songResult);
})