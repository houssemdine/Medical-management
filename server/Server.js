const  express = require('express');


const mysql = require('mysql');

const cors = require("cors");
const { json } = require('body-parser');
const app = express();
app.use(cors());

app.use(express.json());
const db = mysql.createConnection({
  user:'root',
  host:'localhost',
  password:'',
  database:'cabine'


  
})
db.connect((err,res)=>{

  if(err){
    console.log("la");

  }else{console.log("mcha");

}
});
//login
app.post("/login",(req,res)=>{
  const email=req.body.email;
  const password=req.body.password;
  db.query("SELECT  role FROM med WHERE email= ? AND mdp= ?",[email,password],(err, result)=>{

 // var obj = JSON.parse(result);

    if(result){
       
       


       console.log(result[0].role)
       res.send(result[0].role)
    }else{
      console.log("3sba")
    }

  })


});

//inscription
app.post("/register",(req,res)=>{
  const nom =req.body.nom;
  const prenom =req.body.prenom;
  const email =req.body.email;
  const mdp =req.body.mdp;
  const tel =req.body.tel;
  const role='p'

db.query("INSERT INTO med (nom,prenom,email,mdp,tel,role) VALUES (?,?,?,?,?,?)",[nom,prenom,email,mdp,tel,role],(err,ress)=>{

  if(err){
    console.log("eeeeeeee");

  }else{
   res.send("dddddd")
  }
})



});

//affichage des medecin
app.get("/med", (req, res) => {
  db.query("SELECT * FROM med WHERE role='m'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



//affichage des patient
app.get("/patien", (req, res) => {
  db.query("SELECT * FROM med WHERE role='p'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//affichage des rdv
app.get("/rdv", (req, res) => {
  db.query("SELECT * FROM rdv ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});



//supprimer
app.delete("/delpat/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM med WHERE idmed = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


  //afficher tout les medcin

  app.get("/allmed/:id",(req,res)=>{
    const id=req.params.id;
    db.query("SELECT * FROM med WHERE type = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  

  });



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});