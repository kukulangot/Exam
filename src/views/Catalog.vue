<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="6" v-for="item in addToCart" :key="item.id">
            <ion-card @click="openDialog(item)">
              <ion-img :src="item.img" style="height: 100px;"></ion-img>
              <ion-card-content>
                <ion-title class="ion-text-center">{{ item.title }}</ion-title>
                <ion-title class="ion-text-center" style="font-size: 20px; font-weight: bold; font-family: Arial;">
                  {{ item.price }}
                </ion-title>
                <ion-button shape="round" size="small">Add to Cart</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    
    <!-- Dialog component -->
    <ion-modal :is-open="isDialogOpen" @close="closeDialog">
      <add-to-cart-dialog :item="dialogAddToCart"  @close="closeDialog"></add-to-cart-dialog>
    </ion-modal>
  </ion-page>
</template>

<script>
import { IonModal, IonPage, IonContent, IonButton, IonGrid, IonRow, IonCol, IonCard, IonImg, IonCardContent, IonTitle, IonCardTitle, IonCardHeader } from "@ionic/vue";
import AddToCartDialog from "../components/AddToCartDialog.vue";

export default {
  components: {
    IonModal,
    IonPage,
    IonContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonImg,
    IonCardContent,
    IonTitle,
    IonCardTitle,
    IonCardHeader,
    AddToCartDialog,
  },
  data() {
    return {
      addToCart: [],
      isDialogOpen: false,
      dialogAddToCart: [],
    };
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      this.addToCart = this.$store.getters.addToCart;
    },
   openDialog(item) {

      this.isDialogOpen = true;
      this.dialogAddToCart =    item;
    },
    closeDialog() {
      this.isDialogOpen = false;
      this.dialogAddToCart= [];
    }
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
