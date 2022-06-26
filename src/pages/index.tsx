import dynamic from 'next/dynamic';

const IndexPromise = import('@/src/components/Index').then(({Index}) => Index);

const Index = dynamic(() => IndexPromise, {ssr: false});

export default function IndexPage() {
    return <Index />;
}
