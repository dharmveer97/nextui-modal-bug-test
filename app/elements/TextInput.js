import React from 'react';
import { Input } from '@nextui-org/react';

function InputGroup({ className, label, error, required, disabled, ...props }) {
  return (
    <div className={`w-full ${disabled ? 'cursor-not-allowed' : ''}`}>
      <Input
        {...props}
        className={`${className}`}
        isDisabled={disabled}
        size="lg"
        radius="lg"
        width={100}
        fullWidth
        errorMessage={error}
        isInvalid={error}
        label={label}
        variant="bordered"
        isRequired={required}
      />
    </div>
  );
}
export default InputGroup;
