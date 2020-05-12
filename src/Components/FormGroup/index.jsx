import React from 'react';
import Form from 'react-bootstrap/Form';

const FormGroup = ({
  classname, length, placeholder, type, label, as, rows, onChange, name, required, value, disabled,
}) => (
  <>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label className={classname}>{label}</Form.Label>
      <Form.Control
        required={required}
        as={as}
        rows={rows}
        onChange={onChange}
        type={type}
        maxLength={length}
        placeholder={placeholder}
        name={name}
        value={value}
        disabled={disabled}
      />
    </Form.Group>
  </>
);

export default FormGroup;
