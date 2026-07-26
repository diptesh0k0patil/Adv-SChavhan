import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonicalUrl, ogType = 'website', ogImage }) {
  const defaultTitle = 'Advocate Shankar Chavan | High Court of Bombay | Premium Legal Services';
  const defaultDescription = 'Professional legal services, consultation & representation by Adv. Shankar Chavan at Bombay High Court. Specializing in Criminal Defense, Civil Litigation, Corporate Law, and Family Disputes.';
  const siteUrl = 'https://shankarchavan.in';
  const defaultImage = `${siteUrl}/og-image.jpg`;

  const metaTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const metaDescription = description || defaultDescription;
  const currentUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const metaImage = ogImage || defaultImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
}
