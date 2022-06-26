import {useEffect, useState} from 'react';

import {useMarkdownConverter} from '@/src/hooks/useMarkdownConverter';
import {Category} from '@/src/types';

import {ArticlePreviewCardView} from './View';

export interface IArticlePreviewCardProps {
    articleId: number;
    articleTitle: string;
    articleTime: Readonly<Date>;
    articleCategory: Readonly<Category> | undefined;
    articleViewAmount: number;
    articleBriefTextMarkdown: string;
}

export function ArticlePreviewCard(props: IArticlePreviewCardProps) {
    const {articleBriefTextMarkdown, ...restProps} = props;

    const [articleBriefTextHtml, setArticleBriefTextHtml] = useState('');

    const markdownConverterWrapper = useMarkdownConverter();

    useEffect(() => {
        markdownConverterWrapper.then((markdownConverter) => {
            setArticleBriefTextHtml(
                markdownConverter.makeHtml(articleBriefTextMarkdown),
            );
        });
    }, [markdownConverterWrapper, articleBriefTextMarkdown]);

    return (
        <ArticlePreviewCardView
            articleBriefTextHtml={articleBriefTextHtml}
            {...restProps}
        />
    );
}
