import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/product'
import { ProductType } from '../types/ProductType'

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}

type FormInputs = {
    name: string,
    price: number,
    category: any
}

const ProductEdit = (props: ProductEditProps) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id)
            reset(data);

        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data);
        navigate("/admin/products")
    }


    return (

        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <h2>Sửa</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                    <input type="text" className="form-control" id="name" {...register('name', { required: true })} />
                    {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Giá sản phẩm</label>
                    <input type="number" className="form-control" id="price" {...register('price')} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Danh muc</label>
                    <input type="text" className="form-control" id="category" {...register('category')} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>)
}

export default ProductEdit