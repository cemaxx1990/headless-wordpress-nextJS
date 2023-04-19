import { FC } from 'react';

import { Root, Name, Position, Image } from './TeamMember.styles';

import { Page_Teammodel_Team_Section } from '../../api-schema';

type TeamMemberProps = Pick<Page_Teammodel_Team_Section, 'image' | 'name' | 'position'>;

export const TeamMember: FC<TeamMemberProps> = ({ name, position }) => (
  <Root>
    <Image></Image>
    <Name>{name}</Name>
    <Position>{position}</Position>
  </Root>
);
