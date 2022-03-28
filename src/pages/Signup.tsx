import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { create } from '../api/auth'
import { UserType } from '../types/ProductType'

type Props = {}
type FormInputs = {
    name: String,
    email: String,
    password: String
}

const Signup = (props: Props) => {
       
    const [signup, setSignup] = useState<UserType[]>([])

 
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        useEffect(() => {
            const getSignup = async () => {
                const { data } = await create(signup);
                setSignup([...signup, data]);
            }
            getSignup()
        
          }, []);
        
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <h2>Thêm sản phẩm</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Username</label>
                <input type="text" className="form-control" id="name" {...register('name', { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="price" {...register('email')} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" {...register('password')} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" className="btn btn-primary">Thêm</button>
        </form>
    )
}

export default Signup