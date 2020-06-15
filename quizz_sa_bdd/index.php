<?php
session_start();
        
    define("WEBROOT","http://localhost/Projets/quizz_sa_bd");
    define("ACTION","action");
    require_once("./traitements/fonctions.php");
    require_once("./data/requete.php");
    require_once('./data/getJoueur.php');
       
        if(isset($_GET['action'])) {
         
            if($_GET['action']=='connexion'){ 
           
               $data=$_POST;

               pageConnexion($data);
            }
            else if($_GET['action']=='inscription'){ 
           
               require_once './pages/inscription.php';
            }
            else if($_GET['action'] == 'admin'){ 
           
                if(is_connect()){
                    
                    if($_GET['page'] == 'liste')
                    {
                        require_once './pages/liste_question.php';
                    }
                    elseif($_GET['page'] == 'inscription')
                    {
                        require_once './pages/inscription.php';
                    }
                    elseif($_GET['page'] == 'joueur')
                    {
                        require_once './pages/joueur.php';
                    }
                    elseif($_GET['page'] == 'question')
                    {
                        require_once './pages/questions.php';
                    }
                    else
                    {
                        require_once './pages/liste_question.php';
                    }
                }elseif($_GET[ACTION]=="joueur"){

                    if(is_connect()){
                        require_once './pages/jeux.php';
                    }
                  
                }
                elseif($_GET[ACTION]=="deconnexion"){
                      //Traitement de Deconnexion
                       deconnection();
                }
            }
        }
        else
        {
            require_once './pages/template.php';
        }
   
?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>