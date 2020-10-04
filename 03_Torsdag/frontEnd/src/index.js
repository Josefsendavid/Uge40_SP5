import 'bootstrap/dist/css/bootstrap.css'

const tb = document.getElementById("tb");

const url = "https://www.josefsendavid.dk/rest2/api/person/all";
display();
function display() {
    document.getElementById("tb").value = "";
    fetch(url)
            .then(res => fetchWithErrorCheck(res))
            .then((data) => {
                const trs = data.all.map(user => {
                    return `<tr><td>${user.id}</td><td>${user.fName}</td><td>${user.lName}</td><td>${user.phone}</td><td>${user.street}</td><td>${user.zip}</td><td>${user.city}</td></tr>`

                });
                const trStr = trs.join("");
                document.getElementById("tb").innerHTML = trStr;
            });
}

document.getElementById("refresh").onclick = () => {
    window.location.reload();
}

document.getElementById("addBtn").onclick = () => {
    var newFName = document.getElementById("setFName").value 
    var newLName = document.getElementById("setLName").value 
    var newPhone = document.getElementById("setPhone").value 
    var newStreet = document.getElementById("setStreet").value 
    var newZip = document.getElementById("setZip").value 
    var newCity = document.getElementById("setCity").value 
    
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
btn.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()});
    }
    return res.json();
}