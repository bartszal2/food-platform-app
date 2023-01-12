import { platformCategories } from "./platformCategories";
import { platformProductsIngredients } from "./platformProductsIngredients";
import { platformProductsTags } from "./platformProductsTags";

export const platformOfferData = [
    {
        id: 1,
        productName: 'Pizza Neapolitańska',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[0], 
            platformProductsIngredients[1],
            platformProductsIngredients[2],
            platformProductsIngredients[3],
            platformProductsIngredients[4]
        ],
        availableAddons: [
            {
                addonName: 'Podwójny ser mozzarella',
                addonPrice: 2
            },
        ],
        category: platformCategories[0],
        productTag: [
            platformProductsTags[0]
        ],
        prevPrice: 28,
        price: 25,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
        id: 2,
        productName: 'Pizza Margherita',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[0], 
            platformProductsIngredients[1],
            platformProductsIngredients[2]
        ],
        availableAddons: [
            {
                addonName: 'Podwójny ser mozzarella',
                addonPrice: 2
            },
        ],
        category: platformCategories[0],
        productTag: [
            platformProductsTags[0],
            platformProductsTags[3]
        ],
        prevPrice: 30,
        price: 28,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
        id: 3,
        productName: 'Pizza Calzone',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[0],
            platformProductsIngredients[1],
            platformProductsIngredients[5],
            platformProductsIngredients[6],
            platformProductsIngredients[7]
        ],
        availableAddons: [
            {
                addonName: 'Podwójny ser mozzarella',
                addonPrice: 2
            },
            {
                addonName: 'Podwójny ricotta',
                addonPrice: 3
            },
            {
                addonName: 'Podwójne salmi',
                addonPrice: 5
            },
            {
                addonName: 'Podwójny ser parmezan',
                addonPrice: 3
            }
        ],
        category: platformCategories[0],
        productTag: [],
        prevPrice: 34,
        price: 31,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
        id: 4,
        productName: 'Makizushi',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[8],
            platformProductsIngredients[9],
            platformProductsIngredients[10],
            platformProductsIngredients[11],
            platformProductsIngredients[12],
            platformProductsIngredients[13]
        ],
        availableAddons: [],
        category: platformCategories[1],
        productTag: [],
        prevPrice: 45,
        price: 42,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
        id: 5,
        productName: 'Temaki',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[8],
            platformProductsIngredients[9],
            platformProductsIngredients[10],
            platformProductsIngredients[12],
            platformProductsIngredients[14],
            platformProductsIngredients[15]
        ],
        availableAddons: [],
        category: platformCategories[1],
        productTag: [],
        prevPrice: 48,
        price: 44,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
        id: 6,
        productName: 'Cheeseburger',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[0],
            platformProductsIngredients[16],
            platformProductsIngredients[17],
            platformProductsIngredients[18],
            platformProductsIngredients[19],
            platformProductsIngredients[24]
        ],
        availableAddons: [],
        category: platformCategories[2],
        productTag: [],
        prevPrice: 26,
        price: 24,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
        id: 7,
        productName: 'Onion Burger',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[17],
            platformProductsIngredients[19],
            platformProductsIngredients[16],
            platformProductsIngredients[20],
            platformProductsIngredients[21],
            platformProductsIngredients[24]
        ],
        availableAddons: [],
        category: platformCategories[2],
        productTag: [
            platformProductsTags[0]
        ],
        prevPrice: 30,
        price: 28,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
        id: 8,
        productName: 'Breakfast Tacos',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[0],
            platformProductsIngredients[16],
            platformProductsIngredients[19],
            platformProductsIngredients[22]
        ],
        availableAddons: [],
        category: platformCategories[3],
        productTag: [
            platformProductsTags[0]
        ],
        prevPrice: 34,
        price: 31,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
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
    {
        id: 10,
        productName: 'Tonkotsu ramen',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[25],
            platformProductsIngredients[24]
        ],
        availableAddons: [],
        category: platformCategories[5],
        productTag: [],
        prevPrice: 41,
        price: 32,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
        id: 11,
        productName: 'Shio ramen',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[25],
            platformProductsIngredients[24],
            platformProductsIngredients[28]
        ],
        availableAddons: [],
        category: platformCategories[5],
        productTag: [
            platformProductsTags[0]
        ],
        prevPrice: 38,
        price: 33,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
        id: 12,
        productName: 'Mrożony jogurt truskawkowy',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[27]
        ],
        availableAddons: [],
        category: platformCategories[6],
        productTag: [
            platformProductsTags[4]
        ],
        prevPrice: 8,
        price: 6,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
        id: 13,
        productName: 'Czekoladowe Foundue',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[28]
        ],
        availableAddons: [],
        category: platformCategories[6],
        productTag: [],
        prevPrice: 12,
        price: 8,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
        id: 14,
        productName: 'Tiramisu',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[29]
        ],
        availableAddons: [],
        category: platformCategories[6],
        productTag: [
            platformProductsTags[0]
        ],
        prevPrice: 14,
        price: 8,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
        id: 15,
        productName: 'Milkshake czekoladowy',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[30],
            platformProductsIngredients[31]
        ],
        availableAddons: [],
        category: platformCategories[6],
        productTag: [],
        prevPrice: 8,
        price: 6,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    },
    {
        id: 16,
        productName: 'Ryba i frytki',
        shortProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat provident blanditiis porro vero impedit.',
        longProductDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda culpa. Recusandae nostrum accusantium minima, fugiat voluptatem mollitia, ipsum veritatis laudantium praesentium quos distinctio omnis nemo voluptatum exercitationem totam dicta deserunt adipisci. Molestiae voluptatibus exercitationem, ipsum veritatis cupiditate, facilis eaque laboriosam culpa omnis error praesentium voluptas id voluptatum reiciendis explicabo. Ex rerum sequi veniam? Nam vero veniam repellat? Dolores, quam.',
        productImage: 'product-template.png',
        ingredients: [
            platformProductsIngredients[32],
            platformProductsIngredients[33]
        ],
        availableAddons: [],
        category: platformCategories[7],
        productTag: [
            platformProductsTags[0]
        ],
        prevPrice: 28,
        price: 25,
        productAvailable: true,
        addedDate: new Date(2020, 4, 20, 12, 0, 0).toLocaleString(),
        updateDate: null
    }
];