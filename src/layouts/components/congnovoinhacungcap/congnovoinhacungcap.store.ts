import { DEFAULT_COMMON_LIST_QUERY } from "@/common/constants"
import { serviceCongnovoinhacungcap } from "./congnovoinhacungcap";
import { Congnovoinhacungcap } from "./interface";


export const useCongnovoinhacungcap = () => {
    const query = DEFAULT_COMMON_LIST_QUERY;
    const fetchCongnovoinhacungcap = async () => {
        try {
            const res = await serviceCongnovoinhacungcap._getList<Congnovoinhacungcap>(query);
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
        fetchCongnovoinhacungcap,
        query
    }
}