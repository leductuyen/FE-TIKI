import axiosClient from './axiosClient';

const productApi = {
    async getAll(params) {
        // const result = await axiosClient.get(`/Product/get/${params._page}/${params._limit}`);
        const result = await axiosClient.get('/Product/all/');

        return {
            data: result?.products || [],
            // pagination: {
            //     page: params._page,
            //     limit: params._limit,
            //     total: result?.pageTotal,
            // },
        };
    },

    add(data) {
        const url = '/products';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/products/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },
};
export default productApi;
