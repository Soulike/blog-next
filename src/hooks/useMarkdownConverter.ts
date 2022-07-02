import {useContext, useEffect, useState} from 'react';

import {MarkdownConverterContext} from '@/src/contexts/MarkdownConverterContext';

export function useMarkdownConverter(markdown: string | undefined): {
    loading: boolean;
    html: string | null;
} {
    const converterWrapper = useContext(MarkdownConverterContext);
    const [loading, setLoading] = useState(true);
    const [html, setHtml] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setHtml(null);
        if (markdown === undefined) {
            return;
        }
        converterWrapper
            .then((converter) => {
                const html = converter.makeHtml(markdown);
                setHtml(html);
            })
            .finally(() => setLoading(false));
    }, [converterWrapper, markdown]);

    return {loading, html};
}
