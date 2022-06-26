import {useRouter} from 'next/router';
import {useEffect} from 'react';

import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../config/route';
import {getCategoryLink} from '../utils/route';

/**
 * For backward compatibility. Redirect category?id=xxx to category/xxx
 */
export default function CategoryRedirectPage() {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const {id} = router.query;
            if (typeof id !== 'string') {
                router.replace(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
                return;
            }

            const idNum = Number.parseInt(id);
            if (Number.isNaN(idNum)) {
                router.replace(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
                return;
            }

            router.replace(getCategoryLink(idNum));
        }
    }, [router]);

    return <></>;
}
