import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../features/auth/authSlice';

const SignUp = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const password = useWatch({ control, name: "password" })
    const confirmPassword = useWatch({ control, name: "confirmPassword" })
    const [disabled, setDisabled] = useState(true);

    const dispatch = useDispatch();


    useEffect(() => {
        if (password !== undefined &&
            password !== "" &&
            confirmPassword !== undefined &&
            confirmPassword !== "" &&
            password === confirmPassword
        ) {
            setDisabled(false)
        }
        else { setDisabled(true) }
    }, [password, confirmPassword])

    const onSubmit = (data) => {
        dispatch(createUser({ email: data.email, password: data.password }))
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-2xl'>
                <h2 className='text-xl text-center'>Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("name", {
                            required: "Name is required",
                        })} />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full max-w-xs" {...register("email", {
                            required: "Email is required"
                        })} />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password at least 6 characters or longer" },
                        })} />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Confirm Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("confirmPassword", {
                            required: "Password matching is required",
                            minLength: { value: 6, message: "Password at least 6 characters or longer" },
                        })} />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>

                    <input className='btn btn-accent my-3 w-full max-w-xs' value='Sign Up' type="submit" disabled={disabled} />
                </form>

                <p>Already have an account. Please <Link to='/login' className='text-secondary'>Login</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;