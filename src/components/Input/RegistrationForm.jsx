import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Field from './Field';

const RegistrationForm = () =>
{
    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const submitForm = async ( formData ) =>
    {
        console.log( formData )

        try
        {
            console.log(formData)
        }
        catch ( error )
        {
            console.error( error );
            setError( "root.random", {
                type: "random",
                message: `user ${formData.email} not found!`
            } );
        }

        finally
        {
            navigate( "/login" );
        }
    };

    return (
        <form onSubmit={ handleSubmit( submitForm ) } className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
            <Field label={ "Name" } error={ errors.name }>
                <input
                    { ...register( 'name', { required: "must enter valid name" } ) }
                    className={ `auth-input ${errors.name ? "border-red-500" : "border-green-600"}` }
                    name="name"
                    type="name"
                    id="name"
                />
            </Field>
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
            <Field label={ "Retype password" } error={ errors.rePassword }>
                <input
                    { ...register( "rePassword", {
                        required: "retyping password is required",
                        minLength: {
                            value: 8,
                            message: "password didn't matched"
                        }
                    } ) }
                    className={ `auth-input ${errors.password ? "border-red-500" : "border-green-600"}` }
                    name="rePassword"
                    type="password"
                    id="rePassword"
                />
            </Field>
            {
                errors?.root && ( <div className="text-red-500 py-3">
                    { errors?.root?.random.message }
                </div> )
            }
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