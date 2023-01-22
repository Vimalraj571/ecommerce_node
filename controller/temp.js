// const { userList } = require("./auth");
// test stub data
export const userList = [
    {
        username: "postman",
        password: "$2b$10$al13lEHqP8TlSJHtcp0lv.L8nLyvs4Mrbi1jiZT2rOga89qH9/vlK",
        type: "buyer",
        id: "ed8a465b-18c7-42f0-99b3-74d07fde48a1",
    },
    {
        username: "postman1",
        password: "$2b$10$/zFgP0fi5qchTGF2mir1Me5FviXzLRHLOQGPr7ZGNiMaGRnIfJjvK",
        type: "seller",
        id: "9e524f61-947a-4510-95d7-89f5d4fea87d",
    },
    {
        username: "postman2",
        password: "$2b$10$al13lEHqP8TlSJHtcp0lv.L8nLyvs4Mrbi1jiZT2rOga89qH9/vlK",
        type: "seller",
        id: "ed8a465b-18c7-42f0-99b3-74d07fde48a2",
    },
]

export const productList = [
    {
        id: 1,
        name: "shoe",
        price: 100,
    },
    {
        id: 2,
        name: "watch",
        price: 100,
    },
    {
        id: 3,
        name: "perfume",
        price: 50,
    },
    {
        id: 4,
        name: "shirt",
        price: 1600,
    },
    {
        name: "camera",
        price: 100,
        id: "1a1f0811-b8ad-41fc-bf63-3f7db5585d90",
    },
    {
        name: "lens",
        price: 160,
        id: "cbb7487f-116f-469d-a68d-9b3670170b18",
    },
    {
        name: "milk",
        price: 50,
        id: "ae706d9b-acbd-4223-be3b-39e563a8ac1f",
    },
]

export const catalogList = [
    {
        id: 1,
        seller_id: "ed8a465b-18c7-42f0-99b3-74d07fde48a2",
        catalog: [1, 4],
    },
    {
        id: 2,
        seller_id: "9e524f61-947a-4510-95d7-89f5d4fea87d",
        catalog: [
            "ae706d9b-acbd-4223-be3b-39e563a8ac1f",
            "cbb7487f-116f-469d-a68d-9b3670170b18",
            "1a1f0811-b8ad-41fc-bf63-3f7db5585d90",
            2,
            3,
        ],
    },
]

export const orderList = [
    {
        buyer_id: "ed8a465b-18c7-42f0-99b3-74d07fde48a1",
        products: ["watch", "perfume"], // aka  product_ids
        id: "76f0a0d3-e41f-4340-ac11-f011fc4ba582",
        seller_id: "9e524f61-947a-4510-95d7-89f5d4fea87d",
    },
    {
        buyer_id: "ed8a465b-18c7-42f0-99b3-74d07fde48a2",
        products: ["milk"], // aka  product_ids
        id: "76f0a0d3-e41f-4340-ac11-f011fc4ba582",
        seller_id: "9e524f61-947a-4510-95d7-89f5d4fea87d",
    },
]
