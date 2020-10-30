import React from "react";
import {WrappedFieldProps} from "redux-form";
import './../../App.css'

export const FormControl = ({input, meta, child, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const required = (value: string) => {
    if (value) return undefined;
    return "Field is required"
}

export const MaxLengthCreator = (maxLength: any) => (value: any) =>
    value.length > maxLength ? `max length is ${maxLength} symbols` : undefined

// profileInfo validate
export const validate = (profileInfo: any) => {
    const errors: any = {}
    if (!profileInfo.fullName) {
        errors.fullName = "incorrect fullName"
    } else if (!profileInfo.aboutMe) {
        errors.aboutMe = "incorrect aboutMe"
    } else if (!profileInfo.lookingForAJobDescription) {
        errors.lookingForAJobDescription = 'lookingForAJobDescription'
    }
    return errors
}
export const InputForm = ({input, meta, ...props}: WrappedFieldProps) => {

    return (
        <div>
            <div>
       {/*          <span>
                     {meta.touched && meta.error
                         ? <span className={'inputColor'}>{meta.error}</span>
                         : ""}
            </span>*/}
            </div>
            <div>
                <input className={'inputForm'} {...input} {...props}/>
                {meta.error}
            </div>
        </div>
    )
}

