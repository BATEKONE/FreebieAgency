<template>
  <div class="main-page" :style="backgroundStyle" :class="{ 'transitioning': transitioning }">
    <header>
      <RouterLink
          class="header-head"
          v-for="head in headings"
          :key="head.id"
          :to="head.path">
        {{ head.text }}</RouterLink>
    </header>

    <main>
      <h1 class="main-head">Реализация величайших идей</h1>
      <p class="main-text">Увлеченная креативная студия, помогающая стартапам развивать свой бизнес!</p>
    </main>

    <footer id="#about">
      <h1 class="footer-head"
          v-for="(num, index) in numbers"
          :key="num.id"
          :value="num"
          :class="{ 'active': num.id === activeNumber }">
        <span class="number">{{ formatNumber(index + 1) }}</span>
      </h1>
    </footer>
  </div>

  <div class="main-page2">
    <div class="image">
      <img src="" alt=""/>
      <img src="" alt="">
      <img src="" alt="">
    </div>
    <h1 class="main-page2-head1">Мы</h1>
    <h2 class="main-page2-head2">Команды</h2>
  </div>
</template>

<script>

export default {
  name: 'MainPage',
  data() {
    return {
      headings: [
        { id: 1, text: "Работы", path: '/works'},
        { id: 2, text: "Услуги", path: '/services'},
        { id: 3, text: "Блог", path: '/blog'},
        { id: 4, text: "Контакты", path: '/contacts'}
      ],
      numbers: [
        { id: 1, numb: "01" },
        { id: 2, numb: "02" },
        { id: 3, numb: "03" },
      ],
      backgroundImages: [
        require('@/assets/backHome01.png'),
        require('@/assets/backHome02.png'),
        require('@/assets/backHome03.png'),
      ],
      activeNumber: 1,
      transitioning: false
    };
  },
  mounted() {
    setInterval(() => {
      this.changeBackground();
    }, 5000);
  },
  methods: {
    changeBackground() {
      const totalNumbers = this.numbers.length;
      this.transitioning = true;

      setTimeout(() => {
        this.activeNumber = (this.activeNumber % totalNumbers) + 1;
        this.transitioning = false;
      }, 1000);
    },
    formatNumber(index) {
      const paddedIndex = index.toString().padStart(2, '0');
      return paddedIndex;
    },
  },
  computed: {
    backgroundStyle() {
      const activeNumberIndex = this.activeNumber - 1;
      const backgroundImage = `url("${this.backgroundImages[activeNumberIndex]}")`;
      return {
        'background-image': backgroundImage,
      };
    },
  },
}
</script>

<style scoped lang="scss">

.image{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.image img{
  width: 240px;
  height: 300px;
  position: absolute;
}

.image img:first-child{
  z-index: 3;
  left: 450px;
  top: 160px;
  background: url("../assets/Image1.png");
}

.image img:nth-child(2){
  z-index: 2;
  justify-content: center;
  background: url("../assets/GreenBox.png") no-repeat center center;
}

.image img:last-child{
  z-index: 1;
  bottom: 160px;
  right: 450px;
  background: url("../assets/Image2.png");
}

.main-page{
  background: no-repeat center;
  height: 100vh;
  display: grid;
  align-items: center;
  align-content: space-between;
  //transition: background-image 0.5s ease-in-out;
  background-size: cover;
  color: #fff;
}

header{
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 40px 0;
  width: 90%;
  column-gap: 50px;
}

.header-head{
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1.9px;
  color: #fff;
  position: relative;
  text-decoration: none;
}

.header-head::before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #4CAF50;
  transform: scaleX(0);
  transform-origin: left;
}

.header-head:hover::before {
  transform: scaleX(1);
}

main{
  display: grid;
  justify-content: center;
  justify-items: center;
  row-gap: 25px;
}

.main-head{
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 52px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
}

.main-text{
  font-family: 'OpenSans', sans-serif;
  font-size: 20px;
  letter-spacing: 1.3px;
  mix-blend-mode: normal;
  opacity: 0.6;
  text-align: center;
}

footer{
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  padding-bottom: 14px;
}

.footer-head{
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  font-size: 28px;
  letter-spacing: 1.1px;

  color: rgba(255, 255, 255, 0.5);
}

.active {
  font-size: 40px;
  position: relative;
  color: #fff;
}

.active::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  margin-bottom: 20px;
  background-color: #4CAF50;
  transform: scaleX(1);
}

.transitioning {
  transition: none;
}
</style>
