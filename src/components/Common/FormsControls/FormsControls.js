import React from "react";
import { Field } from "redux-form";
import styles from "./FormsControls.module.css";


const FormControl = ({ input, meta: { touched, error }, children }) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {children}
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input} {...props} /></FormControl>
}
export const Input = (props) => {
    return <FormControl {...props}><input {...props.input} {...props} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props} />
        {text}
    </div>
)

