import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Kho } from "./interface";


class KhoService extends ApiService {
    async getAllKho(): Promise<IBodyResponse<IGetListResponse<Kho>>> {
        return this.client.get(`${this.baseUrl}/GetAllKho`);
    }

    async addKho(kho: Kho): Promise<IBodyResponse<Kho>> {
        return this.client.post(`${this.baseUrl}`, kho);
    }

    async editKho(id: number, kho: Kho): Promise<IBodyResponse<Kho>> {
        return this.client.put(`${this.baseUrl}/${id}`, kho);
    }

    async deleteKho(id: number): Promise<IBodyResponse<Kho>> {
        return this.client.delete(`${this.baseUrl}/${id}`);
    }

    async getDetailKho(id: number): Promise<IBodyResponse<Kho>> {
        return this.client.get(`${this.baseUrl}/${id}`);
    }
}

export const serviceKho = new KhoService({ baseUrl: '/QLKho' }, axiosInstance)