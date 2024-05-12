import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Chitietphieumuahang } from "./interface";

class ChitietphieumuahangService extends ApiService {
    async getAllChitietphieumuahang(): Promise<IBodyResponse<IGetListResponse<Chitietphieumuahang>>> {
        return this.client.get(`${this.baseUrl}`);
    }

    async addChitietphieumuahang(chitietphieumuahang: Chitietphieumuahang): Promise<IBodyResponse<Chitietphieumuahang>> {
        return this.client.post(`${this.baseUrl}`, chitietphieumuahang);
    }

    async editChitietphieumuahang(id: number, chitietphieumuahang: Chitietphieumuahang): Promise<IBodyResponse<Chitietphieumuahang>> {
        return this.client.put(`${this.baseUrl}/${id}`, chitietphieumuahang);
    }

    async deleteChitietphieumuahang(id: number): Promise<IBodyResponse<Chitietphieumuahang>> {
        return this.client.delete(`${this.baseUrl}/${id}`);
    }

    async getDetailChitietphieumuahang(id: number): Promise<IBodyResponse<Chitietphieumuahang>> {
        return this.client.get(`${this.baseUrl}/${id}`);
    }
}


export const serviceChitietphieumuahang = new ChitietphieumuahangService({ baseUrl: '/QLChitietphieumuahang' }, axiosInstance);