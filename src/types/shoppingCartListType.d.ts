export interface shoppingCartListType {
    id: number;
    image: string;
    title: string;
    addons: addonType[];
    count: number;
    price: number;
}

export interface addonType {
    addonName: string;
    addonPrice: number;
}