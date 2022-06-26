import dynamic from 'next/dynamic';
import React from 'react';

import {Article} from '@/src/types';

import Style from './Style.module.scss';

const ArticleListPromise = import('@/src/components/ArticleList').then(
    ({ArticleList}) => ArticleList,
);

const ArticleList = dynamic(() => ArticleListPromise, {ssr: false});

interface Props {
    loading: boolean;
    articleList: Array<Article>;
}

export function IndexArticleList(props: Props) {
    const {loading, articleList} = props;
    return (
        <div className={Style.IndexArticleList}>
            <ArticleList loading={loading} articleList={articleList} />
        </div>
    );
}
