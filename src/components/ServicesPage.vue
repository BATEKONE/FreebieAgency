<template>
  <div class="services-page">
    <h1 class="services-head"><span>Наш</span>и сервисы</h1>
    <div class="services-item">
      <div v-for="inf in inform" :key="inf.id" class="services-sub-item">
        <div class="services-container-head">
          <h1>{{inf.head}}</h1>
          <img :src="inf.image" alt="">
        </div>
        <p>{{inf.text}}</p>
        <h1 class="services-sub-item-head">{{inf.cont}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesPage",
  data(){
    return{
      inform:[
        {
          id: 1,
          head: "Брендинг",
          image: require('../assets/services1.svg'),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          cont: "Читать больше"
        },
        {
          id: 2,
          head: "Дизайн",
          image: require('../assets/services2.svg'),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          cont: "Читать больше"
        },
        {
          id: 3,
          head: "Разработка",
          image: require('../assets/services3.svg'),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          cont: "Читать больше"
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.services-page {
  display: grid;
  padding: 45px 100px;
  row-gap: 30px;
  height: 80vh;
  align-content: space-evenly;
}

.services-head {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 80px;
  letter-spacing: 1.5px;
  color: #252525;
}

.services-head span {
  border-bottom: 2px #000 solid;
  padding-bottom: 20px;
}

.services-item{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  position: relative;
}

.services-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  border-bottom: 2px #70BF73 solid;
  margin-bottom: -50px;
}

.services-container-head h1{
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 1.28px;
  text-transform: uppercase;

  color: #252525;
}

.services-container-head{
  display: flex;
  justify-content: space-between;
}

.services-container-head img{
  box-shadow: 0 0 20px #DBDBDB;
  width: 40px;
}

.services-sub-item{
  display: grid;
  row-gap: 50px;
}

.services-sub-item p{
  font-family: 'OpenSans', sans-serif;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 1.008px;

  color: #777777;
}

.services-sub-item-head{
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.64px;
  text-transform: uppercase;

  color: #252525;

  mix-blend-mode: normal;
  opacity: 0.5;
}

</style>