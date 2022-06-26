import {useContext} from 'react';

import {MarkdownConverterContext} from '@/src/contexts/MarkdownConverterContext';

export function useMarkdownConverter() {
    return useContext(MarkdownConverterContext);
}
