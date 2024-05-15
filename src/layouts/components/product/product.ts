import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Product } from "./interface";

class ProductService extends ApiService {
    async getAllProduct(): Promise<IBodyResponse<IGetListResponse<Product>>> {
        return this.client.get(`${this.baseUrl}/GetAllSanpham`);
    }
    async addProduct(product: Product): Promise<IBodyResponse<Product>> {
        return this.client.post(`${this.baseUrl}`, product);
    }
    async editProduct(id: number, product: Product): Promise<IBodyResponse<Product>> {
        return this.client.put(`${this.baseUrl}/${id}`, product);
    }
    async deleteProduct(id: number): Promise<IBodyResponse<Product>> {
        return this.client.delete(`${this.baseUrl}/${id}`);
    }

    async getProductDetail(id: number): Promise<IBodyResponse<Product>> {
        return this.client.get(`${this.baseUrl}/${id}`)
    }

    async getProductByName(name: string): Promise<IBodyResponse<IGetListResponse<Product>>> {
        return this.client.get(`${this.baseUrl}/name/${name}`)
    }

    async getProductByCategory(id: number): Promise<IBodyResponse<IGetListResponse<Product>>> {
        return this.client.get(`${this.baseUrl}/idlsp/${id}`);
    }
}

export const serviceProduct = new ProductService({ baseUrl: '/QLSanpham' }, axiosInstance)

