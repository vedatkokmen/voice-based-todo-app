import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import alanBtn from "@alan-ai/alan-sdk-web";
import { db } from "./firebase-config";
import { addDoc, collection } from "firebase/firestore";

const KEY = process.env.REACT_APP_KEY;

function App() {
  const databaseRef = collection(db, "todo-list");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    alanBtn({
      key: KEY,
      onCommand: (commandData) => {
        addDoc(databaseRef, { item: commandData.data }).then(() => {
          setUpdate(true);
        });
      },
    });
  });
  return (
    <div>
      <Todo databaseRef={databaseRef} update={update} setUpdate={setUpdate} />
    </div>
  );
}

export default App;
