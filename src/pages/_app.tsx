import '@/src/globalStyle/antd.scss';
import '@/src/globalStyle/color.scss';
import '@/src/globalStyle/globalStyle.scss';
import '@/src/globalStyle/highlight.scss';
import '@/src/moduleConfig/antd';

import ConfigProvider from 'antd/lib/config-provider';
import zhCN from 'antd/lib/locale/zh_CN';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import {Suspense} from 'react';

import {Frame} from '@/src/components/Frame';
import {Loading} from '@/src/components/Loading';
import {MarkdownConverterContext} from '@/src/contexts/MarkdownConverterContext';

const markdownConverter = import('@/src/utils/markdownConverter').then(
    ({markdownConverter}) => markdownConverter,
);

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <ConfigProvider locale={zhCN}>
                    <MarkdownConverterContext.Provider
                        value={markdownConverter}>
                        <Frame>
                            <Component {...pageProps} />
                        </Frame>
                    </MarkdownConverterContext.Provider>
                </ConfigProvider>
            </Suspense>
            <Head>
                <meta
                    content='width=device-width, initial-scale=1, maximum-scale=1'
                    name='viewport'
                />
                <meta name='theme-color' content='#000000' />
                <meta content='index,follow' name='robots' />
                <meta content="Soulike's blog" name='description' />
                <link href='https://unpkg.com' rel='preconnect' />
                <link href='https://v1.hitokoto.cn' rel='preconnect' />
                <link
                    href='https://www.googletagmanager.com/gtag/js?id=UA-148185792-1'
                    rel='prefetch'
                />
                <title>Soulike 的博客</title>
            </Head>
            <Script src='https://www.googletagmanager.com/gtag/js?id=UA-148185792-1' />
            <Script id={'google-analytics'}>
                {`
        window.dataLayer = window.dataLayer || [];

        function gtag()
        {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-148185792-1');
    `}
            </Script>
        </>
    );
}

export default MyApp;
