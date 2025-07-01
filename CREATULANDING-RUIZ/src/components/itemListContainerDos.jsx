import {getFirestore, doc, getDocs} from 'firebase/firestore';
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState({});
  const db = getFirestore();

  useEffect(() => {
    const itemRef = doc(db,"items", "6VKGjnlmtslvAGqywrwT"); // Replace with your item ID

    getDocs(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.data());
      } else {
        console.log("No such document!");
      }
    })
  }, [db]);

  return (
    <>
      
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
          <img src={data.image} alt={data.title} />
       
    </>
  );

}