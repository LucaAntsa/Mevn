const etudiants = [
    { id: 1, nom: "Rakoto", filiere: "GL", moyenne: 12 },
    { id: 2, nom: "Rabe", filiere: "IG", moyenne: 9 },
    { id: 3, nom:"Rabenja", filiere: "LINUX", moyenne: 10},
    { id:4, nom: "Lita", filiere: "IA", moyenne:15}
];
/*utilisation de foreach pour parcourir les elements du tableau
et executer une fonction pour chaque element*/

etudiants.forEach(etudiant => {
    console.log(etudiant.nom);
});
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

etudiants.forEach(({ nom, moyenne }) => {
    console.log(nom, moyenne);
});

//utilisation de filter pour afficher les etudiant ayant la moyenne >=10
const moyenEleve = etudiants.filter(etudiant => etudiant.moyenne>=10)
console.log(moyenEleve);
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

//utilisation de map pour cree un nouveau tableau contenant les noms des etudiants
const newArray = etudiants.map(etudiant => etudiant.nom)
console.log(newArray);
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

//ajout 1 point a chaque moyenne
const newAverage = etudiants.map (e =>{
    return {
        ...e,
        moyenne: e.moyenne +1
    }
});
console.log(newAverage)
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

//EXO 4
function chargerEtudiants() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(etudiants);
    }, 2000);
  });
}

// fonction async et try catch
async function afficherEtudiants() {
  try {
    console.log("Chargement en cours...");
    const liste = await chargerEtudiants();

    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    console.log("Chargement terminé !");
    console.log("Liste des étudiants :", liste);

  } catch (error) {
    console.log("Erreur lors du chargement :", error);
  }
}

// Appel de la fonction
afficherEtudiants();
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

//EXO 5
// 1)somme des moyennes avec reduce()
const Moyennes = etudiants.reduce((accumulateur, etudiant) =>accumulateur + etudiant.moyenne, 0);

// 2)moyenne générale
const moyenneG = Moyennes / etudiants.length;
console.log("Moyenne de la classe :", moyenneG);