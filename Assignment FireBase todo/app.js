


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyDiiQ52dkLx_qH6MHi2r8QxVL9qCS4oAM8",
    authDomain: "js-projects-37cca.firebaseapp.com",
    projectId: "js-projects-37cca",
    storageBucket: "js-projects-37cca.appspot.com",
    messagingSenderId: "835545380676",
    appId: "1:835545380676:web:115494582e8521e30a0911",
    measurementId: "G-49PE67NCC3"
};

const app = initializeApp(firebaseConfig);

let list = document.getElementById("list");
function addTodo() {
    event.preventDefault();
    let todo = document.getElementById("todo");
    let date = new Date();
    let todoValue = todo.value.trim();

    let listItem = document.createElement("li");
    listItem.className = "list";

    listItem.innerHTML = `
      <input class="todo-input" type="text" id="${date.toLocaleString()}" value="${todoValue}" disabled /><br/>
      <span class="date">${date.toLocaleString()}</span><br/>
      <button class="btn-del" onclick="delTodo(event)">Delete</button>
      <button class="btn-add" onclick="editTodo(this)">Edit</button>
    `;

    if (list.firstChild) {
        list.insertBefore(listItem, list.firstChild);
    } else {
        list.appendChild(listItem);
    }

    todo.value = "";
}
function deleteAll(e) {
    list.innerHTML = null
    e.preventDefault()
}
function delTodo(event) {
    event.target.parentNode.remove()
}


var edit = false
function editTodo(e) {
    if (edit) {
        e.parentNode.childNodes[1].disabled = true
        e.parentNode.childNodes[1].blur()
        e.parentNode.childNodes[5].innerHTML = "Edit"
        // console.log(e.parentNode.childNodes[5])
        edit = false
    }
    else {
        e.parentNode.childNodes[1].disabled = false
        e.parentNode.childNodes[1].focus()
        e.parentNode.childNodes[5].innerHTML = "Update"
        // console.log(e.parentNode.childNodes[5])
        edit = true
    }
}

