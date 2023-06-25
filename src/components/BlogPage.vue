<template>
  <div class="blog-page">
    <h1 class="blog-page-head"><span>Ком</span>анда</h1>
    <div class="blog-text-one">
      <figure
          class="blog-text-two"
          v-for="block in blocks"
          :key="block.id"
          v-on:mouseover="toggleDescription(block)">
        <img :src="block.img" alt="">
        <figcaption>
          <h1>{{ block.title }}</h1>
          <h2>{{ block.work }}</h2>
          <p>{{ block.description }}</p>
        </figcaption>
      </figure>
      <div class="block-details" v-if="activeBlock">
        <p>{{ activeBlock.text }}</p>
        <p>
          <span class="blog-p-style">{{ activeBlock.title + " / "}}</span>
          {{ activeBlock.work }}
        </p>
        <div class="star-rating">
          <span class="star"
                v-for="star in 5"
                :key="star.id"
                :class="{ 'star-filled': star <= activeBlock.stars }"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPage",
  data() {
    return {
      blocks: [
        {
          id: 1,
          img: require("../assets/team1.png"),
          title: "Том Джонс",
          work: "Креативный директор",
          description: "Создавай простым то, что могло быть сложным!",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim " +
              "veniam, quis nostrud exercitation " +
              "ullamco laboris nisi ut aliquip ex" +
              " ea commodo consequat.",
          stars: 4,
        },
        {
          id: 2,
          img: require("../assets/team2.png"),
          title: "София Краснина",
          work: "Арт директор",
          description: 'Будь легче, когда можешь "быть"!',
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim " +
              "veniam, quis nostrud exercitation " +
              "ullamco laboris nisi ut aliquip ex" +
              " ea commodo consequat.",
          stars: 5,
        },
        {
          id: 3,
          img: require("../assets/team3.png"),
          title: "Арина Велидинчева",
          work: "Дизайнер",
          description: "Твори, создавай, одним словом - вдохновляйся на подвиги",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim " +
              "veniam, quis nostrud exercitation " +
              "ullamco laboris nisi ut aliquip ex" +
              " ea commodo consequat.",
          stars: 3,
        },
      ],
      activeBlock: null,
    };
  },
  methods: {
    toggleDescription(block) {
      if (this.activeBlock === block) {
        this.activeBlock = null;
      } else {
        this.activeBlock = block;
      }
    },
  },
};
</script>

<style lang="scss">
.star-rating {
  display: flex;
  align-items: center;
  justify-content: center;
}

.star {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url('../assets/1.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.star-filled {
  background-image: url('../assets/2.png');
}

.block-details span{
  color: #000;
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
  font-family: Oswald, sans-serif;
  letter-spacing: 1.152px;
}

.block-details {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px 250px;
  color: #000;
  opacity: 0;
  transition: opacity 0.3s, bottom 0.3s;
}

.block-details p{
  font-family: 'OpenSans', sans-serif;
  font-size: 14px;
  line-height: 31px;
  letter-spacing: 0.896px;

  color: #373737;
}

.blog-text-one:hover .block-details {
  opacity: 1;
  bottom: 0;
}
.blog-page {
  display: grid;
  padding: 45px 100px;
  row-gap: 30px;
}

.blog-page-head {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 80px;
  letter-spacing: 1.5px;
  color: #252525;
}

.blog-page-head span {
  border-bottom: 2px #000 solid;
  padding-bottom: 20px;
}

.blog-text-one {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 0;
  width: 100%;
  list-style: none;
  text-align: center;
}

.blog-text-one figure {
  position: relative;
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  background: #a4a4a4;
  text-align: center;
  cursor: pointer;
}

.blog-text-one figure img {
  position: relative;
  display: block;
  min-height: 100%;
  opacity: 0.8;
}

.blog-text-one figure figcaption {
  color: #fff;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.blog-text-one figure figcaption::before,
.blog-text-one figure figcaption::after {
  pointer-events: none;
}

.blog-text-one figure figcaption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.blog-text-one figure h1 {
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 26px;
  letter-spacing: 1.2px;
}

.blog-text-one figure h1,
.blog-text-one figure h2,
.blog-text-one figure p {
  margin: 0;
}

.blog-text-one figure h2{
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 1.2px;

  color: #fff;
}

.blog-text-one figure p {
  font-family: 'OpenSans', sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 20px;
}

figure.blog-text-two figcaption::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(top, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
  background: linear-gradient(to bottom, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
  content: '';
  opacity: 0;
  -webkit-transform: translate3d(0,50%,0);
  transform: translate3d(0,50%,0);
}

figure.blog-text-two h1 {
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  color: #fff !important;
  -webkit-transition: -webkit-transform 0.35s, color 0.35s;
  transition: transform 0.35s, color 0.35s;
  -webkit-transform: translate3d(0,-50%,0);
  transform: translate3d(0,-50%,0);
}

figure.blog-text-two figcaption::before,
figure.blog-text-two h2,
figure.blog-text-two p {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.blog-text-two h2{
  position: absolute;
  bottom: 10%;
  left: 0;
  padding: 2em;
  width: 100%;
  opacity: 0;
  -webkit-transform: translate3d(0,10px,0);
  transform: translate3d(0,10px,0);
}

figure.blog-text-two p {
  position: absolute;
  bottom: 2%;
  left: 0;
  padding: 2em;
  width: 100%;
  opacity: 0;
  -webkit-transform: translate3d(0,10px,0);
  transform: translate3d(0,10px,0);
}

figure.blog-text-two:hover h1 {
  color: #fff;
  -webkit-transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
  transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
}

.blog-text-one figure h1::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  margin-bottom: -30px;
  width: 25%;
  height: 3px;
  background-color: #fff;
}

figure.blog-text-two:hover figcaption::before,
figure.blog-text-two:hover h2,
figure.blog-text-two:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
</style>