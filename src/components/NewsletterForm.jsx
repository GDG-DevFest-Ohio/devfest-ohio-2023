import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const NewsletterForm = () => {
  return (
    <MailchimpSubscribe url={process.env.NEXT_PUBLIC_MAILCHIMP_URL} />
  );
};

export default NewsletterForm;
