import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { User } from "./interface";

class UserService extends ApiService {
    async getAllUser(): Promise<IBodyResponse<IGetListResponse<User>>> {
        return this.client.get(`${this.baseUrl}`);
    }

    // async addUser(user: User): Promise<IBodyResponse<User>> {
    //     return this.client.post(`${this.baseUrl}`, user, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     })
    // }
    async addUser(user: User): Promise<IBodyResponse<User>> {
        return this.client.post(`${this.baseUrl}`, user)
    }

    // async editUser(id: string, user: User): Promise<IBodyResponse<User>> {
    //     return this.client.put(`${this.baseUrl}/${id}`, user, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     });
    // }
    async editUser(id: number, user: User): Promise<IBodyResponse<User>> {
        return this.client.put(`${this.baseUrl}/${id}`, user);
    }

    async deleteUSer(id: number): Promise<IBodyResponse<User>> {
        return this.client.delete(`${this.baseUrl}/${id}`)
    }

    async getUserDetail(id: number): Promise<IBodyResponse<User>> {
        return this.client.get(`${this.baseUrl}/${id}`)
    }
}

export const serviceUser = new UserService({ baseUrl: '/QLNhanvien' }, axiosInstance)