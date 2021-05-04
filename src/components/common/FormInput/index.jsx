import React, { Component } from 'react';
import {  Field, ErrorMessage } from 'formik';
import cx from 'classnames';

export default class FormInput extends Component {
    render() {
        const { name, type, placeholder, id, conditionalClass, labelText, required, className, disabled } = this.props
        return (
            <div className={cx("form-group", className)}>
                {
                    labelText ? <label>{labelText} {required ? <sup>*</sup> : null}</label> : null
                }
                <Field
                    name={name}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className={cx("form-control", conditionalClass)}
                    disabled={disabled}
                />
                <ErrorMessage
                    name={name}
                    component="span"
                    className="error-message"
                />
            </div>
        )
    }
}