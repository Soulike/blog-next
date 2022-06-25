import Link, {LinkProps} from 'next/link'
import React from 'react';

import {PAGE_ID, PAGE_ID_TO_ROUTE} from '@/src/config/route';

interface Props extends Omit<LinkProps, 'href'|'target'|'rel'> {
    articleId: number;
    children?: React.ReactNode;
}

export function ArticleLink(props: Props)
{
    const {children, articleId, ...rest} = props;
    const urlQueryParams = new URLSearchParams();
    urlQueryParams.set('id', articleId.toString());
    return (
        <Link href={`${PAGE_ID_TO_ROUTE[PAGE_ID.ARTICLE]}?${urlQueryParams.toString()}`}
              target={'_blank'}
              rel="noopener norefferrer" {...rest}>
            {children}
        </Link>
    );
}