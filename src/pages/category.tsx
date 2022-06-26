import dynamic from 'next/dynamic';

const CategoryPromise = import('@/src/components/Category').then(
    ({Category}) => Category,
);

const Category = dynamic(() => CategoryPromise, {ssr: false});

export default function CategoryPage() {
    return <Category />;
}
