import Link from 'next/link';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Obfuscate from 'react-obfuscate';
import { UseMutationResult } from 'react-query';

import { Root, Form as StyledForm, Aside } from './Form.styles';

import { SocialMedia as SocialMediaTheme } from '../../theme';
import { Button } from '../Button';
import { Headline } from '../Headline';
import { Paragraph } from '../Paragraph';
import { Textarea } from '../Textarea';
import { Textfield } from '../Textfield';

export type Inputs = {
  absenden: string;
  email: string;
  message: string;
  name: string;
  subject: string;
};

const ERROR_MESSAGE = 'Dies ist ein Pflichtfeld!';

type FormProps = {
  mutationResults: UseMutationResult<void, unknown, Inputs, unknown>;
  onSubmit: SubmitHandler<Inputs>;
};

export const Form: FC<FormProps> = ({ mutationResults: { error, isError, isLoading, isSuccess }, onSubmit }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Inputs>();

  return (
    <Root>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {!isSuccess && (
          <>
            <Textfield
              errorMessage={errors.subject?.message}
              label="Betreff"
              {...register('subject', { required: ERROR_MESSAGE })}
            />
            <Textfield
              errorMessage={errors.name?.message}
              label="Name"
              {...register('name', { required: ERROR_MESSAGE })}
            />
            <Textfield
              errorMessage={errors.email?.message}
              label="E-Mail"
              {...register('email', { required: ERROR_MESSAGE })}
            />
            <Textarea
              errorMessage={errors.message?.message}
              label="Nachricht"
              {...register('message', { required: ERROR_MESSAGE })}
            />
            <input type="hidden" {...register('absenden')} />

            <Button state={isLoading ? 'loading' : 'default'} type="submit">
              Senden
            </Button>
          </>
        )}
        {isError ? <Paragraph>{Boolean(error) ? `${error}` : null}</Paragraph> : null}
        {isSuccess ? <Headline tag="h3">Danke für Ihre Anfrage!</Headline> : null}
      </StyledForm>
      <Aside>
        <Headline tag="h3">So erreichen Sie uns:</Headline>
        <Paragraph>
          <b>Mo. - Fr.:</b> 8 - 17 Uhr
        </Paragraph>
        <Paragraph>
          <b>Telefon:&nbsp;</b>
          <Obfuscate tel="0412282814">04122/82814</Obfuscate><br />
          <b>Fax:</b> 04122/810461
        </Paragraph>
        <Paragraph>
          <b>E-Mail:&nbsp;</b>
          <Obfuscate email="sb@mohr-bauunternehmung.de">sb@mohr-bauunternehmung.de</Obfuscate>
        </Paragraph>
        <Paragraph>
        <b>{SocialMediaTheme.Facebook ? <Link href={SocialMediaTheme.Facebook} target='_blank'>Facebook</Link> : null}<br />
          {SocialMediaTheme.Instagram ? <Link href={SocialMediaTheme.Instagram} target='_blank'>Instagram</Link> : null}</b>
        </Paragraph>
      </Aside>
    </Root>
  );
};
