import { DEFAULT_COMMON_LIST_QUERY } from "@/common/constants"
import { serviceUser } from "./user"
import { User } from "./interface"

export const useUser = () => {
    const query = DEFAULT_COMMON_LIST_QUERY
    const fetchUser = async () => {
        try {
            const res = await serviceUser._getList<User>(query)
            if (res.success) {
                return {
                    data: res.data.items,
                    totalItems: res.data.totalItems
                }
            }
            return null;
        } catch (error) {
            console.error('Error: ', error);

        }
    }
    return {
        fetchUser,
        query
    }
}