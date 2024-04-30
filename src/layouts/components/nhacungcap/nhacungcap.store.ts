import { DEFAULT_COMMON_LIST_QUERY } from "@/common/constants"
import { serviceNhacungcap } from "./nhacungcap";
import { Nhacungcap } from "./interface";


export const useNhacungcap = () => {
    const query = DEFAULT_COMMON_LIST_QUERY;
    const fetchNhacungcap = async () => {
        try {
            const res = await serviceNhacungcap._getList<Nhacungcap>(query)
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
        fetchNhacungcap,
        query
    }
}