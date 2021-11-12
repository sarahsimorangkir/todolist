import { createSlice } from "@reduxjs/toolkit";

const listDef = [
    {id : 1, name : "Makan", status : false },
    {id : 2, name : "Minum", status : true},
    {id : 3, name : "Halu", status : true},
];

export const todoSlice = createSlice({
    name : "mytodolist",
    initialState : {
        todos : listDef,
    },
    reducers : {
        addTodo : (state, action) => {
            state.todos.push(action.payload)
        },
        updateTodo : (state, action) => {
            const newTodos = state.todos.map((v) =>{
                if (v.id === action.payload){
                    v.status = !v.status;
                }
                return v;
            });
            this.state.todos = newTodos;
        },
        deleteTodo: (state, action) => {
            const newTodos = state.todos.filter((v) => {
              if (v.id !== action.payload) {
                return true;
              }
              return false;
            });
            state.todos = newTodos;
          },
        
        
    },
});



export const {addTodo, updateTodo, deleteTodo} =todoSlice.actions;
export default todoSlice.reducer;