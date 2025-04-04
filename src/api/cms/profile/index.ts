import Context from '../../../core/context';

export default class Profile extends Context {

    /*
     * Get profile
     * @Note Authorization isn't needed
     * @returns response
     * @throws Error
     */
    async get(username: string) {
        return this.request(false, 'GET', `/profile/${username}`)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}