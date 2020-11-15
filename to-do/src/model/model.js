
 import { action, thunk } from "easy-peasy";
 import uuid from "uuid";
 
 export default {
   todos: [],
   images: [],
   // Thunks
   fetchTodos: thunk(async actions => {
     const res = await fetch(
       "https://jsonplaceholder.typicode.com/todos?_limit=5"
     );
     const todos = await res.json();
     actions.setTodos(todos);
   }),
   
   fetchImages: thunk(async actions => {
     console.log("hello1");
     const res = await fetch(
       "http://localhost:8080/getimages",
       {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": "*"
        }
     });
     if (!res.ok) {
       const message = `An error has occured: ${res.status}`;
       throw new Error(message);
     }
     const images = await res.json();
     console.log("hello2");
     actions.setImages(images);
   }),   
   // Actions
   setTodos: action((state, todos) => {
     state.todos = todos;
   }),
   add: action((state, todo) => {
     todo.id = uuid.v4();
     state.todos = [...state.todos, todo];
   }),
   setImages: action((state, images) => {
    state.images = images;
  }),
  addImages: action((state, image) => {
    state.images = [...state.images, image];
  }),


   toggle: action((state, id) => {
     state.todos.map(todo => {
       if (todo.id === id) {
         todo.completed = !todo.completed;
       }
       return todo;
     });
   }),
   remove: action((state, id) => {
     state.todos = state.todos.filter(todo => todo.id !== id);
   })
 };
 