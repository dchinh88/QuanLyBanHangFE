import { DEFAULT_COMMON_LIST_QUERY } from "@/common/constants"
import { serviceLoaisanpham } from "./loaisanpham"
import { Loaisanpham } from "./interface"


export const useLoaisanpham = () => {
    const query = DEFAULT_COMMON_LIST_QUERY
    const fetchLoaisanpham = async () => {
        try {
            const res = await serviceLoaisanpham._getList<Loaisanpham>(query);
            if (res.success) {
                return {
                    data: res.items,
                    totalItems: res.totalItems
                }

            }
            return null;
        } catch (error) {
            console.error('Error fetching Loaisanpham', error);
        }
    };
    return {
        fetchLoaisanpham,
        query
    }
}