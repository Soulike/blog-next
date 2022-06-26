import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';
import React from 'react';

import svg from '@/src/static/book_lover.svg';

import Style from './Style.module.scss';

export function Loading() {
    return (
        <div className={Style.Loading}>
            <img
                src={svg}
                className={Style.icon}
                alt={'icon'}
                width={'300px'}
            />
            <Spin size={'large'} indicator={<LoadingOutlined />} />
        </div>
    );
}
