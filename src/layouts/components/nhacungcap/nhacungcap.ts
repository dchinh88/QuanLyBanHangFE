import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Nhacungcap } from "./interface";


class NhacungcapService extends ApiService {
    async getAllNhacungcap(): Promise<IBodyResponse<IGetListResponse<Nhacungcap>>> {
        return this.client.get(`${this.baseUrl}/GetAllNhacungcap`);
    }

    async addNhacungcap(nhacungcap: Nhacungcap): Promise<IBodyResponse<Nhacungcap>> {
        return this.client.post(`${this.baseUrl}`, nhacungcap);
    }

    async editNhacungcap(id: number, nhacungcap: Nhacungcap): Promise<IBodyResponse<Nhacungcap>> {
        return this.client.put(`${this.baseUrl}/${id}`, nhacungcap);
    }

    async deleteNhacungcap(id: Number): Promise<IBodyResponse<Nhacungcap>> {
        return this.client.delete(`${this.baseUrl}/${id}`);
    }

    async getDetailNhacungcap(id: Number): Promise<IBodyResponse<Nhacungcap>> {
        return this.client.get(`${this.baseUrl}/${id}`);
    }
}



export const serviceNhacungcap = new NhacungcapService({ baseUrl: '/QLNhacungcap' }, axiosInstance)