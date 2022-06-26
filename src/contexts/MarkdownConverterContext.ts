import React from 'react';

const markdownConverter = import('@/src/utils/markdownConverter').then(
    ({markdownConverter}) => markdownConverter,
);

export const MarkdownConverterContext = React.createContext(markdownConverter);
