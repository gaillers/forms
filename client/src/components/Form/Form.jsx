import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import Inputs from "./Inputs";

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

    console.log(errors);

    return (
        <FormWrap>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormHeader>
                    {Inputs.map((item) => {
                        return (
                            <div key={item.id}  className="input_wrap">
                                <Label htmlFor={item.label}>{item.label}</Label>
                                <Input {...register(
                                    `${item.name}`, {
                                      required: 'Require fields'
                                    })} 
                                    type={item.type} placeholder={item.placeholder} />
                            </div>
                        )
                    })}
                </FormHeader>
                <FormFooter>
                    <InputSubmit type="submit" value="Submit" />
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

const Label = styled.label({
    marginBottom: '8px',
})

const Input = styled.input({
    outline: 'none',
    fontSize: '16px',
    padding: '14px 12px',
    borderRadius: '8px',
});

const InputSubmit = styled.input({
    maxWidth: '180px',
    padding: '12px',
    width: '100%',
    fontSize: '16px',
    background: '#ec5990',
    color: '#fff',
    borderRadius: '8px',
    cursor: 'pointer',
})
