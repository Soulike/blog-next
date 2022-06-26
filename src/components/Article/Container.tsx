import {message} from 'antd';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

import {Article as ArticleApi, Category as CategoryApi} from '@/src/apis';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '@/src/config/route';
import {useMarkdownConverter} from '@/src/hooks/useMarkdownConverter';
import {Article as ArticleClass, Category} from '@/src/types';

import {ArticleView} from './View';

export function Article() {
    const [article, setArticle] = useState(
        new ArticleClass(0, '', '', 0, '', '', 0, true),
    );
    const [category, setCategory] = useState(new Category(0, ''));
    const [loading, setLoading] = useState(true);

    const [articleContentHtml, setArticleContentHtml] = useState('');

    const markdownConverterWrapper = useMarkdownConverter();

    const router = useRouter();

    useEffect(() => {
        const processArticle = async (idNum: number) => {
            const article = await ArticleApi.getById(idNum);
            if (article === null) {
                router.replace('/404');
                return;
            }
            setArticle(article);
            const {category: categoryId, content: contentMarkdown} = article;
            const [category, markdownConverter] = await Promise.all([
                CategoryApi.getById(categoryId),
                markdownConverterWrapper,
            ]);
            if (category === null) {
                // should be impossible
                message.error('类别不存在');
            }
            setCategory(category!);
            setArticleContentHtml(markdownConverter.makeHtml(contentMarkdown));
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
                    processArticle(idNum).finally(() => setLoading(false));
                }
            }
        }
    }, [router, markdownConverterWrapper]);

    const {title, publicationTime, modificationTime} = article;
    return (
        <>
            <Head>
                {loading ? null : <title>{`${title} - Soulike 的博客`}</title>}
            </Head>
            <ArticleView
                title={title}
                contentHtml={articleContentHtml}
                publicationTime={publicationTime}
                modificationTime={modificationTime}
                loading={loading}
                category={category}
            />
        </>
    );
}
