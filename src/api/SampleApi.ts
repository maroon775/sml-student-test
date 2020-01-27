import {AxiosInstance, AxiosPromise} from 'axios';

export interface InterfaceSampleApi {
    getUsers: Function,
}

export default class SampleApi implements InterfaceSampleApi {
    api: AxiosInstance;
    apiHost = 'https://jsonplaceholder.typicode.com';

    constructor(requestMiddleware: Function) {
        this.api = requestMiddleware({
            baseURL: this.apiHost,
            responseType: 'json'
        });
    }


    getUsers():AxiosPromise {
        return this.api.get(`/users`);
    }
}
