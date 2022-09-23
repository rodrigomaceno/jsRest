import { useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form';
import UpdateForm from './components/UpdateForm';

function App() {
 
  // GET START
  const [users, setState] = useState([])

  const fetchUsers = async () => {
    const response = await fetch('https://fakestoreapi.com/users')
    const data = await response.json()
    setState(data)
  }

  const deleteUser = async (id) =>{
    const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
      method: 'DELETE'
    })
    console.log(response)
  }

  useEffect(() =>{
    fetchUsers()
  }, [])

  return (
    <div className="App">
      <Form/>
      <UpdateForm/>
      {users.map(element => <p key={element.id} onClick={() => deleteUser(element.id)}>{element.username}</p>)}
    </div>
  );
}

export default App;
