import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Donhang } from "./interface";


class DonhangService extends ApiService {
    async getAllDonhang(): Promise<IBodyResponse<IGetListResponse<Donhang>>> {
        return this.client.get(`${this.baseUrl}/GetAllDonhang`);
    }

    async addDonhang(donhang: Donhang): Promise<IBodyResponse<Donhang>> {
        return this.client.post(`${this.baseUrl}`, donhang);
    }

    async editDonhang(id: number, donhang: Donhang): Promise<IBodyResponse<Donhang>> {
        return this.client.put(`${this.baseUrl}/${id}`, donhang);
    }

    async deleteDonhang(id: number): Promise<IBodyResponse<Donhang>> {
        return this.client.delete(`${this.baseUrl}/${id}`);
    }

    async getDetailDonhang(id: number): Promise<IBodyResponse<Donhang>> {
        return this.client.get(`${this.baseUrl}/${id}`);
    }
}


export const serviceDonhang = new DonhangService({ baseUrl: '/QLDonhang' }, axiosInstance);