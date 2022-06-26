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

export function ArticlePreviewCard(props: IArticlePreviewCardProps)
{
    const {articleBriefTextMarkdown, ...restProps} = props;

    const markdownConverter = useMarkdownConverter();

    return <ArticlePreviewCardView articleBriefTextHtml={markdownConverter.makeHtml(articleBriefTextMarkdown)} {...restProps} />
}
