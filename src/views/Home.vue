<template>
    <ion-page>
        <ion-content >
      <ion-title style="margin-top:30px">Whats New?</ion-title>

      <ion-grid>
        <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col size="1" class="ion-text-center">
                <ion-icon size="medium" @click="previousItem" :disabled="currentIndex === 0" name="arrow-back-circle-outline"></ion-icon>
            </ion-col>
            <ion-col size="10" v-for="(item, index) in news" :key="item.id" v-show="currentIndex === index">
                <ion-img :src="item.img" style="height: 300px;"></ion-img>
            </ion-col>
            <ion-col size="1" class="ion-text-center">
                <ion-icon size="medium" @click="nextItem" :disabled="currentIndex === news.length - 1" name="arrow-forward-circle-outline"></ion-icon>
            </ion-col>
        </ion-row>
    </ion-grid>
      <ion-title>New Products</ion-title>
      <ion-grid>
        <ion-row class="ion-align-items-center ion-justify-content-center">
          <ion-col v-for="item in newProducts" :key="item.id">
            <ion-card @click="goToShoppingCart()">
                <ion-img :src="item.img" style="height: 100px;"></ion-img>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-title>Best Selling</ion-title>
      <ion-grid>
        <ion-row class="ion-align-items-center ion-justify-content-center">
          <ion-col v-for="item in bestSelling" :key="item.id">
            <ion-card>
                <ion-img :src="item.img" style="height: 150px;"></ion-img>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonApp,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonFooter,
    IonButton,
    IonIcon,
    IonRouterOutlet,
    IonButtons,
    IonMenuToggle,
    IonRow,
    IonCol,
    IonLabel,
    IonSearchbar,
    IonImg,
    IonBadge,
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonThumbnail,
    IonGrid,
} from "@ionic/vue";

export default {
    components: {
        IonApp,
        IonMenu,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonFooter,
        IonButton,
        IonIcon,
        IonRouterOutlet,
        IonButtons,
        IonMenuToggle,
        IonRow,
        IonCol,
        IonLabel,
        IonSearchbar,
        IonImg,
        IonBadge,
        IonPage,
        IonContent,
        IonCard,
        IonCardContent,
        IonThumbnail,
        IonGrid
    },
    name: "Home",
    // other component options
    data: () => ({
        news: [],
        newProducts:[],
        bestSelling:[],
        currentIndex: 0, // Initialize the current index
    }),
    created() {
        this.get();
    },
    computer: {
    },
    methods: {

        get() {
            this.addToCart = this.$store.getters.addToCart;
            this.news = this.$store.getters.news;
            this.newProducts = this.$store.getters.newProducts;
            this.bestSelling = this.$store.getters.bestSelling;
            
        },
        nextItem() {
            if (this.currentIndex < this.news.length - 1) {
                this.currentIndex++;
            }
        },
        previousItem() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        goToShoppingCart(){
            this.$router.push("/catalog")
        }
    },
};
</script>

<style scoped>
#container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
}

#container a {
    text-decoration: none;
}

</style>
