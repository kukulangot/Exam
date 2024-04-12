<template>
    <ion-page style="padding: 0 20px">
        <ion-content>
            <ion-toolbar class="flat-toolbar">
                <ion-row
                    class="ion-align-items-center ion-justify-content-center"
                >
                <ion-col class="ion-text-start">
                  <ion-icon
                        style="font-size: 25px"
                        @click="closeDialog"
                        name="chevron-back-outline"
                    ></ion-icon>
                </ion-col>
                  

                    <ion-col class="ion-text-center">
                        <ion-img
                            :src="'https://static.vecteezy.com/system/resources/previews/008/146/232/original/professional-logo-design-for-vape-shop-vintage-retro-style-free-vector.jpg'"
                            style="height: 50px; width: 100px"
                        ></ion-img>
                    </ion-col>
                    <ion-col class="ion-text-end">
                    <ion-icon
                        style="font-size: 25px"
                        name="wallet-outline"
                    ></ion-icon>
                    <ion-icon
                        style="font-size: 25px"
                        name="notifications-outline"
                    ></ion-icon>
                  </ion-col>
                </ion-row>
            </ion-toolbar>
            <ion-card class="ion-text-center">
                <ion-card-content>
                    <ion-img :src="item.img"></ion-img>
                </ion-card-content>
            </ion-card>

            <ion-row
                class="ion-align-items-center ion-justify-content-center no-padding"
            >
                <ion-title class="ion-text-center no-padding">{{
                    item.title
                }}</ion-title>
            </ion-row>
            <ion-row
                class="ion-align-items-center ion-justify-content-center no-padding"
            >
                <ion-icon
                    v-for="i in 5"
                    :key="i"
                    :name="getStarIcon(i, item.rating)"
                    style="color: gold"
                ></ion-icon>
            </ion-row>

            <ion-row
                class="ion-align-items-center ion-justify-content-center no-padding"
            >
                <ion-title
                    class="ion-text-center no-padding"
                    style="
                        font-size: 20px;
                        font-weight: bold;
                        font-family: Arial;
                    "
                >
                    {{ item.price }}
                </ion-title>
            </ion-row>
            <ion-row
                class="ion-align-items-center ion-justify-content-center no-padding"
            >
                <ion-buttons>
                    <ion-button size="small"
                        >{{ item.color }}
                        <ion-icon
                            style="font-size: 25px"
                            name="chevron-forward-outline"
                        ></ion-icon
                    ></ion-button>
                </ion-buttons>
            </ion-row>
            <ion-row >
                <ion-title
                    class="ion-text-center no-padding"
                    style="
                        font-size: 20px;
                        font-weight: bold;
                        font-family: Arial;
                    "
                >
                    Quantity
                </ion-title>
            </ion-row>
            <ion-row
                class="ion-align-items-center ion-justify-content-center no-padding"
            >
                <ion-col class="ion-text-end"
                    ><ion-icon 
                        style="font-size: 25px"
                        name="remove-circle-outline"
                        color="primary"
                    ></ion-icon
                ></ion-col>
                <ion-col class="ion-text-center">
                    <ion-input
                        v-model="item.quantity"
                        class="custom-input"
                    ></ion-input
                ></ion-col>
                <ion-col 
                    ><ion-icon
                    
                    style="font-size: 25px"
                        name="add-circle-outline"
                        color="primary"
                    ></ion-icon
                ></ion-col>
            </ion-row>
            <ion-row style="padding: 10px 0px;">
                <ion-title
                    class="ion-text-center no-padding"
                    style="
                        font-size: 20px;
                        font-weight: bold;
                        font-family: Arial;
                    "
                >
                    Description
                </ion-title>
            </ion-row>
            <ion-row class="ion-align-items-center ion-justify-content-center">
                <ion-label
                    class="ion-text-center no-padding"
                    style="font-size: 10px; font-family: Arial"
                >
                    {{ item.description }}
                </ion-label>
            </ion-row>

         
            <ion-row style="padding: 10px 0px;">
                <ion-title
                    class="ion-text-center "
                    style="
                        font-size: 20px;
                        font-weight: bold;
                        font-family: Arial;
                    "
                >
                    Features
                </ion-title>
            </ion-row>
            <ion-row class="ion-align-items-center ion-justify-content-center">
                <ion-col size="6"  style="font-size: 8px; font-family: Arial"
                    ><p
                        class="ion-text-wrap"
                       
                    >
                        Available Device
                    </p>
                    <p class="ion-text-wrap" >Coluor(s)</p>
                    <p class="ion-text-wrap" >Vape System</p>
                    <p class="ion-text-wrap" >Charging Time</p>
                    <p class="ion-text-wrap" >Charger Type</p>
                    <p class="ion-text-wrap" >Output Power Range</p>
                    <p class="ion-text-wrap" >Vaping Inhale Style</p>
                    <p class="ion-text-wrap" >Vape Brands</p>
                    <p class="ion-text-wrap" >Battery Capacity (mAh)</p>
                    <p class="ion-text-wrap" >Pod Capacity</p>
                    <p class="ion-text-wrap" >Coil Resistance (Ohm)</p>
                    <p class="ion-text-wrap" >Airflow</p>
                    <p class="ion-text-wrap" >Warranty</p>
                    <p class="ion-text-wrap" >Battery Type</p>
                    </ion-col
                >
                <ion-col
                class="ion-text-wrap ion-text-end"
                    size="6"
                    style="font-size: 8px; font-family: Arial; color: blue"
                    ><p>{{ item.title }}</p>
                    <p class="ion-text-wrap ion-align-items-right ion-justify-content-end">{{item.color}}</p>
                    <p class="ion-text-wrap">{{item.vapeSystem}}</p>
                    <p class="ion-text-wrap">{{item.ChargingTime}}</p>
                    <p class="ion-text-wrap">{{item.ChargerType}}</p>
                    <p class="ion-text-wrap">{{item.OutputPowerRange}}</p>
                    <p class="ion-text-wrap">{{item.VapingInhaleStyle}}</p>
                    <p class="ion-text-wrap">{{item.VapeBrands}}</p>
                    <p class="ion-text-wrap">{{item.BatteryCapacitymAh}}</p>
                    <p class="ion-text-wrap">{{item.PodCapacity}}</p>
                    <p class="ion-text-wrap">{{item.CoilResistanceOhm}}</p>
                    <p class="ion-text-wrap">{{item.Airflow}}</p>
                    <p class="ion-text-wrap">{{item.Warranty}}</p>
                    <p class="ion-text-wrap">{{item.BatteryType}}</p>
                    </ion-col
                >
       
            </ion-row>
            <ion-row><ion-toolbar></ion-toolbar></ion-row>
       
        </ion-content>
    </ion-page>
    <ion-row class="ion-align-items-center ion-justify-content-center floating-button"
                ><ion-button shape="round" size="small" @click="goToShoppingCartt()">Add to Cart</ion-button>
            </ion-row>
    <ion-footer class="floating-footer">
        <ion-toolbar style="--background: #2F2963;">
            <ion-row>
                <ion-col
                    v-for="item in menuItems"
                    :key="item.id"
                    @click="navigate(item.route)"
                    style="
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    "
                    
                >
                    <ion-icon :icon="item.icons" size="small" color="light"></ion-icon>
                    <ion-label
                    color="light"
                        style="font-size: 10px"
                        class="ion-text-center"
                        >{{ item.title }}</ion-label
                    >
                </ion-col>
            </ion-row>
        </ion-toolbar>
    </ion-footer>
</template>

<script>
import {
    IonModal,
    IonPage,
    IonContent,
    IonButton,
    IonButtons,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonCardContent,
    IonTitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonIcon,
    IonLabel,
    IonFooter,
    IonToolbar,
    IonBadge,
    IonInput,
} from "@ionic/vue";

export default {
    components: {
        IonModal,
        IonPage,
        IonContent,
        IonButton,
        IonButtons,
        IonGrid,
        IonRow,
        IonCol,
        IonImg,
        IonCardContent,
        IonTitle,
        IonCardTitle,
        IonCardHeader,
        IonCard,
        IonIcon,
        IonLabel,
        IonFooter,
        IonToolbar,
        IonBadge,
        IonInput,
    },
    props: ["item"],
    emits: ["close"], // Define close event as emitted event

    data() {
        return {
            menuItems: [
                { id: 1, title: "Home", route: "/", icons: "home-outline" },
      {
        id: 2,
        title: "Catalog",
        route: "/catalog",
        icons: "grid-outline",
      },
      { id: 3, title: "Qr Code", route: "", icons: "qr-code-outline" },
      { id: 4, title: "Shopping Cart", route: "/shoppingCart", icons: "cart-outline" },
      { id: 5, title: "User Account", icons: "person-outline" },
            ],
        };
    },

    methods: {
        closeDialog() {
            this.$emit("close");
        },
        navigate(route) {
            console.log(this.$router);
            this.$router.push(route);
            this.closeDialog();
        },
        getStarIcon(index, rating) {
            return index <= rating ? "star" : "star-outline";
        },
        goToShoppingCartt(){
            this.closeDialog();
            this.$router.push("/shoppingCart")
        }
    },
};
</script>
<
<style scoped>
.centered-card {
    height: 200px; /* Set the desired height */
    width: 200px; /* Set the desired width */
    margin: auto; /* Center the card horizontally */
    display: flex; /* Use flexbox */
    justify-content: center; /* Center the card horizontally */
    align-items: center; /* Center the card vertically */
}
.custom-input {
    border: 1px solid var(--ion-color); /* Set the border color */
    border-radius: 5; /* Set the border radius to 0 for a square shape */
    --padding-start: 10px; /* Set the start padding */
    --padding-end: 10px; /* Set the end padding */
}
.floating-footer {
    position: fixed; /* Set position to fixed */
    bottom: 0; /* Align to the bottom of the viewport */
    width: 100%; /* Take up full width of the viewport */
}
.floating-button {
    position: fixed; /* Set position to fixed */
    bottom: 60px; /* Align to the bottom of the viewport */
    width: 100%; /* Take up full width of the viewport */
}
</style>
