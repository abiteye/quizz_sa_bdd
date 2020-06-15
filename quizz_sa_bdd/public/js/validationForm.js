// validation

$(document).ready(function() {
    $("#submit").click(function() {
        var user = $("#pseudo").val();
        if (user == "") {
            $(".error-form").html("*");
            $(".error").html("* Champs obligatoires");
            $(".error-form").css("color", "red");
            return false;
        } else {
            $("#pseudo").next(".error-form").fadeOut();
        }
        var pwd = $("#password").val();
        if (pwd == "") {
            $(".error-form").html("*");
            $(".error-form").html("color", "red");
            return false;
        } else {
            $("#password").next(".error-form").fadeOut();
        }
        return false;
    });
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#output').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}

$("#photo").change(function() {
    readURL(this);
});


const URL_ROOT = "index.php?action";

const $btn_deconnect = $("#btn_deconnect")

//Traitement de Déconnexion
$btn_deconnect.on("click", () => {
    $.get(`${URL_ROOT}=deconnexion`, (data, status) => {
        window.location.replace("index.php")
    });
})

//recupération des id
var formm = $('#forme')[0];
var container = $('#container');



formm.addEventListener('submit', () => {

    sendData('connexion', container, true);

})

$('#submit').on(
    'click',
    () => {
        //alert();
        sendData('connexion', container, true);
    }
)

function sendData(action, conten, is_post) {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = () => {
        if ((ajax.readyState == 4) && ajax.status == 200) {
            let data = ajax.responseText;
            if (data == "error") {

                alert("Il y'a une erreur quelque part");

            } else {
                conten.html(data);
            }
        }
    }

    var donnee = "";
    if (is_post) {
        donnee = getFormData();
    }
    ajax.open('POST', `index.php?action=${action}`, true);
    ajax.send(donnee);
}

function sendData2(action, page, content) {

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = () => {
        if ((ajax.readyState == 4) && ajax.status == 200) {
            let data = ajax.responseText;
            if (data == "error") {

                alert("la page n'existe pas");

            } else {
                //alert(page);
                var pag = document.getElementById(content);
                pag.innerHTML = data;
                //$('#content').load('data');
            }
        }
    }


    ajax.open('POST', `index.php?action=${action}&page=${page}`, true);
    ajax.send();
}

// la function qui va recupéré les données du formulaire c ici

function getFormData() {
    var forme = document.getElementById('forme');

    var donnee = new FormData(forme);

    return donnee;
}

// la fonction affichant le top5 et le score du joueur connecte

$.ajax({
    url: 'http://localhost/Projets/quizz_sa_bd/data/top_cinq.php',
    dataType: 'json',
    success: function(data) {
        for (var i = 0; i < data.length; i++) {

            var row = $('<tr><td>' + data[i].prenom + '</td><td>' + data[i].nom + '</td><td>' + data[i].score + '</td><tr>');

            $('#tBodyUsers').append(row);
        }
    }
});