import { DEFAULT_COMMON_LIST_QUERY } from "@/common/constants"
import { serviceKho } from "./kho";
import { Kho } from "./interface";


export const useKho = () => {
    const query = DEFAULT_COMMON_LIST_QUERY;
    const fetchKho = async () => {
        try {
            const res = await serviceKho._getList<Kho>(query);
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
        fetchKho,
        query
    }
}