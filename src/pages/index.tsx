import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

const IndexPromise = import('@/src/components/Index').then(({Index}) => Index);

const Index = dynamic(() => IndexPromise, {ssr: false});

export default function IndexPage() {
    const router = useRouter();

    useEffect(() => {
        if (window.location.pathname !== router.pathname) {
            router.replace(`/${window.location.pathname}`);
        }
    }, [router]);

    return <Index />;
}
