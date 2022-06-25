import {Empty, List} from 'antd';
import React from 'react';

import {Article, Category} from '@/src/types';

import {ArticlePreviewCard} from './Component/ArticlePreviewCard';
import {getFirstSentenceFromMarkdown} from './Function';
import Style from './Style.module.scss';

const {Item} = List;

interface Props {
    onPageNumberChange: (_page: number) => void;
    articleList: Array<Article>;
    categoryMap: Map<number, Category>;
    loading: boolean;
}

export function ArticleListView(props: Props) {
    const {onPageNumberChange, articleList, categoryMap, loading} = props;
    const ref = React.createRef<HTMLDivElement>();
    return (
        <div className={Style.ArticleList} ref={ref}>
            <List
                loading={loading}
                dataSource={articleList}
                split={false}
                locale={{
                    emptyText: <Empty description={'暂无文章'} />,
                }}
                pagination={{
                    pageSize: 10,
                    showSizeChanger: false,
                    position: 'bottom',
                    hideOnSinglePage: true,
                    onChange: (page) => {
                        onPageNumberChange(page);
                        if (ref.current !== null) {
                            ref.current.scrollTo({
                                top: 0,
                            });
                        }
                    },
                }}
                renderItem={(article) => {
                    const {
                        id,
                        title,
                        content,
                        category: categoryId,
                        publicationTime,
                        pageViews,
                    } = article;
                    const text = getFirstSentenceFromMarkdown(content);
                    const time = new Date(publicationTime);
                    const category = categoryMap.get(categoryId);

                    return (
                        <Item key={id}>
                            <ArticlePreviewCard
                                articleId={id}
                                articleTitle={title}
                                articleTime={time}
                                articleCategory={category}
                                articleViewAmount={pageViews}
                                articleBriefText={text}
                            />
                        </Item>
                    );
                }}></List>
        </div>
    );
}