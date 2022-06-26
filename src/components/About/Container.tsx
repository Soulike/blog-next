import React, {useEffect, useState} from 'react';

import {Option} from '@/src/apis';

import {AboutView} from './View';

export function About() {
    const [about, setAbout] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAbout = async () =>
        {
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

    return <AboutView about={about} loading={loading} />;
}
