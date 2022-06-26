import dynamic from 'next/dynamic';

const ArticlePromise = import('@/src/components/Article').then(
    ({Article}) => Article,
);

const Article = dynamic(() => ArticlePromise, {ssr: false});

export default function ArticlePage() {
    return <Article />;
}
