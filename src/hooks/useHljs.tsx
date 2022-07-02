import {useContext, useEffect, useState} from 'react';

import {HljsContext} from '@/src/contexts/HljsContext';
import {setImmediatePromise} from '@/src/utils/promisify';

export function useHljs(htmlContainingCode: string | undefined): {
    loading: boolean;
    highlightedHtml: string | null;
} {
    const hljsWrapper = useContext(HljsContext);
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

            const hljs = await hljsWrapper;
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
    }, [hljsWrapper, htmlContainingCode]);

    return {loading, highlightedHtml};
}
