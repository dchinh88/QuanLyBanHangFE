import { IBodyResponse, IGetListResponse } from "@/common/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";
import { Product } from "./interface";

class ProductService extends ApiService {
    async getAllProduct(): Promise<IBodyResponse<IGetListResponse<Product>>> {
        return this.client.get(`${this.baseUrl}`);
    }

    async addProduct(product: Product): Promise<IBodyResponse<Product>> {
        return this.client.post(`${this.baseUrl}`, product, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    async editProduct(id: string, product: Product): Promise<IBodyResponse<Product>> {
        return this.client.patch(`${this.baseUrl}/${id}`, product, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    async deleteProduct(id: number): Promise<IBodyResponse<Product>> {
        return this.client.delete(`${this.baseUrl}/${id}`);
    }

    async getProductDetail(id: number): Promise<IBodyResponse<Product>> {
        return this.client.get(`${this.baseUrl}/${id}`)
    }
}

export const serviceProduct = new ProductService({ baseUrl: '/QLSanpham' }, axiosInstance)

