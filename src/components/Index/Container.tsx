import Head from 'next/head';
import React, {useEffect, useState} from 'react';

import {Article as ArticleApi} from '@/src/apis';
import {IndexArticleList} from '@/src/components/IndexArticleList';
import {Article} from '@/src/types';

export function Index() {
    const [articleList, setArticleList] = useState([] as Article[]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        ArticleApi.getAllWithAbstract()
            .then((articleList) => {
                if (articleList) {
                    setArticleList(articleList);
                }
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <Head>
                <title>Soulike 的博客</title>
            </Head>
            <IndexArticleList articleList={articleList} loading={loading} />
        </>
    );
}
