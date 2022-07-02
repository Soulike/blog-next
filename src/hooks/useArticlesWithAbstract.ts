import {useEffect, useState} from 'react';

import {Article as ArticleApi} from '@/src/apis';
import {Article} from '@/src/types';

export function useArticlesWithAbstract(
    categoryId: number | null | undefined,
): {
    loading: boolean;
    articlesWithAbstract: Article[] | null;
} {
    const [articlesWithAbstract, setArticlesWithAbstract] = useState<
        Article[] | null
    >(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setArticlesWithAbstract(null);
        if (categoryId === undefined) {
            return;
        }

        const promise =
            categoryId === null
                ? ArticleApi.getAllWithAbstract()
                : ArticleApi.getByCategoryWithAbstract(categoryId);

        promise
            .then((articlesWithAbstract) =>
                setArticlesWithAbstract(articlesWithAbstract),
            )
            .finally(() => setLoading(false));
    }, [categoryId]);

    return {loading, articlesWithAbstract};
}
