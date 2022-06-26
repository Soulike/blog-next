import dynamic from 'next/dynamic';

const NotFoundPromise = import('@/src/components/NotFound').then(
    ({NotFound}) => NotFound,
);

const NotFound = dynamic(() => NotFoundPromise, {ssr: false});

export default function NotFoundPage() {
    return <NotFound />;
}
