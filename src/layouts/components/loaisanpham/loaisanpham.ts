import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Loaisanpham } from "./interface";


class LoaisanphamService extends ApiService {
    async getAllLoaisanpham(): Promise<IBodyResponse<IGetListResponse<Loaisanpham>>> {
        return this.client.get(`${this.baseUrl}/GetAllLoaisanpham`);
    }

    async addLoaisanpham(lsp: Loaisanpham): Promise<IBodyResponse<Loaisanpham>> {
        return this.client.post(`${this.baseUrl}`, lsp);
    }

    async editLoaisanpham(id: number, lsp: Loaisanpham): Promise<IBodyResponse<Loaisanpham>> {
        return this.client.put(`${this.baseUrl}/${id}`, lsp);
    }

    async deleteLoaisanpham(id: number): Promise<IBodyResponse<Loaisanpham>> {
        return this.client.delete(`${this.baseUrl}/${id}`);
    }

    async getLoaisanphamDetail(id: number): Promise<IBodyResponse<Loaisanpham>> {
        return this.client.get(`${this.baseUrl}/${id}`);
    }
}


export const serviceLoaisanpham = new LoaisanphamService({ baseUrl: '/QLLoaisanpham' }, axiosInstance);