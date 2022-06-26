import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';

import {Article as ArticleApi} from '@/src/apis';
import {IndexArticleList} from '@/src/components/IndexArticleList';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '@/src/config/route';
import {Article} from '@/src/types';

export function Category() {
    const [articleList, setArticleList] = useState([] as Article[]);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const getArticleList = async (categoryId: number) =>
            await ArticleApi.getByCategoryWithAbstract(categoryId);

        setLoading(true);
        if (router.isReady) {
            const idString = router.query.id;
            let id = NaN;
            if (typeof idString === 'string') {
                id = Number.parseInt(idString);
            }

            if (Number.isNaN(id)) {
                router.replace(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
                return;
            }

            getArticleList(id)
                .then((articleList) => {
                    if (articleList) {
                        setArticleList(articleList);
                    }
                })
                .finally(() => setLoading(false));
        }
    }, [router]);

    return <IndexArticleList articleList={articleList} loading={loading} />;
}
