import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../features/auth/authSlice';

const Login = () => {
    const { isLoading, email, error } = useSelector((state) => state.auth)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = ({ email, password }) => {
        dispatch(loginUser({ email, password }))
    }

    useEffect(() => {
      if(!isLoading && email){
          navigate('/')
      }
    }, [isLoading, email])
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-2xl'>
                <h2 className='text-xl font-semibold text-center'>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email",
                                { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }

                                })} />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent my-3 w-full max-w-xs' value='Login' type="submit" />
                    <div>
                        {error}
                    </div>
                </form>
                <p>New to here?  <Link to='/signup' className='text-secondary'>Create new account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;