import React from "react";
import { FormControl } from "../../validators/validators";
import s from './InputForm.module.css'

export const Input = (props: any) => {
    const {input, meta, child,label, ...restProps} = props
    return <FormControl {...props}>
        <label className={s.inputType}>
            <input {...input} {...restProps}/>
                <span>{props.placeholder}</span>
        </label>
    </FormControl>
}
