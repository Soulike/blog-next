import {ClockCircleOutlined, EyeOutlined, TagsOutlined} from '@ant-design/icons';
import {Card, Tag} from 'antd';
import React from 'react';

import {Category} from '@/src/types';

import {ArticleLink} from './Component/ArticleLink';
import Style from './Style.module.scss';

interface IProps
{
    articleId: number;
    articleTitle: string;
    articleTime: Readonly<Date>;
    articleCategory: Readonly<Category> | undefined;
    articleViewAmount: number;
    articleBriefText: string;
}

export function ArticlePreviewCard(props: IProps)
{
    const {articleId, articleTitle, articleTime, articleCategory, articleViewAmount, articleBriefText} = props;
    return (
        <Card className={Style.ArticlePreviewCard}
              title={
                  <div className={Style.header}>
                      <ArticleLink articleId={articleId}>
                          <header className={Style.title}>{articleTitle}</header>
                      </ArticleLink>
                      <div className={Style.info}>
                          <Tag color={'purple'}>
                              <ClockCircleOutlined className={Style.icon} />
                              <span>
                                  {`${articleTime.getFullYear()}-${(articleTime.getMonth() + 1).toString().padStart(2, '0')}-${articleTime.getDate().toString().padStart(2, '0')}`}
                              </span>
                          </Tag>
                          <Tag color={'blue'}>
                              <TagsOutlined className={Style.icon} />
                              <span>{articleCategory ? articleCategory.name : ''}</span>
                          </Tag>
                          <Tag color={'geekblue'}>
                              <EyeOutlined className={Style.icon} />
                              <span>{articleViewAmount}</span>
                          </Tag>
                      </div>
                  </div>
              } bordered={false}>
            <div className={Style.brief}>
                {articleBriefText}……
            </div>
            <ArticleLink articleId={articleId}>继续阅读 {'>'}</ArticleLink>
        </Card>
    );
}