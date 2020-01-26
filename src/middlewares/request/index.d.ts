import axios, {AxiosInstance} from 'axios';
import {string} from "prop-types";

export interface IRequestParams {
    baseURL: string,
    responseType: 'json'
};

export default function requestMiddleware(params: IRequestParams): AxiosInstance {
    return axios.create(params);
};
