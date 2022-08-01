import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const Form = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {

        }
    });

    const onSubmit = data => {
        alert(JSON.stringify(data));
        console.log(data)
        reset()
    }

    return (
        <FormWrap>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormHeader>
                    <input {...register('firstName', { required: true })} type="text" placeholder="First Name" />
                    <input {...register('lastName', { required: true })} type="text" placeholder="Last Name" />
                    <input {...register('Email', { required: true })} type="email" placeholder="Email" />
                    <input {...register("Age", { min: 0, max: 100 })} type="number" placeholder="Age" />
                    <input {...register('Phone', { required: true, })} type="tel" placeholder="Phone" />
                    <textarea {...register('Message')} type="text" placeholder="Message" />
                </FormHeader>
                <FormFooter>
                    <InputSubmit type="submit" value="Отправить" />
                </FormFooter>
            </form>
        </FormWrap >
    )
};

export default Form;

const FormWrap = styled.div({
    maxWidth: '600px',
    width: '100%',
})

const FormHeader = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '28px'
})

const FormFooter = styled.div({
    display: 'flex',
    justifyContent: 'center'
})

const InputSubmit = styled.input({
    maxWidth: '180px',
    width: '100%',
})
