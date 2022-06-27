import dynamic from 'next/dynamic';

import {useUnmatchedPathRedirect} from '@/src/hooks/useUnmatchedPathRedirect';

const IndexPromise = import('@/src/components/Index').then(({Index}) => Index);

const Index = dynamic(() => IndexPromise, {ssr: false});

export default function IndexPage() {
    const isMatch = useUnmatchedPathRedirect();

    return isMatch ? <Index /> : null;
}
