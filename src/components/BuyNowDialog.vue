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
            <h1>Profile</h1>
                <ion-card  >
                    <ion-card-content  v-for="item in confirmProfile"
                    :key="item.id">
                    
                    <ion-row>
                            <ion-col>
                                <ion-title style="font-size:18px" class="ion-text-wrap">{{ item.Name }}</ion-title>
                        <ion-title style="font-size:12px" class="ion-text-wrap">{{ item.CpNo }}</ion-title>
                        <ion-title style="font-size:12px" class="ion-text-wrap">{{ item.Email }}</ion-title>
                            </ion-col>
                           
                            </ion-row>
               
                    </ion-card-content>
                </ion-card>

                <ion-radio-group v-model="selectedAddressId">
                <ion-card  v-for="item in confirmAddress"
                    :key="item.id" >
                    <ion-card-content  >
                        <ion-row>
                            <ion-col size="9">
                        <ion-title style="font-size:18px" class="ion-text-wrap">{{ item.AddressTitle }}</ion-title>
                        <ion-title style="font-size:12px" class="ion-text-wrap">{{ item.Address }}</ion-title>
                        <ion-title style="font-size:12px" class="ion-text-wrap">{{ item.City }} {{ item.Province }}</ion-title>
                            </ion-col>
                            <ion-col size="3">
                                <ion-radio :value="item.id"></ion-radio>
           
                            </ion-col>
                            </ion-row>
              
                    </ion-card-content>
                </ion-card>
            </ion-radio-group>
            <h1>Orders</h1>
            <ion-card >
                
                <ion-row class="ion-text-center">
                    <ion-col size="4">
                        <ion-card class="ion-text-center">
                            <ion-card-content style="display: flex; justify-content: center;">
                                <ion-img :src="item.img" style="height: 50px; width: 50px"></ion-img>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                    <ion-col size="8" class="ion-text-start">
                        <ion-row class="ion-text-start">
                            <ion-title style="font-size:18px">{{ item.title }}</ion-title>
                        </ion-row>
                        <ion-row>
                            <ion-col class="ion-text-end"
                                ><ion-icon
                                    style="font-size: 25px;margin-top: 10px;"
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
                                    style="font-size: 25px ; margin-top: 10px;"
                                    name="add-circle-outline"
                                    color="primary"
                                ></ion-icon
                            ></ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-title color="medium" class="ion-text-end">{{
                                item.price
                            }}</ion-title>
                        </ion-row>
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
                                >Shipping Fee:
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
                            <ion-title
                                style="font-size: 15px; font-weight: bold" class="ion-text-wrap"
                                >21500 AMD</ion-title
                            >
                            
                        </ion-col>
                </ion-row>
              </ion-toolbar>
            </ion-card>
            <h1>Payment</h1>

            <ion-radio-group v-model="selectedPaymentId">
                <ion-card  v-for="item in confirmPayment"
                    :key="item.id" >
                    <ion-card-content  >
                        <ion-row>
                            <ion-col size="9">
                        <ion-title style="font-size:18px" class="ion-text-wrap">{{ item.Type }}</ion-title>
                        <ion-img
                            :src="item.image"
                            style="height: 50px; width: 100px"
                        ></ion-img>
                            </ion-col>
                            <ion-col size="3">
                                <ion-radio :value="item.id"></ion-radio>
           
                            </ion-col>
                            </ion-row>
              
                    </ion-card-content>
                </ion-card>
            </ion-radio-group>
            <ion-toolbar style="margin-top:40px"><ion-row></ion-row></ion-toolbar>
       
             
        </ion-content>
    </ion-page>
    <ion-toolbar color="light" class="ion-align-items-center ion-justify-content-center floating-button" style="margin-top:40px">
    <ion-row 
                >
                <ion-col size="9" class="ion-align-items-start">    
                    <ion-title style="font-size: 15px">Grand Total:</ion-title>
                    <ion-title style="font-size: 15px;color:red"> 21150</ion-title>
                </ion-col>
                <ion-col size="3" class="ion-align-items-end">
                <ion-button  shape="round" size="small" @click="submitOrder()">Submit</ion-button>

                </ion-col>
            </ion-row>
            </ion-toolbar>
            <ion-card color="success" v-if="showSuccessCard" class="ion-text-center">
        <ion-card-content>
            <ion-title>Order Successfully</ion-title>
            <ion-title>Order Number: No.19823124</ion-title>
        </ion-card-content>
    </ion-card>
   
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
    IonRadioGroup,
    IonRadio
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
        IonRadioGroup,
    IonRadio
    },
    props: ["item","confirmProfile","confirmAddress","confirmPayment"],
    emits: ["close"], // Define close event as emitted event

    data() {
        return {
            menuItems: [
                { id: 1, title: "Home", route: "/", icons: "home-outline" },
                {
                    id: 2,
                    title: "Category",
                    route: "/about",
                    icons: "grid-outline",
                },
                {
                    id: 3,
                    title: "Qr Code",
                    route: "",
                    icons: "qr-code-outline",
                },
                { id: 4, title: "Shopping Cart", icons: "cart-outline" },
                { id: 5, title: "User Account", icons: "person-outline" },
            ],
            selectedAddressId: null, // Store the selected address ID
            selectedPaymentId: null, // Store the selected address ID
            showSuccessCard: false, 
        };
    },
    created(){
            console.log(this.item,'item')
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
        submitOrder() {
            // Perform the submit order action here
            // For demo purposes, we'll just show the success card and then close it

            // Show the "Order Successfully" card
            this.showSuccessCard = true;

            // Close the "Order Successfully" card after 5 seconds
            setTimeout(() => {
                this.showSuccessCard = false;
            this.closeDialog();
            this.$router.push("/")

            }, 5000);
        },
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
    bottom: 0; /* Align to the bottom of the viewport */
    width: 100%; /* Take up full width of the viewport */
}
</style>
