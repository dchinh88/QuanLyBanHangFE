import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Congnocuakhachhang } from "./interface";



class CongnocuakhachhangService extends ApiService {
    async getAllCongnocuaKH(): Promise<IBodyResponse<IGetListResponse<Congnocuakhachhang>>> {
        return this.client.get(`${this.baseUrl}/GetAllCongnocuakhachhang`);
    }

    async addCongnocuaKH(congno: Congnocuakhachhang): Promise<IBodyResponse<Congnocuakhachhang>> {
        return this.client.post(`${this.baseUrl}`, congno);
    }

    // async editCongnocuaKH?

    async deleteCongnocuaKH(id: number): Promise<IBodyResponse<Congnocuakhachhang>> {
        return this.client.delete(`${this.baseUrl}/${id}`);
    }

    async getDetailCongnocuaKH(id: number): Promise<IBodyResponse<Congnocuakhachhang>> {
        return this.client.get(`${this.baseUrl}/${id}`);
    }
}

export const serviceCongnocuakhachhang = new CongnocuakhachhangService({ baseUrl: '/QLCongnocuakhachhang' }, axiosInstance);