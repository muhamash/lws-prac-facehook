/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Field from './Field';

export default function LoginForm ()
{
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();
    
    const submitForm = ( formData ) =>
    {
        navigate('/')
        console.log( formData );
    };

    return (
        <form onSubmit={ handleSubmit( submitForm ) } className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
            <Field label={ "Email" } error={ errors.email }>
                <input
                    { ...register( 'email', { required: "must enter valid email address" } ) }
                    className={ `auth-input ${errors.email ? "border-red-500" : "border-green-600"}` }
                    name="email"
                    type="email"
                    id="email"
                />
            </Field>
            <Field label={ "Password" } error={ errors.password }>
                <input
                    { ...register( "password", {
                        required: "password is required",
                        minLength: {
                            value: 8,
                            message: "must 8 or more char!!"
                        }
                    } ) }
                    className={ `auth-input ${errors.password ? "border-red-500" : "border-green-600"}` }
                    name="password"
                    type="password"
                    id="password"
                />
            </Field>
            {
                errors.root && ( <div className="text-red-500 py-3">
                    { errors?.root?.random.message }
                </div> )
            }
            <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90 mt-5"
                type="submit"
              >
                Login
              </button>
        </form>
    );
}
