import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCdRbFwpJiBrMSD560zK6QXh6FVJiwI78g",
  authDomain: "mvinoles-proyectoreact.firebaseapp.com",
  projectId: "mvinoles-proyectoreact",
  storageBucket: "mvinoles-proyectoreact.appspot.com",
  messagingSenderId: "346845710364",
  appId: "1:346845710364:web:7019ffcec71dc8359af7d9",
  measurementId: "G-QNVD04LNL8",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const DB = getFirestore(app);

//1-Traer todos los documentos
export default async function getItems() {
  const colectionProductsRef = collection(DB, "products");
  const documentSnapshot = await getDocs(colectionProductsRef);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

export async function getOneItem() {}
