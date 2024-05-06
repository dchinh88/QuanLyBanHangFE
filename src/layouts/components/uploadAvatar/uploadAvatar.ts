import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Avatar } from "./interface";


class AvatarService extends ApiService {
    async getAllAvatar(): Promise<IBodyResponse<IGetListResponse<Avatar>>> {
        return this.client.get(`${this.baseUrl}/GetAllAvatar`);
    }

    async addAvatar(a: Avatar): Promise<IBodyResponse<Avatar>> {
        return this.client.post(`${this.baseUrl}/UploadAvatar`, a);
    }

    async editDonhang(id: number, a: Avatar): Promise<IBodyResponse<Avatar>> {
        return this.client.put(`${this.baseUrl}/${id}`, a);
    }

    async deleteAvatar(id: number): Promise<IBodyResponse<Avatar>> {
        return this.client.get(`${this.baseUrl}/RemoveImage?id=${id}`);
    }

    async getDetailAvatar(id: number): Promise<IBodyResponse<Avatar>> {
        return this.client.get(`${this.baseUrl}/${id}`);
    }
}


export const serviceAvatar = new AvatarService({ baseUrl: '/UploadAvatar' }, axiosInstance);