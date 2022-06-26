import {useContext} from 'react';

import {HljsContext} from '@/src/contexts/HljsContext';

export function useHljs() {
    return useContext(HljsContext);
}
