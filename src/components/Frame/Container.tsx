import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {Category as CategoryApi} from '@/src/apis';
import {Category} from '@/src/types';

import {FrameView} from './View';

export interface IFrameProps {
    children?: React.ReactNode;
}

export function Frame(props: IFrameProps) {
    const {children} = props;
    const [hitokoto, setHitokoto] = useState('这里应该有一句话');
    const [year, setYear] = useState(1970);
    const [categoryList, setCategoryList] = useState([] as Category[]);

    // 设定当前年份
    useEffect(() => {
        const date = new Date();
        setYear(date.getFullYear());
    }, []);

    // 设定 hitokoto
    useEffect(() => {
        const getHitokoto = async () => {
            const {data} = await axios.get('https://v1.hitokoto.cn/', {
                params: {
                    c: 'a',
                    encode: 'text',
                    _t: Date.now(),
                },
            });

            return data;
        };

        getHitokoto().then((hitokoto) => setHitokoto(hitokoto));
    }, []);

    // 获取所有分类
    useEffect(() => {
        const getCategoryList = async () => await CategoryApi.getAll();

        getCategoryList().then((categoryList) => {
            if (categoryList !== null) {
                setCategoryList(categoryList);
            }
        });
    }, []);

    return (
        <FrameView hitokoto={hitokoto} year={year} categoryList={categoryList}>
            {children}
        </FrameView>
    );
}
