import { DEFAULT_COMMON_LIST_QUERY } from "@/common/constants"
import { serviceDonhang } from "./donhang";
import { Donhang } from "./interface";


export const useDonhang = () => {
    const query = DEFAULT_COMMON_LIST_QUERY;
    const fetchDonhang = async () => {
        try {
            const res = await serviceDonhang._getList<Donhang>(query);
            if (res.success) {
                return {
                    data: res.items,
                    totalItems: res.totalItems
                }
            }
            return null;
        } catch (error) {
            console.error('Error: ', error);

        }
    }
    return {
        fetchDonhang,
        query
    }
}