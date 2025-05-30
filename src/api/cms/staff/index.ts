import Context from '../../../core/context';

/**
 * Handles retrieval of staff data.
 */
export default class Staff extends Context {

    /**
     * Get the list of staff members.
     *
     * @note Authorization is not required.
     *
     * @returns {Promise<any>} Staff data from the server.
     * @throws {Error} If the request fails.
     */
    async get(): Promise<any> {
        return this.request(false, 'GET', '/staff', {}, null)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }
}
