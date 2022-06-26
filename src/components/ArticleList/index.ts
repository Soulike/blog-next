import dynamic from 'next/dynamic';

const promise = import('./Container').then(({ArticleList}) => ArticleList);

export const ArticleList = dynamic(() => promise, {ssr: false});
