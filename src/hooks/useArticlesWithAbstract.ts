import {useEffect, useState} from 'react';

import {Article as ArticleApi} from '@/src/apis';
import {Article} from '@/src/types';

export function useArticlesWithAbstract(): {
    loading: boolean;
    articlesWithAbstract: Article[] | null;
} {
    const [articlesWithAbstract, setArticlesWithAbstract] = useState<
        Article[] | null
    >(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        ArticleApi.getAllWithAbstract()
            .then((articlesWithAbstract) =>
                setArticlesWithAbstract(articlesWithAbstract),
            )
            .finally(() => setLoading(false));
    }, []);

    return {loading, articlesWithAbstract};
}
