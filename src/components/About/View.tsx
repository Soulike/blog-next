import {Skeleton} from 'antd';
import React from 'react';

import {ArticleShower} from '@/src/components/ArticleShower';
import {markdownConverter} from '@/src/utils/markdownConverter';

import Style from './Style.module.scss';

interface Props
{
    loading: boolean,
    about: string,
}

export function AboutView(props: Props)
{
    const {loading, about} = props;
    return (
        <div className={Style.About}>
            <Skeleton loading={loading} active={true} title={true} paragraph={{
                rows: 20,
            }}>
                <header className={Style.header}>
                    <h1 className={Style.title}>关于</h1>
                </header>
                <ArticleShower HTMLContent={markdownConverter.makeHtml(about)} />
            </Skeleton>
        </div>
    );
}