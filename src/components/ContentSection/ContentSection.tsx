import { FC } from 'react';

import { Container, TextContainer, ImageContainer } from './ContentSection.styles';

import { SectionVariant } from '../../api';
import { MediaItem } from '../../api-schema';
import { replaceTags } from '../../helpers';
import { Button } from '../Button';
import { Headline } from '../Headline';

import { replaceImgSrcPath } from '@/helpers';

type ContentSectionProps = {
  headline?: string | null;
  headlineTag: 'h1' | 'h2';
  image?: MediaItem | null;
  link?: string | null;
  linkText?: string | null;
  subline?: string | null;
  text?: string | null;
  textAlignment?: string | null;
  variant: SectionVariant;
};

export const ContentSection: FC<ContentSectionProps> = ({ headline, headlineTag, image, link, linkText, subline, text, textAlignment, variant }) => (
  <Container hasPadding variant={variant}>
    {
      {
        'Content left, image right': (
          <>
            <TextContainer textAlignment={textAlignment || 'left'} variant={variant}>
              {subline ? <Headline tag='h5'>{subline}</Headline> : null}
              {headline ? <Headline tag={headlineTag}>{headline}</Headline> : null}
              {replaceTags(text)}
              {link && linkText ?<Button href={link} renderAs={'styledLink'}>{linkText}</Button> : null}
            </TextContainer>
            <ImageContainer>{image?.sourceUrl ? <img alt="" loading="lazy" src={replaceImgSrcPath(image.sourceUrl || undefined, process.env.NEXT_PUBLIC_MEDIA_URL)} /> : null}</ImageContainer>
          </>
        ),
        'Image left, content right': (
          <>
            <ImageContainer>{image?.sourceUrl ? <img alt="" loading="lazy" src={replaceImgSrcPath(image.sourceUrl || undefined, process.env.NEXT_PUBLIC_MEDIA_URL)} /> : null}</ImageContainer>
            <TextContainer textAlignment={textAlignment || 'left'} variant={variant}>
              {subline ? <Headline tag='h5'>{subline}</Headline> : null}
              {headline ? <Headline tag={headlineTag}>{headline}</Headline> : null}
              {replaceTags(text)}
              {link && linkText ?<Button href={link} renderAs={'styledLink'}>{linkText}</Button> : null}
            </TextContainer>
          </>
        ),
        'Text only': (
          <TextContainer textAlignment={textAlignment || 'left'} variant={variant}>
            {subline ? <Headline tag='h5'>{subline}</Headline> : null}
            {headline ? <Headline tag={headlineTag}>{headline}</Headline> : null}
            {replaceTags(text)}
            {link && linkText ?<Button href={link} renderAs={'styledLink'}>{linkText}</Button> : null}
          </TextContainer>
        ),
      }[variant]
    }
  </Container>
);
