import axios, {AxiosResponse} from 'axios';
import {Article, Response} from '../../types';
import {
    GET_ALL_WITH_ABSTRACT,
    GET_BY_CATEGORY_WITH_ABSTRACT,
    GET_BY_ID,
} from './ROUTE';
import {message} from 'antd';

export async function getAllWithAbstract(): Promise<Array<Article> | null> {
    try {
        const {
            data: {isSuccessful, message: msg, data},
        }: AxiosResponse<Response<Array<Article>>> = await axios.get(
            GET_ALL_WITH_ABSTRACT,
        );
        if (isSuccessful) {
            return data!;
        } else {
            message.warning(msg);
            return null;
        }
    } catch (e) {
        message.error('网络异常');
        console.log(e);
        return null;
    }
}

export async function getById(id: number): Promise<Article | null> {
    try {
        const {
            data: {isSuccessful, message: msg, data},
        }: AxiosResponse<Response<Article>> = await axios.get(GET_BY_ID, {
            params: {
                json: JSON.stringify({id}),
            },
        });
        if (isSuccessful) {
            return data!;
        } else {
            message.warning(msg);
            return null;
        }
    } catch (e) {
        message.error('网络异常');
        console.log(e);
        return null;
    }
}

export async function getByCategoryWithAbstract(
    category: number,
): Promise<Array<Article> | null> {
    try {
        const {
            data: {isSuccessful, message: msg, data},
        }: AxiosResponse<Response<Array<Article>>> = await axios.get(
            GET_BY_CATEGORY_WITH_ABSTRACT,
            {
                params: {
                    json: JSON.stringify({category}),
                },
            },
        );
        if (isSuccessful) {
            return data!;
        } else {
            message.warning(msg);
            return null;
        }
    } catch (e) {
        message.error('网络异常');
        console.log(e);
        return null;
    }
}
