import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
// import SendMail from '../SendMail/SendMail'
import "./Form.css"


const Form = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data, e) => console.log(data, e)
  // const onSubmit = (data, e) => SendMail(data, e) - doesn't work, fail with error net module is missing
  const onError = (errors, e) => console.log(errors, e)
  
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className='form'>
        <input type="text" className='formInput' placeholder="What's your name?" {...register("name")}></input>
        <input type="text" className='formInput' placeholder="Your email" {...register("email")}></input>
        <input type="text" className='formInput' placeholder="Tell me about your project" {...register("projectDescription")}></input>
        <input type="submit" className='quoteBtn' value="Get A Quote"></input>    
    </form>
  )
}

export default Form