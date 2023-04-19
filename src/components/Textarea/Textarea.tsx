import { ChangeEventHandler, DetailedHTMLProps, forwardRef, TextareaHTMLAttributes, useState } from 'react';

import { Root, Textarea as StyledTextarea } from './Textarea.styles';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label/Label';

type HTMLTextareaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export type TextareaProps = HTMLTextareaProps & { errorMessage?: string; label?: string };

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ errorMessage, label, onChange, ...props }, ref) => {
    const [value, setValue] = useState('');

    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      setValue(event.target.value);

      onChange?.(event);
    };

    return (
      <>
        <Root error={Boolean(errorMessage)}>
          {label ? <Label filled={Boolean(value)}>{label}</Label> : null}
          <StyledTextarea {...props} as="textarea" onChange={handleChange} ref={ref} />
        </Root>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    );
  },
);
