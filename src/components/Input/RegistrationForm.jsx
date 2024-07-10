// import React from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Field from './Field';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        watch,
    } = useForm();

    const submitForm = async ( formData ) =>
    {
        try
        {
            if ( formData.password !== formData.rePassword )
            {
                setError( "rePassword", {
                    type: "manual",
                    message: "Passwords do not match"
                } );
                return;
            }
            console.log( formData );
            let response = await axios.post( `http://localhost:3000/auth/register`, formData );
            console.log(response)

            if ( response.status === 201 )
            {
                navigate( "/login" );  
            }
        } catch ( error )
        {
            console.error( error );
            setError( "root.random", {
                type: "random",
                message: `An unexpected error occurred. Please try again..${error.response.data.error || error.message}`
            } );
        }
    };

    const password = watch("password");

    return (
        <form onSubmit={handleSubmit(submitForm)} className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
            <Field label="First Name" error={errors.firstName}>
                <input
                    {...register('firstName', { required: "Must enter a valid name" })}
                    className={`auth-input ${errors.firstName ? "border-red-500" : "border-green-600"}`}
                    name="firstName"
                    type="text"
                    id="firstName"
                />
            </Field>
            <Field label="Last Name" error={errors.lastName}>
                <input
                    {...register('lastName', { required: "Must enter a valid name" })}
                    className={`auth-input ${errors.lastName ? "border-red-500" : "border-green-600"}`}
                    name="lastName"
                    type="text"
                    id="lastName"
                />
            </Field>
            <Field label="Email" error={errors.email}>
                <input
                    {...register('email', { required: "Must enter a valid email address" })}
                    className={`auth-input ${errors.email ? "border-red-500" : "border-green-600"}`}
                    name="email"
                    type="email"
                    id="email"
                />
            </Field>
            <Field label="Password" error={errors.password}>
                <input
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Must be 8 or more characters"
                        }
                    })}
                    className={`auth-input ${errors.password ? "border-red-500" : "border-green-600"}`}
                    name="password"
                    type="password"
                    id="password"
                />
            </Field>
            <Field label="Retype password" error={errors.rePassword}>
                <input
                    {...register("rePassword", {
                        required: "Retyping password is required",
                        validate: value => value === password || "Passwords do not match"
                    })}
                    className={`auth-input ${errors.rePassword ? "border-red-500" : "border-green-600"}`}
                    name="rePassword"
                    type="password"
                    id="rePassword"
                />
            </Field>
            {errors?.root && (
                <div className="text-red-500 py-3">
                    {errors?.root?.random.message}
                </div>
            )}
            <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90 mt-5"
                type="submit"
            >
                Register
            </button>
        </form>
    );
};

export default RegistrationForm;
