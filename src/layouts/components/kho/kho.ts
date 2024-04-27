import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Kho } from "./interface";


class KhoService extends ApiService {
    async getAllKho(): Promise<IBodyResponse<IGetListResponse<Kho>>> {
        return this.client.get(`${this.baseUrl}/GetAllKho`);
    }
}

export const serviceKho = new KhoService({ baseUrl: '/QLKho' }, axiosInstance)