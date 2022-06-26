import Head from 'next/head';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';

import {Article as ArticleApi, Category as CategoryApi} from '@/src/apis';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '@/src/config/route';
import {Article as ArticleClass, Category} from '@/src/types';

import {ArticleView} from './View';

export function Article() {
    const [article, setArticle] = useState(
        new ArticleClass(0, '', '', 0, '', '', 0, true),
    );
    const [category, setCategory] = useState(new Category(0, ''));
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const getArticle = async (idNum: number) => {
            return await ArticleApi.getById(idNum);
        };

        const getCategory = async (categoryId: number) => {
            return await CategoryApi.getById(categoryId);
        };

        setLoading(true);
        if (router.isReady) {
            // 兼容性代码，第一版博客设置查询字符串为 articleId，第二版修改为 id
            const id = router.query.id ?? router.query.articleId;

            if (typeof id !== 'string') {
                router.replace(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
            } else {
                const idNum = Number.parseInt(id);
                if (Number.isNaN(idNum)) {
                    router.replace(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
                } else {
                    getArticle(idNum)
                        .then((article) => {
                            if (article !== null) {
                                setArticle(article);
                                const {category: categoryId} = article;
                                return getCategory(categoryId);
                            }
                        })
                        .then((category) => {
                            if (category !== null && category !== undefined) {
                                setCategory(category);
                            }
                        })
                        .finally(() => setLoading(false));
                }
            }
        }
    }, [router]);

    const {title, content, publicationTime, modificationTime} = article;
    return (
        <>
            <Head>
                {loading ? null : <title>{`${title} - Soulike 的博客`}</title>}
            </Head>
            <ArticleView
                title={title}
                content={content}
                publicationTime={publicationTime}
                modificationTime={modificationTime}
                loading={loading}
                category={category}
            />
        </>
    );
}
