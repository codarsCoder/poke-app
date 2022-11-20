// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  deleteDoc,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  getDocs,
  where,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoSpYuneo1zefud5hybByzS6Af96F2mY8",
  authDomain: "poke-app-fb207.firebaseapp.com",
  projectId: "poke-app-fb207",
  storageBucket: "poke-app-fb207.appspot.com",
  messagingSenderId: "997203523659",
  appId: "1:997203523659:web:b5233d0bb896937ec835ce",
  measurementId: "G-KRC1CHFCHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const database = getFirestore(app);
export const dbComments = collection(database, "comments")

//FİLTRELİ İŞLEMLER İÇİN
export const UseProductListsFiltered = async(pName,setCommentList) => {
  let carray=[]
  const q = query(dbComments,where('pName', '==',pName),orderBy("time","asc"))//wherede == olduğunda orderby çalışmıyor
         const querySnapshot = await getDocs(q);
    const asd = async()=> {
       querySnapshot.forEach((doc) => {
   carray.push(doc.data())
      })
}
 await asd();
 await setCommentList(carray)
}