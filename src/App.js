import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import db from "./Firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodo] = useState([""]);
  const [input, setInput] = useState([""]);

  // when the app loads we need to fetch list of tasks from database
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodo(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); // to stop refresh

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput([""]); // clear up input after submiting
  };

  return (
    <div className="App">
      <h1>Keep Your Notes Here 📝</h1>

      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></Input>
        </FormControl>

        <Button
          disabled={!input}
          onClick={addTodo}
          type="submit"
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
