import axios, {AxiosResponse} from 'axios';
import {GET_ABOUT} from './ROUTE';
import {Response} from '../../types';
import {message} from 'antd';

export async function get(): Promise<{about: string} | null> {
    try {
        const {
            data: {isSuccessful, message: msg, data},
        }: AxiosResponse<Response<{about: string}>> = await axios.get(
            GET_ABOUT,
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
