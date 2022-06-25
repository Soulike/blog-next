import {markdownConverter} from '@/src/utils/markdownConverter';

export function getFirstSentenceFromMarkdown(markdownText: string): string
{
    const contentWrapper = document.createElement('div');
    contentWrapper.innerHTML = markdownConverter.makeHtml(markdownText);
    return contentWrapper.getElementsByTagName('p')[0].innerText;
}