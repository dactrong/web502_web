import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ProductType } from '../types/ProductType'
import {useNavigate} from 'react-router-dom'
type ProductAddProps = {
    onAdd:(product:FormInputs) => void
}
type FormInputs = {
    name: string,
    price: number
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormInputs>()
    // sử dụng hook useNavigate để chuyển sang
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInputs>  = (dataInput) => {
        props.onAdd(dataInput);
        // chuyển trang
        navigate("/admin/products");
    }
    return (
        
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <h2>Thêm sản phẩm</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                <input type="text" className="form-control" id="name" {...register('name')} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Giá sản phẩm</label>
                <input type="number" className="form-control" id="price" {...register('price')} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" className="btn btn-primary">Thêm</button>
        </form>


    )
}

export default ProductAdd