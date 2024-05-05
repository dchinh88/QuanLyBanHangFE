import { DEFAULT_COMMON_LIST_QUERY } from "@/common/constants"
import { serviceCongnocuakhachhang } from "./congnocuakhachhang";
import { Congnocuakhachhang } from "./interface";


export const useCongnocuakhachhang = () => {
    const query = DEFAULT_COMMON_LIST_QUERY;
    const fetchCongnocuakhachhang = async () => {
        try {
            const res = await serviceCongnocuakhachhang._getList<Congnocuakhachhang>(query);
            if (res.success) {
                return {
                    data: res.items,
                    totalItems: res.totalItems
                }
            }
            return null;
        } catch (error) {
            console.log('Error: ', error);

        }
    }
    return {
        fetchCongnocuakhachhang,
        query
    }
}