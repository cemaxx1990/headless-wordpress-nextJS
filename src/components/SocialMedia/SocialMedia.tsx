import Link from 'next/link';
import { FC } from 'react';

import { Root } from './SocialMedia.styles';

import { SocialMedia as SocialMediaTheme } from '../../theme';

export const SocialMedia: FC = () => (
  <Root>
    {SocialMediaTheme.Facebook ? <Link href={SocialMediaTheme.Facebook} target='_blank'>Facebook</Link> : null}
    {SocialMediaTheme.Instagram ? <Link href={SocialMediaTheme.Instagram} target='_blank'>Instagram</Link> : null}
  </Root>
);
