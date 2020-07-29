import React from 'react';

export default function FormField({label,type, name,values ,onChange}) {
  return (
    <div>
      <label>
        {label}: 
        <input
          type={type} name={name} value={values} onChange={onChange}
        />
      </label>
    </div>
  )
}