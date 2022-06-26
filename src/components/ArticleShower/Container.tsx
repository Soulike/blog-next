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
    const hljsWrapper = useHljs();

    useEffect(() => {
        const doHighlight = async () => {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = HTMLContent;

            const hljs = await hljsWrapper;
            await Promise.all(
                Array.from(wrapper.querySelectorAll('pre')).map(async (pre) => {
                    pre.querySelectorAll('code').forEach((block) => {
                        hljs.highlightElement(block);
                    });
                    await setImmediatePromise();
                }),
            );
            setWrapper(wrapper);
        };

        setLoading(true);
        doHighlight().finally(() => setLoading(false));
    }, [HTMLContent, hljsWrapper]);

    useMaxJax([HTMLContent]);

    return (
        <ArticleShowerView HTMLContent={wrapper.innerHTML} loading={loading} />
    );
}
