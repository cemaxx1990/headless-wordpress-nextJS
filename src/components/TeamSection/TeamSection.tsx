import { FC } from 'react';

import { Container } from './TeamSection.styles';

import { Page_Teammodel as TeamModel, Page_Teammodel_Team as Team } from '../../api-schema';
import { TeamMember } from '../TeamMember';

type TeamProps = {
  members: TeamModel;
};

export const TeamSection: FC<TeamProps> = ({ members }) => (
  <Container hasPadding>
    {members?.team?.map((member: Team | null, idx: number) => (
      <TeamMember
        key={`${member?.section?.name}-${idx}`}
        name={member?.section?.name || ''}
        position={member?.section?.position || ''}
      />
    ))}
  </Container>
);
