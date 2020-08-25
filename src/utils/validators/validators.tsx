import React from "react";

const FormControl = ({input, meta, child, ...props}: any) => {
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
export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const required = (value: string) => {
    if (value) return undefined;
    return "Field is required"
}

export const MaxLengthCreator = (maxLength: any) => (value: any) =>
    value.length > maxLength ? `max length is ${maxLength} symbols` : undefined

