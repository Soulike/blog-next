import Head from 'next/head';
import {useRouter} from 'next/router';
import {useEffect, useMemo} from 'react';

import {useArticle} from '@/src/hooks/useArticle';
import {useCategory} from '@/src/hooks/useCategory';
import {useMarkdownConverter} from '@/src/hooks/useMarkdownConverter';
import {useSearchParam} from '@/src/hooks/useSearchParam';
import {Article as ArticleClass, Category} from '@/src/types';

import {ArticleView} from './View';

export function Article() {
    const router = useRouter();
    const emptyArticle = useMemo(
        () => new ArticleClass(0, '', '', 0, '', '', 0, true),
        [],
    );
    const emptyCategory = useMemo(() => new Category(0, ''), []);

    const [id] = useSearchParam('id');
    const articleId = Number.parseInt(id!);

    const {loading: articleIsLoading, article} = useArticle(articleId);

    useEffect(() => {
        if (!articleIsLoading && article === null) {
            router.replace('/404');
        }
    }, [article, articleIsLoading, router]);

    const {loading: htmlIsLoading, html: articleContentHtml} =
        useMarkdownConverter(article?.content);
    const {loading: categoryIsLoading, category} = useCategory(
        article?.category ?? NaN,
    );

    const loading = useMemo(
        () => articleIsLoading || categoryIsLoading || htmlIsLoading,
        [articleIsLoading, categoryIsLoading, htmlIsLoading],
    );
    const {title, publicationTime, modificationTime} = useMemo(
        () => article ?? emptyArticle,
        [article, emptyArticle],
    );
    return (
        <>
            <Head>
                {loading ? null : <title>{`${title} - Soulike 的博客`}</title>}
            </Head>
            <ArticleView
                title={title}
                contentHtml={articleContentHtml ?? ''}
                publicationTime={publicationTime}
                modificationTime={modificationTime}
                loading={loading}
                category={category ?? emptyCategory}
            />
        </>
    );
}
