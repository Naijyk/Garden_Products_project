import React, { useEffect } from 'react';
import s from './index.module.css';
import form_image from './form_image.png';
import { useForm } from 'react-hook-form';
import { addDiscountUser } from '../../requests/saleForm';

export default function SaleForm() {

    const { register, handleSubmit, reset, formState: { errors, isDirty, isSubmitting }, watch } = useForm({
        mode: 'onChange',
     });

    const onSubmit = ( data ) => {

        // addDiscountUser(data);
        console.log(data);

        reset();
    }

    useEffect(() => {
        const subscription = watch((value, { name, type }) => console.log(value, name, type)
        )
        return () => subscription.unsubscribe()
    }, [watch]);


  return (
    <div className={[s.sale_form_component, 'wrapper'].join(' ')}>
        <h1>5% off on the first order</h1>
        <div className={s.sale_form_component_content}>
            <img src={form_image} alt="form_image" />
            <form className={s.sale_form}
                  onSubmit={handleSubmit(onSubmit)} >
                <input type="text"
                       placeholder='Name'
                       {...register('username', {
                        required: 'Name is require field!'
                       })} />
                       {errors?.username && <span className={s.errors}>{errors.username?.message}</span>}

                <input type="number"
                       placeholder='Phone number'
                       {...register('tel', {
                        required: 'Phone number is require field!',
                       })} />
                       {errors?.tel && <span className={s.errors}>{errors.tel?.message}</span>}
                <input type="email"
                       placeholder='Email'
                       {...register('email', {
                        required: 'Email is require field!',
                        pattern: {
                            value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
                            message: 'Please enter valid email!'
                        }
                       })} />
                       {errors?.email && <span className={s.errors}>{errors.email?.message}</span>}
                <button disabled={!isDirty || isSubmitting}>Get a discount</button>
            </form>
        </div>
    </div>
  )
}
