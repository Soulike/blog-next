import dynamic from 'next/dynamic';

import {usePathIsMatch} from '@/src/hooks/usePathIsMatch';

const IndexPromise = import('@/src/components/Index').then(({Index}) => Index);

const Index = dynamic(() => IndexPromise, {ssr: false});

export default function IndexPage() {
    const isMatch = usePathIsMatch();

    return isMatch ? <Index /> : null;
}