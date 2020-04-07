let xhr = new XMLHttpRequest();
let timeoutId;

function updateStatus() {
    xhr.open("POST","Controller?action=UpdateStatus&status="+document.getElementById("input").value, true);
    xhr.onreadystatechange = setStatus;
    xhr.send(null);
}

function setStatus(){
    if(xhr.status === 200){
        if(xhr.readyState === 4){
            let serverResponse = JSON.parse(xhr.responseText);
            let status = serverResponse.status;
            let div = document.getElementById("status");
            let p = document.getElementById("pStatus");
            p.innerHTML = "";
            let text = document.createTextNode(status);
            p.appendChild(text);
            div.appendChild(p);
        }
    }
}

getFriendlist();
function getFriendlist(){
    xhr.open("GET","Controller?action=GetFriends");
    xhr.onreadystatechange= showFriends;
    xhr.send(null);

}

function showFriends() {
    if(xhr.status === 200){
        if(xhr.readyState === 4){
            clearTable();
            let text = JSON.parse(xhr.responseText);
            let table = document.getElementById("friends");
            let count = 1;
            for(let person in text){
                let tr = document.createElement("tr");
                let tdName = document.createElement("td");
                let tdStatus = document.createElement("td");
                tdName.innerText = text[person].name;
                tdStatus.innerText = text[person].status;

                tr.appendChild(tdName);
                tr.appendChild(tdStatus);
                tr.className = "friendlist";
                table.appendChild(tr);
                count++;
            }
            timeoutId = setTimeout(getFriendlist,20000);
        }
    }
}

function clearTable(){
    let friends = document.querySelectorAll('.friendlist');
    let table = document.getElementById('friends');
    for (let i=0;i<friends.length;i++){
        table.removeChild(friends[i]);
    }
}

function addFriend() {
    console.log(document.getElementById("email").value);
    clearTimeout(timeoutId);
    xhr.open("POST","Controller?action=AddFriend&email="+document.getElementById("email").value);
    xhr.onreadystatechange = getFriendlist;
    xhr.send(null);
}