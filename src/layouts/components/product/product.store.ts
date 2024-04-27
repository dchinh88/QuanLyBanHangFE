import { Product } from "./interface"
import { serviceProduct } from './product'
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/constants";

export const useProduct = () => {
    const query = DEFAULT_COMMON_LIST_QUERY
    const fetchProducts = async () => {
        try {
            const res = await serviceProduct._getList<Product>(query);
            console.log(res);

            if (res.success)
                return {
                    data: res.items,
                    totalItems: res.totalItems
                }
            return null
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    return {
        fetchProducts,
        query,
    };
};

