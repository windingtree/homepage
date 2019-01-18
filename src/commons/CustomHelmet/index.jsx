// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

type PropsType = {
  title?: string,
  description?: string,
  keywords?: string
};

function CustomHelmet({ title, description, keywords }: PropsType) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
}

export default CustomHelmet;
