import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Congnovoinhacungcap } from "./interface";


class CongnovoinhacungcapService extends ApiService {
    async getAllCongnovoinhacungcap(): Promise<IBodyResponse<IGetListResponse<Congnovoinhacungcap>>> {
        return this.client.get(`${this.baseUrl}/GetAllCongnovoinhacungcap`);
    }

    async addCongnovoinhacungcap(congno: Congnovoinhacungcap): Promise<IBodyResponse<Congnovoinhacungcap>> {
        return this.client.post(`${this.baseUrl}`, congno);
    }

    async deleteCongnovoinhacungcap(id: number): Promise<IBodyResponse<Congnovoinhacungcap>> {
        return this.client.delete(`${this.baseUrl}/${id}`);
    }

    async getDetailCongnovoinhacungcap(id: number): Promise<IBodyResponse<Congnovoinhacungcap>> {
        return this.client.get(`${this.baseUrl}/${id}`)
    }
}

export const serviceCongnovoinhacungcap = new CongnovoinhacungcapService({ baseUrl: '/QLCongnovoinhacungcap' }, axiosInstance);