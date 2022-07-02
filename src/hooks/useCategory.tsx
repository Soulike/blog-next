import {useEffect, useState} from 'react';

import {Category as CategoryApi} from '@/src/apis';
import {Category} from '@/src/types';

export function useCategory(id: number | undefined): {
    loading: boolean;
    category: Category | null;
} {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState<Category | null>(null);

    useEffect(() => {
        setCategory(null);
        setLoading(true);
        if (typeof id !== 'number') {
            return;
        }
        CategoryApi.getById(id)
            .then((category) => setCategory(category))
            .finally(() => setLoading(false));
    }, [id]);

    return {loading, category};
}
