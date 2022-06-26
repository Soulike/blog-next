import React, {useEffect, useState} from 'react';

import {useHljs} from '@/src/hooks/useHljs';
import {useMaxJax} from '@/src/hooks/useMaxJax';
import {setImmediatePromise} from '@/src/utils/promisify';

import {ArticleShowerView} from './View';

interface IProps {
    HTMLContent: string;
}

export function ArticleShower(props: IProps) {
    const [wrapper, setWrapper] = useState(document.createElement('div'));
    const [loading, setLoading] = useState(true);
    const {HTMLContent} = props;
    const hljs = useHljs();

    useEffect(() => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = HTMLContent;

        setLoading(true);
        wrapper.querySelectorAll('pre').forEach(async (pre) => {
            pre.querySelectorAll('code').forEach((block) => {
                hljs.highlightElement(block);
            });
            await setImmediatePromise();
        });

        setWrapper(wrapper);

        setLoading(false);
    }, [HTMLContent, hljs]);

    useMaxJax([HTMLContent]);

    return (
        <ArticleShowerView HTMLContent={wrapper.innerHTML} loading={loading} />
    );
}
