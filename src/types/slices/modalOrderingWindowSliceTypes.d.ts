export interface modalOrderingWindowSliceTypes {
    viewModalWindow: boolean;
    productElement: any;
    productCompleted: {
        id: number;
        image: string;
        productName: string;
        addons: addonType[];
        price: number;
    }
}

export interface addonType {
    addonName: string,
    addonPrice: number
}