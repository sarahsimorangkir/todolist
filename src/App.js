import { useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from './stores/todolist';
import './App.css';
import {useState} from 'react';

function App() {
  const dispatch = useDispatch();
  const [todoList, setTodoList] = useState([])
  const [form, setForm] = useState ({
    todo:'',
    status : false
  })
//handle
  const handleChange = (e) =>{
    setForm({
      ...form,
      todo: e.target.value,
      status : false
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.index)
    if(form.index || form.index === 0){
      //update
      const newTodo = todoList.map((e, i)=>{
        if(i === form.index){
          return form
        }else{
          return e
        }
      })
      dispatch(addTodo(newTodo))
      setTodoList(newTodo)
    }else{
      setTodoList([
        ...todoList, 
        form
      ])
    }
      resetInput()
    
   
  }
  const resetInput = () => {
    setForm({
      todo : '',
      status : false
    })
  }

  const handleCheck = (index) => {
    const newTodo = todoList.map((e, i)=>{
      if(i === index){
        return{
          todo: e.todo,
          status: true
        }
      }else{
        return e
      }
    })
    setTodoList(newTodo)
    console.log(newTodo)
  }

  const handleDelete =(index) =>{
    const newTodo = todoList.filter((e, i)=>{
      if(i !== index){
        return e
      }
    })
   
    setTodoList(newTodo)
    dispatch(deleteTodo(newTodo))
    
  }

  const handleEdit = (index) => {
    const detailTodo = {
      index,
      ...todoList[index]
    }
    setForm(detailTodo)
  }
  return (
    <div>
      <div className="jumbotron">
        <h1>ToDo List App</h1>
        <form className="form" method="post" onSubmit={handleSubmit}>
          <input type = "text" name="todo" value={form.todo}  onChange={handleChange} placeholder="Add todo.."/>
          <button type = "submit" className ="btnSubmit">Submit</button>
        </form>
      </div>
      <div className="content">
        {/* {JSON.stringify(todoList)} */}
        {
          todoList.map((e, i) => (
            <div key={i} className="card">
          <div className="action">
            <input type ="checkbox" checked={e.status?true:false} onChange ={() => handleCheck(i)} />
          </div>
          <div className ="text">
            {e.todo}
          </div>
          <div className="btnAction">
              <button className="btnEdit" onClick={() => handleEdit(i)}>Edit</button>
              <button className="btnDelete" onClick={() => handleDelete(i)}>Delete</button>
          </div>
        </div>

          ))
        }
        

      </div>
    </div>

  );
}

export default App;