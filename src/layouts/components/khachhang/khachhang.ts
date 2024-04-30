import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Khachhang } from "./interface";



class KhachhangService extends ApiService {
    async getAllKhachhang(): Promise<IBodyResponse<IGetListResponse<Khachhang>>> {
        return this.client.get(`${this.baseUrl}/GetAllKhachhang`);
    }

    async addKhachhang(khachhang: Khachhang): Promise<IBodyResponse<Khachhang>> {
        return this.client.post(`${this.baseUrl}`, khachhang);
    }

    async editKhachhang(id: number, khachhang: Khachhang): Promise<IBodyResponse<Khachhang>> {
        return this.client.put(`${this.baseUrl}/${id}`, khachhang);
    }

    async deleteKhachhang(id: number): Promise<IBodyResponse<Khachhang>> {
        return this.client.delete(`${this.baseUrl}/${id}`);
    }

    async getDetailKhachhang(id: number): Promise<IBodyResponse<Khachhang>> {
        return this.client.get(`${this.baseUrl}/${id}`);
    }
}

export const serviceKhachhang = new KhachhangService({ baseUrl: '/QLKhachhang' }, axiosInstance)