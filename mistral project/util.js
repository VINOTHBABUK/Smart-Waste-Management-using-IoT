import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, doc,getDoc ,getDocs,collection,addDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCEsylIm412gqUfcc9gnPTMmHJbX0O0KaE",
  authDomain: "dustbin-monitor-1102f.firebaseapp.com",
  databaseURL: "https://dustbin-monitor-1102f-default-rtdb.firebaseio.com",
  projectId: "dustbin-monitor-1102f",
  storageBucket: "dustbin-monitor-1102f.appspot.com",
  messagingSenderId: "5065718611",
  appId: "1:5065718611:web:1aa84f7f92744a7f8e3fa6",
  measurementId: "G-YGTVSNME62"
};

export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const database = getFirestore(app);



export { doc,getDoc,getDocs,collection,addDoc }

