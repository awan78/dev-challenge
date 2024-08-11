import React from 'react';
import DOMPurify from 'dompurify';

export const RenderHtml = ({data}) => {
  return (
    <div>
    {data.map((item) => {  
      const sanitizedContent = DOMPurify.sanitize(item.message);
      return (
        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      )
    })}
  </div>
  )
};