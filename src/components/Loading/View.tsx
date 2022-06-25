import React from 'react';
import Style from './Style.module.scss';
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import svg from '@/src/static/book_lover.svg';
import Img from 'next/image';

export function Loading() {
    return (
        <div className={Style.Loading}>
            <Img
                src={svg}
                className={Style.icon}
                alt={'icon'}
                width={'300px'}
            />
            <Spin size={'large'} indicator={<LoadingOutlined />} />
        </div>
    );
}
