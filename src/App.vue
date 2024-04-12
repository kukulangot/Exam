<template>
  <ion-app>
    <ion-header>
      <ion-toolbar class="flat-toolbar" style="--background: #2F2963;">
        <ion-row class="ion-align-items-center  ion-justify-content-between ">
          <ion-col class="ion-text-start" size="1">
            <ion-icon style="font-size: 25px ;--color: var(--ion-color-dark)" v-if="$route.path !== '/home'" color="light" name="chevron-back-outline"></ion-icon>

          </ion-col>
          <ion-col  class="ion-text-start" size="8">
            <ion-searchbar 
            style=" --background: transparent;
        --border-width: 0; padding:10px 10px"
              :search-icon="null"
              class="custom-searchbar"
              show-clear-button="false"
              color="light"
              cancel-icon="close-circle-outline"
            ></ion-searchbar>
            
          </ion-col>
          <ion-col class="ion-text-start" size="3">
            <ion-icon style="font-size: 25px " name="wallet-outline" color="light"></ion-icon>
          <div class="icon-with-badge">
            <ion-icon style="font-size: 25px" name="notifications-outline" color="light"></ion-icon>
            <ion-badge class="circular-badge" color="danger"></ion-badge>
          </div>
          </ion-col>
         
        </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- Main content of your home page -->
      <router-view></router-view>
    </ion-content>
    <ion-footer >
      <ion-toolbar style="--background: #2F2963;"  >
        <ion-row>
          <ion-col
            v-for="item in menuItems"
            :key="item.id"
            @click="navigate(item.route)"
            style="display: flex; flex-direction: column; align-items: center"
          >
            <ion-icon :icon="item.icons" size="small" color="light"></ion-icon>
            <ion-label color="light" style="font-size: 10px" class="ion-text-center">{{
              item.title
            }}</ion-label>
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-footer>
  </ion-app>
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
  IonContent,
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
    IonContent,
  },
  data: () => ({
    menuOpen: false,
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
  }),
  methods: {
    navigate(route) {
        console.log( this.$router)
      this.$router.push(route);
      this.menuOpen = true; // Close the menu after navigation
    },
  },
};
</script>

<style scoped>
.custom-button-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.custom-searchbar {
  border-radius: 15px;
}
.flat-toolbar {
  --background: transparent; /* Set the background to transparent */
  --box-shadow: none; /* Remove the box-shadow */
}
.icon-with-badge {
  position: relative;
  display: inline-block;
}

.icon-with-badge ion-badge {
  position: absolute;
  top: -1px; /* Adjust as needed */
  right: -5px; /* Adjust as needed */
}
.circular-badge {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6em;
  font-weight: bold;
}
</style>
