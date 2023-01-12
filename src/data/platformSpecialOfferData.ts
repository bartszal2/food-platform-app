import { platformCategories } from "./platformCategories";
import { platformOfferData } from "./platformOfferData";
import { platformProductsIngredients } from "./platformProductsIngredients";
import { platformProductsTags } from "./platformProductsTags";

export const platformSpecialOfferData = {
    product: {
        id: 9,
        productName: 'Wrap Taquitos',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[23],
            platformProductsIngredients[16],
            platformProductsIngredients[24]
        ],
        availableAddons: [],
        category: platformCategories[4],
        productTag: [],
        prevPrice: 36,
        price: 33,
        productAvailable: false,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    specialOfferTitle: 'Sezonowe otwarcie!',
    specialOfferDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nulla neque asperiores iure corporis unde veritatis optio placeat odit vitae libero nisi ut eos quam, natus, delectus incidunt ratione id nobis dolorem. Tenetur molestias ullam officia mollitia voluptatem reiciendis temporibus nam totam nostrum nesciunt. Molestias sit facere quod fuga qui.',
    specialOfferProductTag: [
        platformProductsTags[1], 
        platformProductsTags[2]
    ],
    availableDate: new Date(2024, 5, 14, 12, 0, 0).toISOString(),
}