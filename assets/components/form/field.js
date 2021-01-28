import React from 'react';

const field = ({value, onChange,type = 'text', placeholder,name}) => {
    return ( 
    <div className="form-group">
        <label htmlFor={name}>{placeholder}</label>
        <input 
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            name={name}
            id={name}
            className="form-control"
            // className={"form-control" + (error && " is-invalid")}
        />
        {/* {error && <p className="invalid-feedback">{error}</p>} */}
    </div> 
    );
}
 
export default field;