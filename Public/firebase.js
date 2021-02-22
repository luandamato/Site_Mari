firebase.initializeApp();

var lista = document.getElement.lista

var dados = "";

var db = firebaseRef = firebase.database().ref().child("users");

db.on('child_added', function(snapshot) {
    var user = snapshot.val();

    dados = "<table>" + "<tr><td>" + user + "</td></tr>" + dados;

    lista.innerHTML = dados
})