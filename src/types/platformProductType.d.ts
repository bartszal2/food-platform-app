import { platformCategoryType } from "./platformCategoryType";
import { platformProductTagType } from "./platformProductTagType";
import { addonType } from "./shoppingCartListType";

export interface platformProductType {
    id: number;
    productName: string;
    shortProductDescription: string;
    longProductDescription: string;
    productImage: string;
    ingredients: string[];
    availableAddons: addonType[];
    category: platformCategoryType[];
    productTag: platformProductTagType[];
    prevPrice: number;
    price: number;
    productAvailable: boolean;
    addedDate: string;
    updateDate: null;
}