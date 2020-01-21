export default class SampleApi{
    static api = null;
    static apiHost = 'https://jsonplaceholder.typicode.com';
    
    constructor(requestMiddleware) {
        this.api = requestMiddleware({
            baseURL: SampleApi.apiHost,
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
