import React, {useState} from 'react'

const initialState = {
    username: '',
    email: ''
}

function Form() {
  const [formData, setFormData] = useState(initialState)

  const onChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }
//   const onChange = (event) => {
//     setFormData({...formData, title: event.target.value})
//   }

  const postData = async () => {
        const response = await fetch(`https://fakestoreapi.com/users`, { //initiator
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        console.log(data)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(`submit`, formData)
    postData(); // initiator
    setFormData(initialState)
}
  return (
    <div>
        {/* {console.log(formData)} */}
        <h2>Create User</h2>
        <form onSubmit={(onSubmit)}>
           
           
           <div>
                <input 
                    type='text'
                    placeholder='Enter your username'
                    name='username'
                    value={formData.username}
                    onChange={onChange}
                />
           </div>
           <div>
                <input 
                    type='text'
                    placeholder='Enter your email'
                    name='email'
                    value={formData.email}
                    onChange={onChange}
                />
           </div>
           <input type='submit'/>
           
            {/* <input 
                type='text'
                placeholder='Enter Title'
                name='title'
                
            /> */}
        </form>
    </div>
  )
}

export default Form