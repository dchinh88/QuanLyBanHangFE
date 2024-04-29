
export interface Product {
    // id?: string;
    // name?: string;
    // price?: number;
    // quantity?: number;
    // description?: string;
    // image?: File | null;
    loaisanphamid?: number;
    tensanpham?: string;
    giaban?: number;
    chatlieu?: string;
    macsac?: string;
    baohanh?: string;
    mota?: string;
    khoid?: number;
    soluongton?: number;
}

export type ProductGetAll = {
    items: [];
    totalItems: number;
}