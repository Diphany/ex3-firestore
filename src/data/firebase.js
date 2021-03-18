import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCrGJyIA7H47_TjmKGeYFkEbAzNpd6Z-7c",
  authDomain: "ex3-produits-b5a0e.firebaseapp.com",
  projectId: "ex3-produits-b5a0e",
  storageBucket: "ex3-produits-b5a0e.appspot.com",
  messagingSenderId: "988717438369",
  appId: "1:988717438369:web:2018faa21571fd55f3e7e0"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;