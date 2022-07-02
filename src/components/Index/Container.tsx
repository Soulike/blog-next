import Head from 'next/head';
import React from 'react';

import {IndexArticleList} from '@/src/components/IndexArticleList';
import {useArticlesWithAbstract} from '@/src/hooks/useArticlesWithAbstract';

export function Index() {
    const {loading, articlesWithAbstract} = useArticlesWithAbstract(null);

    return (
        <>
            <Head>
                <title>Soulike 的博客</title>
            </Head>
            <IndexArticleList
                articleList={articlesWithAbstract ?? []}
                loading={loading}
            />
        </>
    );
}
