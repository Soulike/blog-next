import {useRouter} from 'next/router';
import React, {useMemo} from 'react';

import {IndexArticleList} from '@/src/components/IndexArticleList';
import {useArticlesWithAbstract} from '@/src/hooks/useArticlesWithAbstract';

export function Category() {
    const router = useRouter();

    const categoryId = useMemo(() => {
        if (router.isReady) {
            const {id} = router.query;
            if (typeof id === 'string') {
                return Number.parseInt(id);
            }
        }
    }, [router.isReady, router.query]);

    const {loading, articlesWithAbstract} = useArticlesWithAbstract(categoryId);

    return (
        <IndexArticleList
            articleList={articlesWithAbstract ?? []}
            loading={loading}
        />
    );
}
