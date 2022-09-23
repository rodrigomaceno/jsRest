import React, {useState} from 'react'

const initialState = {
    id: '',
    username: '',
    email: ''
}

function UpdateForm() {
  const [formData, setFormData] = useState(initialState)

  const onChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }


  const updateData = async () => {
        fetch('https://fakestoreapi.com/users/7',{
          method:"PUT",
          body:JSON.stringify(
              {
              email:'John@gmail.com',
              username:'johnd',
              password:'m38rmF$',
              name:{
                  firstname:'John',
                  lastname:'Doe'
              },
              address:{
                  city:'kilcoole',
                  street:'7835 new road',
                  number:3,
                  zipcode:'12926-3874',
                  geolocation:{
                      lat:'-37.3159',
                      long:'81.1496'
                  }
              },
              phone:'1-570-236-7033'
              }
          )
      })
          .then(res=>res.json())
          .then(json=>console.log(json))
  }

  const onSubmit = (event) => {
    event.preventDefault();
    updateData(); // initiator
    setFormData(initialState)
}
  return (
    <div>
        <h2>Update User</h2>
        <form onSubmit={(onSubmit)}>
           <div>
                <input 
                    type='text'
                    placeholder='Enter ID'
                    name='id'
                    value={formData.id}
                    onChange={onChange}
                />
           </div>
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
        </form>
    </div>
  )
}

export default UpdateForm