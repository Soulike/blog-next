import {useEffect, useState} from 'react';

import {setImmediatePromise} from '@/src/utils/promisify';

export function useHljs(htmlContainingCode: string | undefined): {
    loading: boolean;
    highlightedHtml: string | null;
} {
    const [loading, setLoading] = useState(true);
    const [highlightedHtml, setHighlightedHtmlHtml] = useState<string | null>(
        null,
    );

    useEffect(() => {
        setLoading(true);
        setHighlightedHtmlHtml(null);
        if (typeof htmlContainingCode !== 'string') {
            return;
        }

        const doHighlight = async () => {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = htmlContainingCode;

            const {hljs} = await import('@/src/utils/hljs');
            const preBlocks = Array.from(wrapper.querySelectorAll('pre'));
            await Promise.all(
                preBlocks.map(async (pre) => {
                    const codeBlocks = pre.querySelectorAll('code');
                    codeBlocks.forEach((block) => hljs.highlightElement(block));
                    await setImmediatePromise();
                }),
            );
            return wrapper.innerHTML;
        };

        doHighlight()
            .then((html) => setHighlightedHtmlHtml(html))
            .finally(() => setLoading(false));
    }, [htmlContainingCode]);

    return {loading, highlightedHtml};
}
