import Link, {LinkProps} from 'next/link';
import React from 'react';

import {getArticleLink} from '@/src/utils/route';

interface Props extends Omit<LinkProps, 'href' | 'target' | 'rel'> {
    articleId: number;
    children?: React.ReactNode;
}

export function ArticleLink(props: Props) {
    const {children, articleId, ...rest} = props;
    return (
        <Link href={getArticleLink(articleId)} {...rest}>
            <a target={'_blank'} rel='noopener norefferrer'>
                {children}
            </a>
        </Link>
    );
}
