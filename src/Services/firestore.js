import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc
} from "firebase/firestore";

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

//2-Traer documento por ID

export async function getOneItem(idParams) {
  const docRef = doc(DB, "products", idParams);

  const docSnapshot = await getDoc(docRef);

  return {
    ...docSnapshot.data(),
    id: docSnapshot.id,
  };
}

//3- Traer documentos según su categoría
export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");

  const queryCat = query(
    collectionRef,
    where("category", "==", categoryParams)
  );
  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

export async function createOrder(order){
    const collectionRef = collection(DB, "orders");
    const docOrder = await addDoc(collectionRef, order);

    return docOrder.id;
}