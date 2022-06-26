import dynamic from 'next/dynamic';
const promise = import('./Container').then(({ArticleShower}) => ArticleShower);

export const ArticleShower = dynamic(() => promise, {ssr: false});
