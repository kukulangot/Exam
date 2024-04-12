import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            news: [
                {
                    id: 1,
                    img: "https://static.vecteezy.com/system/resources/previews/008/146/232/original/professional-logo-design-for-vape-shop-vintage-retro-style-free-vector.jpg",
                },
                {
                    id: 5,
                    img: "https://image.made-in-china.com/202f0j00RkcWPDftOmYe/2023-Most-Popular-Flava-9500-Disposable-Vape-Pod-Zbood-Customize-Blong-8000-Puffs-Rechargeable-OEM-Electronic-Cigarette-Wholesale.webp",
                },
                {
                    id: 2,
                    img: "https://astrovape.co.uk/cdn/shop/files/disposable-vapes-homepage-banner-astrovape-milton-keynes_12.png?v=1684918756&width=1420",
                },
                {
                    id: 3,
                    img: "https://www.healthcabin.net/blog/wp-content/uploads/2020/11/PRE-XMAS-SALE.jpg",
                },
                {
                    id: 4,
                    img: "https://vapebulkp.com/wp-content/uploads/2024/02/Good-sale-vape-Bang-20000-puffs-600x745.jpg",
                },
            ],
            newProducts: [
                {
                    id: 1,
                    img: "https://store.oxva.com/cdn/shop/files/Black_bf60d18e-d5cd-4d77-af91-4c57a34d0b0b.jpg?v=1709862635&width=600",
                },
                {
                    id: 2,
                    img: "https://store.oxva.com/cdn/shop/files/HazeBlue02.jpg?v=1712571259&width=600",
                },
                {
                    id: 3,
                    img: "https://cdn.shopify.com/s/files/1/0703/9739/5251/files/oxva-xlim-pro-pod-vape-kit-sale.jpg?v=1708500982",
                },
            ],
            bestSelling: [
                {
                    id: 1,
                    img: "https://djshopph.com/cdn/shop/products/3_480b02b8-cfac-4b06-a824-f0683c930eed.png?v=1696066052",
                },
                {
                    id: 2,
                    img: "https://djshopph.com/cdn/shop/products/9_f47824fb-36d3-40ad-8608-40f48532ab6b.png?v=1696066118&width=1445",
                },
                {
                    id: 3,
                    img: "https://djshopph.com/cdn/shop/products/13_9edc2be7-46cc-4c9b-bc0b-c7f4510bf377.png?v=1696066127&width=1445",
                },
            ],
            addToCart: [
                {
                    id: 1,
                    img: "https://store.oxva.com/cdn/shop/files/Black_bf60d18e-d5cd-4d77-af91-4c57a34d0b0b.jpg?v=1709862635&width=600",
                    title: "OXVA XLIM Pro Kit",
                    price: "2500",
                    rating: 4,
                    color: "Black",
                    description:
                        "Thanks to continuous optimization and stable iterations, the new nord 50W sets new standards for the nord series with an internal 1800mAh battery bringing you up to 50W of power to your satisfaction. The kit includes two versatile pods that work perfectly with the upgraded airflow system to deliver scrumptious flavor and massive vapor: one is the nord pod compatible with nord coil series, and the other is the LP2 pod compatible with LP2 coil series with enhanced leak-proof technology. Based on the classic appearance, the nord 50Wa advances into two collections featuring a variety of colors and premium textures to match your mood of the day.",
                    quantity: 1,
                    vapeSystem: "Slim Type",
                    ChargingTime: "2 Hours",
                    ChargerType: "Type C",
                    OutputPowerRange: "50w",
                    VapingInhaleStyle:
                        "DTL (Direct To Lung) , MTL (Mouth To Lung)",
                    VapeBrands: "SMOK",
                    BatteryCapacitymAh: "1800 mAh",
                    PodCapacity: "4.5ml, 4ml",
                    CoilResistanceOhm: "0.6 Ohm, 0.23ohm",
                    Airflow: "Adjustable",
                    Warranty: "6 Months (Limited)",
                    BatteryType: "Integrated (Built-in)"
                },
                {
                    id: 2,
                    img: "https://store.oxva.com/cdn/shop/files/HazeBlue02.jpg?v=1712571259&width=600",
                    title: "OXVA XLIM SQ Pro Kit",
                    price: "3500",
                },
                {
                    id: 3,
                    img: "https://cdn.shopify.com/s/files/1/0703/9739/5251/files/oxva-xlim-pro-pod-vape-kit-sale.jpg?v=1708500982",
                    title: "OXVA XLIM SE 2 Kit",
                    price: "1500",
                },
                {
                    id: 4,
                    img: "https://store.oxva.com/cdn/shop/files/Black_bf60d18e-d5cd-4d77-af91-4c57a34d0b0b.jpg?v=1709862635&width=600",
                    title: "OXVA XLIM Pro Kit",
                    price: "2500",
                },
                {
                    id: 5,
                    img: "https://store.oxva.com/cdn/shop/files/HazeBlue02.jpg?v=1712571259&width=600",
                    title: "OXVA XLIM SQ Pro Kit",
                    price: "3500",
                },
                {
                    id: 6,
                    img: "https://cdn.shopify.com/s/files/1/0703/9739/5251/files/oxva-xlim-pro-pod-vape-kit-sale.jpg?v=1708500982",
                    title: "OXVA XLIM SE 2 Kit",
                    price: "1500",
                },
                
            ],
            confirmAddToCart: [
                {
                    id: 1,
                    img: "https://store.oxva.com/cdn/shop/files/Black_bf60d18e-d5cd-4d77-af91-4c57a34d0b0b.jpg?v=1709862635&width=600",
                    title: "OXVA XLIM Pro Kit",
                    price: "2500",
                    rating: 4,
                    color: "Black",
                    description:
                        "Thanks to continuous optimization and stable iterations, the new nord 50W sets new standards for the nord series with an internal 1800mAh battery bringing you up to 50W of power to your satisfaction. The kit includes two versatile pods that work perfectly with the upgraded airflow system to deliver scrumptious flavor and massive vapor: one is the nord pod compatible with nord coil series, and the other is the LP2 pod compatible with LP2 coil series with enhanced leak-proof technology. Based on the classic appearance, the nord 50Wa advances into two collections featuring a variety of colors and premium textures to match your mood of the day.",
                    quantity: 1,
                    vapeSystem: "Slim Type",
                    ChargingTime: "2 Hours",
                    ChargerType: "Type C",
                    OutputPowerRange: "50w",
                    VapingInhaleStyle:
                        "DTL (Direct To Lung) , MTL (Mouth To Lung)",
                    VapeBrands: "SMOK",
                    BatteryCapacitymAh: "1800 mAh",
                    PodCapacity: "4.5ml, 4ml",
                    CoilResistanceOhm: "0.6 Ohm, 0.23ohm",
                    Airflow: "Adjustable",
                    Warranty: "6 Months (Limited)",
                    BatteryType: "Integrated (Built-in)"
                },
              
                
            ],
            confirmProfile: [
                {
                    id: 1,
                    Name: "Gerico A.Soledad ",
                    CpNo: "0945689633",
                    Email: "sample@gmai.com",
                   
                },
              
                
            ],
            confirmAddress: [
                {
                    id: 1,
                    AddressTitle: "Home Address",
                    Address: "Ave Maria St Silangan 1 ",
                    City: "Rosario,",
                    Province: "Cavite",
                   
                },
                {
                    id: 2,
                    AddressTitle: "Work Address",
                    Address: "Tramo Silangan 2 ",
                    City: "Tanza,",
                    Province: "Cavite",
                   
                },
              
                
            ],
            confirmPayment: [
                {
                    id: 1,
                    Type: "Cash on Delivery",
                    image:"https://w7.pngwing.com/pngs/510/354/png-transparent-food-indian-cuisine-bangladeshi-cuisine-devops-dubai-cash-on-delivery.png"
               
                   
                },
                {
                    id: 2,
                    Type: "Gcash",
                    image: "https://1000logos.net/wp-content/uploads/2023/05/GCash-Logo-tumb.png",
             
                   
                },
              
                
            ],
           
        };
    },
    getters: {
        news(state) {
            return state.news;
        },
        newProducts(state) {
            return state.newProducts;
        },
        bestSelling(state) {
            return state.bestSelling;
        },
        addToCart(state) {
            return state.addToCart;
        },
        confirmAddToCart(state) {
            return state.confirmAddToCart;
        },
        confirmProfile(state) {
            return state.confirmProfile;
        },
        confirmAddress(state) {
            return state.confirmAddress;
        },
        confirmPayment(state) {
            return state.confirmPayment;
        },
    },
});
export default store;
