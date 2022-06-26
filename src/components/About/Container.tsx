import Head from 'next/head';
import {useEffect, useState} from 'react';

import {Option} from '@/src/apis';
import {useMarkdownConverter} from '@/src/hooks/useMarkdownConverter';

import {AboutView} from './View';

export function About() {
    const [about, setAbout] = useState('');
    const [loading, setLoading] = useState(true);

    const markdownConverter = useMarkdownConverter();

    useEffect(() => {
        const getAbout = async () => {
            const result = await Option.get();
            return result === null ? '' : result.about;
        };

        setLoading(true);
        getAbout()
            .then((about) => {
                setAbout(about);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <Head>
                <title>关于 - Soulike 的博客</title>
            </Head>
            <AboutView
                aboutHtml={markdownConverter.makeHtml(about)}
                loading={loading}
            />
        </>
    );
}
