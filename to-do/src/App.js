import React from "react";
import model from "./model/model";
import { StoreProvider, createStore } from "easy-peasy";
import { ButtonAppBar } from "./components/ButtonAppBar"
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import AddImages from "./components/AddImages";
import DisplayImages from "./components/DisplayImages";
import "./App.css";
import { AddToQueueOutlined, AddToQueueRounded } from "@material-ui/icons";


const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="container">
        <ButtonAppBar />
        <AddImages />
        <DisplayImages />
      </div>
    </StoreProvider>
  );
}

export default App;

