<template>
  <div class="contacts-page">
    <h1 class="contacts-page-head"><span>Кон</span>такты</h1>
    <main class="contacts-block">
      <div class="contacts-sub-block"
           v-for="contact in contacts"
           :key="contact.id"
           :class="{ 'contacts-sub-block2': contact.id === 2}"
           @click="toggleCallOverlay(contact.id)">
        <img :src="contact.image" alt="">
        <h1>{{ contact.head }}</h1>
        <p>{{ contact.text }}</p>
      </div>
    </main>

    <footer class="contacts-block2">
      <p>
        ул. Ленина, д. 10, кв. 25, г. Москва, Россия <br>
        +7(900) 953 12 45 - info@yourmail.com
      </p>
      <div class="contacts-block2-img">
        <img src="../assets/face.svg" alt="">
        <img src="../assets/twit.svg" alt="">
        <img src="../assets/pint.svg" alt="">
      </div>
    </footer>

    <div class="under-footer">
      <p>Copyright 2023 - Все права защищены - Разработано BATEKONE</p>
    </div>

    <div class="call-overlay" v-if="showCallOverlay" @click="toggleCallOverlay(2)">
      <p>Позвоните нам: +7(900) 953 12 45</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsPage",
  data() {
    return {
      contacts: [
        {
          id: 1,
          image: require("../assets/briefcase.svg"),
          head: "Хотите работать вместе?",
          text: "Amazing. Tell us about your project!"
        },
        {
          id: 2,
          image: require("../assets/mail.svg"),
          head: "Свяжитесь с нами",
          text: "Нажмите, чтобы связаться"
        }
      ],
      showCallOverlay: false
    };
  },
  methods: {
    toggleCallOverlay(contactId) {
      if (contactId === 2) {
        this.showCallOverlay = !this.showCallOverlay;
      }
    }
  }
};
</script>

<style lang="scss">
.contacts-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.contacts-block{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.contacts-sub-block{
  display: grid;
  justify-items: center;
  row-gap: 20px;
  width: 50%;
  padding: 70px 0;
}

.contacts-sub-block h1{
  color: #373737;
  text-align: center;
  font-size: 24px;
  font-family: Oswald, sans-serif;
  letter-spacing: 2.667px;
}

.contacts-sub-block p{
  color: #373737;
  text-align: center;
  font-size: 14px;
  font-family: OpenSans, sans-serif;
  font-weight: 300;
  letter-spacing: 1.556px;
  opacity: 0.4;
}

.contacts-sub-block2 h1{
  color: #fff;
}

.contacts-sub-block2 p{
  color: #fff;
}

.contacts-sub-block2{
  background-color: #70BD59;
  width: 50%;
  padding: 70px 0;
}

.contacts-page-head span {
  border-bottom: 2px #000 solid;
  padding-bottom: 20px;
}

.contacts-page-head{
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 80px;
  letter-spacing: 1.5px;
  color: #252525;
  padding: 45px 100px;
}

.contacts-block2 {
  background: #2E2E2E;
  display: grid;
  justify-items: center;
  align-items: center;
  align-content: space-evenly;
  flex-grow: 1;
}

.contacts-block2 p{
  color: #fff;
  font-size: 13px;
  font-family: Oswald, sans-serif;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 1px;
  opacity: 0.5;
  text-align: center;
}

.contacts-block2-img{
  display: flex;
  column-gap: 21px;
}

.under-footer{
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: #252525;
  width: 100%;
}

.under-footer p{
  color: #FFF;
  font-size: 13px;
  font-family: Oswald, sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
  opacity: 0.5;
}

.call-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.call-overlay p {
  color: #FFF;
  font-size: 24px;
  font-family: Oswald, sans-serif;
  font-weight: 700;
}
</style>