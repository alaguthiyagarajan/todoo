
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'
import TodoList from './TodoList';
import TodoForm from './Todoform';

function App() {
const [todos, setTodos] = useState([]);
const [history, setHistory] = useState([]); 
  const fetchTodos=async ()=>{
    const res = await axios.get('https://todoo-backend-dbm0.onrender.com/api/todos');
    setTodos(res.data);
  };
  useEffect(()=>{
    fetchTodos();
  },[]);

 const addTodo = async (text) => {
  try {
    const res = await axios.post('https://todoo-backend-dbm0.onrender.com/api/todos', { text });
    setTodos([...todos, res.data]);
    alert('Todo added');
  } catch (error) {
    console.error(error);
    alert('Please wait a moment');
  }
};


  const toggleComplete=async (id, completed)=>{
    const res=await axios.put(`https://todoo-backend-dbm0.onrender.com/api/todos/${id}`, { completed: !completed });
    setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
  };
  const updateTodo = async (id, newText) => {
    try {
      const res = await axios.put(`https://todoo-backend-dbm0.onrender.com/api/todos/${id}`, {
        text: newText,
      });
      setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
      alert('Edited');
    } catch (err) {
      console.error('Failed to update todo:', err);
    }
  };
  
const markComplete = async (id, completed) => {
  try {
    const res = await axios.put(`https://todoo-backend-dbm0.onrender.com/api/todos/${id}`, {
      completed: true,
    });
    setTodos(todos.filter((todo) => todo._id !== id));
    setHistory([...history, res.data]);
  } catch (err) {
    console.error(err);
  }
};

  

  return (
    <div className="container">
      <h1>MERN ToDo APP</h1>
      <TodoForm addTodo={addTodo} />
     <TodoList
  todos={todos}
  toggleComplete={toggleComplete}
  updateTodo={updateTodo}
  markComplete={markComplete}
/>

    </div>
  );
  
}

export default App;
