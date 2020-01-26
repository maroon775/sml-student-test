import {AxiosInstance} from 'axios';

export default class SampleApi {
    api: AxiosInstance;
    apiHost = 'https://jsonplaceholder.typicode.com';

    constructor(requestMiddleware: Function) {
        this.api = requestMiddleware({
            baseURL: this.apiHost,
            responseType: 'json'
        });
    }


    /**
     * @return Promise
     * */
    getUsers() {
        return this.api.get(`/users`);
    }

}
