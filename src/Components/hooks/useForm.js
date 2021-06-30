  
//import React from 'react'
import { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const reset = () => {
        console.log('RESET')
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset];
}