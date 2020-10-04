import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
// import navigation from "./navigation";

const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

// Solution 1
document.getElementById("findJoke").onclick = () => {
    var input = document.getElementById("userInput").value;
    var match = [];
    //    var alleJokes = jokes.getJokes();
    for (var i = 0; i < allJokes.length; i++) {
        if (allJokes[i].includes(input) == true) {
            match.push(allJokes[i]);
        }
    }
    document.getElementById("jokeOutput").innerHTML = match.join("");
}

document.getElementById("addJoke").onclick = () => {
    var userJoke = document.getElementById("userJoke").value;
    const jokesUpdated = jokes.getJokes().map(joke => "<li>" + joke + "</li>")
    jokesUpdated.push("<li>" + userJoke + "</li>");
    console.log("Joke added");
    document.getElementById("jokes").innerHTML = jokesUpdated.join("");

}
// // Solution 2
const url = "https://studypoints.info/jokes/api/jokes/period/hour";
document.getElementById("qButton").addEventListener("click", function() {

    fetch(url)
    .then((response) => {
        return response.text();
    })
    
    .then((html) => {
        document.getElementById("qDiv").innerHTML = "<li>" + html + "</li>";
        console.log(html)
    })
        
})

function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}