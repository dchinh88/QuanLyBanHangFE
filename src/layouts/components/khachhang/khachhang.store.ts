import { DEFAULT_COMMON_LIST_QUERY } from "@/common/constants"
import { serviceKhachhang } from "./khachhang";
import { Khachhang } from "./interface";



export const useKhachhang = () => {
    const query = DEFAULT_COMMON_LIST_QUERY;
    const fetchKhachhang = async () => {
        try {
            const res = await serviceKhachhang._getList<Khachhang>(query);
            if (res.success) {
                return {
                    data: res.items,
                    totalItems: res.totalItems
                }
            }
            return null;
        } catch (error) {
            console.log("Error: ", error);

        }
    };
    return {
        fetchKhachhang,
        query
    }
}