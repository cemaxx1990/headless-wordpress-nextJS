import { ChangeEventHandler, DetailedHTMLProps, forwardRef, InputHTMLAttributes, useState } from 'react';

import { Root, TextField as StyledTextField } from './Textfield.styles';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label/Label';

type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type TextfieldProps = HTMLInputProps & { errorMessage?: string; label?: string };

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  ({ errorMessage, label, onChange, ...props }, ref) => {
    const [value, setValue] = useState('');

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      setValue(event.target.value);

      onChange?.(event);
    };

    return (
      <>
        <Root error={Boolean(errorMessage)}>
          {label ? <Label filled={Boolean(value)}>{label}</Label> : null}
          <StyledTextField {...props} onChange={handleChange} ref={ref} type="text" />
        </Root>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    );
  },
);
