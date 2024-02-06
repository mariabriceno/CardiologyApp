import React, { PropsWithChildren } from 'react';
import { SectionContainer, SectionDescription, SectionTitle } from './styles';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  return (
    <>
      <SectionContainer>
        <SectionTitle>
          {title}
        </SectionTitle>
        <SectionDescription>
          {children}
        </SectionDescription>
      </SectionContainer>
    </>
  );
}

export default Section;