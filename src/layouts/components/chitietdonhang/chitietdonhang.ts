import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Chitietdonhang } from "./interface";


class ChitietdonhangService extends ApiService {
    async getAllChitietdonhang(): Promise<IBodyResponse<IGetListResponse<Chitietdonhang>>> {
        return this.client.get(`${this.baseUrl}`);
    }

    async addChitietdonhang(chitietdonhang: Chitietdonhang): Promise<IBodyResponse<Chitietdonhang>> {
        return this.client.post(`${this.baseUrl}`, chitietdonhang);
    }

    async editChitietdonhang(id: number, chitietdonhang: Chitietdonhang): Promise<IBodyResponse<Chitietdonhang>> {
        return this.client.put(`${this.baseUrl}/${id}`, chitietdonhang);
    }

    async deleteChitietdonhang(id: number): Promise<IBodyResponse<Chitietdonhang>> {
        return this.client.delete(`${this.baseUrl}/${id}`);
    }

    async getDetailChitietdonhang(id: number): Promise<IBodyResponse<Chitietdonhang>> {
        return this.client.get(`${this.baseUrl}/${id}`);
    }

}

export const serviceChitietdonhang = new ChitietdonhangService({ baseUrl: '/QLChitietdonhang' }, axiosInstance);