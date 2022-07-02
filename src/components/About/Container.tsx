import Head from 'next/head';
import {useEffect, useState} from 'react';

import {Option} from '@/src/apis';
import {useMarkdownConverter} from '@/src/hooks/useMarkdownConverter';

import {AboutView} from './View';

export function About() {
    const [about, setAbout] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    // TODO: useAbout()
    useEffect(() => {
        setLoading(true);
        Option.get()
            .then((result) => {
                if (result !== null) {
                    setAbout(result.about);
                }
            })
            .finally(() => setLoading(false));
    }, []);

    const {loading: converterIsLoading, html} = useMarkdownConverter(
        about ?? undefined,
    );

    return (
        <>
            <Head>
                <title>关于 - Soulike 的博客</title>
            </Head>
            <AboutView
                aboutHtml={html ?? ''}
                loading={loading || converterIsLoading}
            />
        </>
    );
}
