import dynamic from 'next/dynamic';

const AboutPromise = import('@/src/components/About').then(({About}) => About);

const About = dynamic(() => AboutPromise, {ssr: false});

export default function AboutPage() {
    return <About />;
}
