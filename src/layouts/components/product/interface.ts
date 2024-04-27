
export interface Product {
    // id?: string;
    // name?: string;
    // price?: number;
    // quantity?: number;
    // description?: string;
    // image?: File | null;
    loaisanphamId?: number;
    tensanpham?: string;
    giaban?: Float32Array;
    chatlieu?: string;
    mausac?: string;
    baohanh?: string;
    mota?: string;
    khoId?: number;
    soluongton?: number;
}

export type ProductGetAll = {
    items: [];
    totalItems: number;
}