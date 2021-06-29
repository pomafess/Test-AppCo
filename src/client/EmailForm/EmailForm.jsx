import React from 'react';
import Button from '../../shared/components/Button';
import FormInput from '../../shared/components/FormInput';
import { fields } from './fields';
import { initialState } from './initialState';
import useForm from '../../shared/hooks/useForm';

import s from './EmailForm.module.scss'


const EmailForm = () => {
    const onSubmit = () => { };
    const [data, , handleChange, handleSubmit] = useForm({initialState, onSubmit});
   
    return (
        <form className={s.formBox} onSubmit={handleSubmit}>
            <FormInput className={s.input} {...fields.email} value={data.email} onChange={handleChange} />
            <Button className={s.emailButton}>Subscribe</Button>
        </form>
    )
}

export default EmailForm;