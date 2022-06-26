import React from 'react';

const hljs = import('@/src/utils/hljs').then(({hljs}) => hljs);

export const HljsContext = React.createContext(hljs);