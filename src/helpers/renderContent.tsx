import {
  Page as PageSchema,
  Page_Contentmodel_Content as Content,
  Page_Contentmodel_Content_Section as Section,
  Page_Teammodel as TeamModel
} from '../api-schema';

import { ContentSection, TeamSection } from '@/components';

export const renderContent = (pageData: PageSchema): JSX.Element | void => {
  if (!pageData?.contentModel?.content) {
    return;
  }

  const contentAccumulator: JSX.Element[] = [];

  pageData?.contentModel?.content?.map((content: Content | null, idx: number) => {
    const section: Section | null | undefined = content?.section;
    const variant = section?.variant;

    if (!variant) {
      return;
    }

    if (variant === 'Content left, image right') {
      contentAccumulator.push(
        <ContentSection
          headline={section.contentLeftImageRight?.headline}
          headlineTag={idx === 0 ? 'h1' : 'h2'}
          image={section.contentLeftImageRight?.image}
          key={content?.section?.variant}
          link={section.contentLeftImageRight?.link}
          linkText={section.contentLeftImageRight?.linkText}
          subline={section.contentLeftImageRight?.subline}
          text={section.contentLeftImageRight?.text}
          textAlignment={section.contentLeftImageRight?.textAlignment}
          variant={variant}
        />,
      );
    }

    if (variant === 'Image left, content right') {
      contentAccumulator.push(
        <ContentSection
          headline={section.imageLeftContentRight?.headline}
          headlineTag={idx === 0 ? 'h1' : 'h2'}
          image={section.imageLeftContentRight?.image}
          key={content?.section?.variant}
          link={section.imageLeftContentRight?.link}
          linkText={section.imageLeftContentRight?.linkText}
          subline={section.imageLeftContentRight?.subline}
          text={section.imageLeftContentRight?.text}
          textAlignment={section.imageLeftContentRight?.textAlignment}
          variant={variant}
        />,
      );
    }

    if (variant === 'Text only') {
      contentAccumulator.push(
        <ContentSection
          headline={section.textOnly?.headline}
          headlineTag={idx === 0 ? 'h1' : 'h2'}
          key={content?.section?.variant}
          link={section.textOnly?.link}
          linkText={section.textOnly?.linkText}
          subline={section.textOnly?.subline}
          text={section.textOnly?.text}
          textAlignment={section.textOnly?.textAlignment}
          variant={variant}
        />,
      );
    }
  });
  
  if (pageData.teamModel?.team !== null) {
    contentAccumulator.push(
      <TeamSection members={pageData?.teamModel as TeamModel} />
    );
  }

  return <>{contentAccumulator}</>;
};
