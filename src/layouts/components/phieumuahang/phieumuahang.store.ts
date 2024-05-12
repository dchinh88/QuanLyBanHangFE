import { DEFAULT_COMMON_LIST_QUERY } from "@/common/constants"
import { servicePhieumuahang } from "./phieumuahang";
import { Phieumuahang } from "./interface";


export const usePhieumuahang = () => {
    const query = DEFAULT_COMMON_LIST_QUERY;
    const fetchPhieumuahang = async () => {
        try {
            const res = await servicePhieumuahang._getList<Phieumuahang>(query);
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
        fetchPhieumuahang,
        query
    }
}