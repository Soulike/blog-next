import Head from 'next/head';
import {useEffect, useState} from 'react';

import {Option} from '@/src/apis';
import {useMarkdownConverter} from '@/src/hooks/useMarkdownConverter';

import {AboutView} from './View';

export function About() {
    const [aboutHtml, setAboutHtml] = useState('');
    const [loading, setLoading] = useState(true);

    const markdownConverterWrapper = useMarkdownConverter();

    useEffect(() => {
        const getAbout = async () => {
            const result = await Option.get();
            return result === null ? '' : result.about;
        };

        setLoading(true);
        Promise.all([markdownConverterWrapper, getAbout()])
            .then(([markdownConverter, aboutMarkdown]) => {
                setAboutHtml(markdownConverter.makeHtml(aboutMarkdown));
            })
            .finally(() => setLoading(false));
    }, [markdownConverterWrapper]);

    return (
        <>
            <Head>
                <title>关于 - Soulike 的博客</title>
            </Head>
            <AboutView
                aboutHtml={aboutHtml}
                loading={loading}
            />
        </>
    );
}
