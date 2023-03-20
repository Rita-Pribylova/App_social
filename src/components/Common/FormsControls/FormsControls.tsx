import { FieldValidatorType } from '../../../utils/validators/validators';
import React from "react";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import styles from "./FormsControls.module.css";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    children: any
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: { touched, error }, children }) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')} >
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    return <FormControl {...props} > <textarea {...props.input} {...props} /></FormControl >
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    return <FormControl {...props} > <input {...props.input} {...props} /></FormControl >
}


export function createField<FormKeysType extends string>(placeholder: string | undefined,
    name: FormKeysType,
    validators: Array<FieldValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props = {}, text = "") {
    return <div>
        <Field placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props} />
        {text}
    </div>
}

export type GetStringKeys<T> = Extract <keyof T, string>
