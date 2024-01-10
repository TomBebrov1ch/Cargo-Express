import React from 'react';
import { useForm } from 'react-hook-form';

import '../Form/style.scss'

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <form className='form' onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <p className='form__text'>Ваше имя*</p>
            <input
                placeholder='Иван Иванов'
                className='form__input'
                {...register("name", {
                    minLength: {
                        value: 1,
                        message: 'Имя должно быть длиннее одного символа'
                    }
                })}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <p className='form__text'>Ваша почта*</p>
            <input
                placeholder='example@gmail.com'
                className='form__input'
                {...register("email", {
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Введите корректный email адрес',
                    },
                })}
            />
            {errors.email && <p className='form__error'>{errors.email.message}</p>}

            <button className='form__button' type="submit">Отправить</button>
        </form>
    );
};

export default Form;