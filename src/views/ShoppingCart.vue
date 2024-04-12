<template>
    <ion-page>
        <ion-content>

            <ion-grid v-for="item in confirmAddToCart" :key="item.id">
              <ion-card>
                <ion-row class="ion-text-center">
                    <ion-toolbar class="custom-toolbar"
                        ><ion-title style="font-size: 15px"
                            >SUBTOTAL:
                            <ion-label
                                style="font-size: 15px; font-weight: bold"
                                >21500 AMD</ion-label
                            ></ion-title
                        >
                    </ion-toolbar>
                </ion-row>
                <ion-row class="ion-text-center">
                    <ion-col>
                        <ion-card class="ion-text-center">
                            <ion-card-content>
                                <ion-img :src="item.img"></ion-img>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                    <ion-col class="ion-text-start">
                        <ion-row class="ion-text-start">
                            <ion-title>{{ item.title }}</ion-title>
                        </ion-row>
                        <ion-row>
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
                        <ion-row>
                            <ion-title color="medium">{{
                                item.price
                            }}</ion-title>
                        </ion-row>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="9">
                        <ion-input
                            v-model="obj.promocode"
                            class="custom-input"
                            placeholder="Enter your promo code"
                        ></ion-input>
                    </ion-col>
                    <ion-col size="3">
                        <ion-button color="medium"
                            ><ion-icon name="chevron-forward-outline"></ion-icon
                        ></ion-button>
                    </ion-col>
                </ion-row>
                <ion-toolbar color="light" >

                <ion-row >
                        <ion-col class="ion-text-wrap ion-text-start" size="6">
                            <ion-title style="font-size: 15px" class="ion-text-wrap" 
                                >SubTotal:</ion-title
                            >
                            <ion-title style="font-size: 15px" class="ion-text-wrap"
                                >Promocode:
                            </ion-title>
                            <ion-title style="font-size: 15px" class="ion-text-wrap"
                                >Total:</ion-title
                            >
                        </ion-col>
                        <ion-col class="ion-text-wrap ion-text-end" size="6">
                            <ion-title
                                style="font-size: 15px; font-weight: bold" class="ion-text-wrap"
                                >21500 AMD</ion-title
                            >
                            <ion-title
                                style="font-size: 15px; font-weight: bold; color:red;" class="ion-text-wrap"
                                >-11500 AMD</ion-title
                            >
                            <ion-title
                                style="font-size: 15px; font-weight: bold" class="ion-text-wrap"
                                >11500 AMD</ion-title
                            >
                            
                        </ion-col>
                </ion-row>
              </ion-toolbar>
            </ion-card>
            <ion-button
            class="floating-button ion-text-center"
            shape="round"
            expand="block"
            @click="openDialog(item)"
            >Buy now</ion-button
        >
            </ion-grid>
        </ion-content>

        <!-- Dialog component -->
        <ion-modal :is-open="isDialogOpen" @close="closeDialog">
            <buy-now-dialog
                :item="dialogBuyNow"
                :confirmPayment="confirmPayment"
                :confirmAddress="confirmAddress"
                :confirmProfile="confirmProfile"
                @close="closeDialog"
            ></buy-now-dialog>
        </ion-modal>
   
    </ion-page>
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
import BuyNowDialog from "../components/BuyNowDialog.vue";

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
        BuyNowDialog
    },
    data() {
        return {
            confirmAddToCart: [],
            isDialogOpen: false,
            dialogBuyNow: [],
            confirmPayment:[],
            confirmAddress:[],
            confirmProfile:[],
            obj: {},
        };
    },
    created() {
        this.get();
    },
    methods: {
        get() {
            this.confirmAddToCart = this.$store.getters.confirmAddToCart;
        },
        openDialog(item) {
            this.isDialogOpen = true;
            this.dialogBuyNow = item;
            this.confirmPayment = this.$store.getters.confirmPayment
            this.confirmAddress = this.$store.getters.confirmAddress
            this.confirmProfile = this.$store.getters.confirmProfile
            console.log( this.dialogBuyNow,' this.confirmProfile')
        },
        closeDialog() {
            this.isDialogOpen = false;
            this.dialogBuyNow = [];
        },
    },
};
</script>

<style scoped>
/* Add any additional styling here */
.custom-toolbar {
    --background: #505476;
    --color: white;
}
.custom-input {
    border: 1px solid var(--ion-color-light); /* Set the border color */
    border-radius: 5; /* Set the border radius to 0 for a square shape */
    --padding-start: 10px; /* Set the start padding */
    --padding-end: 10px; /* Set the end padding */
}
.floating-button {
    position: fixed; /* Set position to fixed */
    bottom: 20px; /* Align to the bottom of the viewport */
    width: 90%; /* Take up full width of the viewport */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Move back by half of its own width */
}

.break-line::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 1px;
    background-color: #ccc;
}

.break-line::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 1px;
    background-color: #ccc;
}
</style>
