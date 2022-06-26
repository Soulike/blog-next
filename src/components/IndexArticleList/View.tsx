import React from 'react';

import {Article} from '@/src/types';

import {ArticleList} from '../ArticleList';
import Style from './Style.module.scss';

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
