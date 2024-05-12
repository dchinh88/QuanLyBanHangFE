import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Phieumuahang } from "./interface";


class PhieumuahangService extends ApiService {
    async getAllPhieumuahang(): Promise<IBodyResponse<IGetListResponse<Phieumuahang>>> {
        return this.client.get(`${this.baseUrl}/GetAllPhieumuahang`);
    }

    async addPhieumuahang(phieumuahang: Phieumuahang): Promise<IBodyResponse<Phieumuahang>> {
        return this.client.post(`${this.baseUrl}`, phieumuahang);
    }

    async editPhieumuahang(id: number, phieumuahang: Phieumuahang): Promise<IBodyResponse<Phieumuahang>> {
        return this.client.put(`${this.baseUrl}/${id}`, phieumuahang);
    }

    async deletePhieumuahang(id: number): Promise<IBodyResponse<Phieumuahang>> {
        return this.client.delete(`${this.baseUrl}/${id}`);
    }

    async getDetailPhieumuahang(id: number): Promise<IBodyResponse<Phieumuahang>> {
        return this.client.get(`${this.baseUrl}/${id}`);
    }
}


export const servicePhieumuahang = new PhieumuahangService({ baseUrl: '/QLPhieumuahang' }, axiosInstance);