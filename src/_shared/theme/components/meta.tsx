import React from 'react';
import MetaTags from 'react-meta-tags';

type Props = {
  title?: string;
  description?: string;
  ogImage?: string;
};

const Meta = ({ title, description, ogImage }: Props) => {
  return (
    <MetaTags>
      {title && <title>{title}</title>}
      {description && <title>{description}</title>}
      {ogImage && <meta property="og:image" content={ogImage} />}
    </MetaTags>
  );
};

export default Meta;
