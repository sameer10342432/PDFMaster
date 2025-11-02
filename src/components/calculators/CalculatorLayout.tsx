import React from 'react';

export const CalculatorLayout = ({ children, content }: { children?: React.ReactNode, content?: any }) => {
  return (
    <div>
      <h1>{content?.title}</h1>
      <p>{content?.description}</p>
      <div>{React.cloneElement(children as React.ReactElement, { calculator: content.calculator })}</div>
      {content?.article && (
        <article>
          <h2>{content.article.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content.article.content }} />
        </article>
      )}
    </div>
  );
};