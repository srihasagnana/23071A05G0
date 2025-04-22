import 'bootstrap/dist/css/bootstrap.min.css'; 
import {useForm} from 'react-hook-form' 
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Register() {
    const {register,handleSubmit}=useForm()
    const navigate=useNavigate()
    async function handleRegister(e){
        await axios.post('http://localhost:3490/users',e)
        navigate('../login')
    }
  return (
    <div>
        <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(handleRegister)}>
        <h3>Registration</h3>
            <div>
                <label className='form-label mt-4'>roll no:</label>
                <input type='text' {...register('rollno')} className='form-control'></input>
            </div>
            <div>
                <label className='form-label mt-4'>password:</label>
                <input type='password' {...register('password')}  className='form-control'></input>
            </div>
            <div>
                <label className='form-label mt-4'>mentor name:</label>
                <input type='text' {...register('mentor')} className='form-control'></input>
            </div>
            <div>
                <label className='form-label mt-4'>email:</label>
                <input type='email' {...register('email')}  className='form-control'></input>
            </div>
            <button className='btn btn-primary mt-3'>Register</button>
        </form>
    </div>
  )
}

export default Register