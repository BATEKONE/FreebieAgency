<template>
  <div class="blog-page">
    <h1 class="blog-page-head"><span>Ком</span>анда</h1>
    <div class="blog-text-one">
      <figure class="blog-text-two" v-for="block in blocks"
              :key="block.id">
        <img :src="block.img" alt="">
        <figcaption>
          <h1>{{block.title}}</h1>
          <h2>{{block.work}}</h2>
          <p>{{block.description}}</p>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPage",
  data(){
    return{
      blocks: [
        {
          id: 1,
          img: require("../assets/image1.svg"),
          title: "Том Джонс",
          work: "Креативный директор",
          description: "Создавай простым то, что могло быть сложным!"
        },
        {
          id: 2,
          img: require("../assets/image2.svg"),
          title: "Том Джонс",
          work: "Креативный директор",
          description: "Создавай простым то, что могло быть сложным!"
        },
        {
          id: 3,
          img: require("../assets/image3.svg"),
          title: "Том Джонс",
          work: "Креативный директор",
          description: "Создавай простым то, что могло быть сложным!"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
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
  background: #527c82;
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
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
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
  word-spacing: -0.15em;
  font-weight: 300;
}

.blog-text-one figure h1 {
  font-weight: 800;
}

.blog-text-one figure h1,
.blog-text-one figure h2,
.blog-text-one figure p {
  margin: 0;
}

.blog-text-one figure h2,
.blog-text-one figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
  margin-bottom: -10px; /* Устанавливаем отрицательный margin-bottom */
}

/* Эффект при наведении */
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
  top: 50%;
  left: 0;
  width: 100%;
  color: #f66d52 !important;
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
  bottom: 20%;
  left: 0;
  padding: 2em;
  width: 100%;
  opacity: 0;
  -webkit-transform: translate3d(0,10px,0);
  transform: translate3d(0,10px,0);
}

figure.blog-text-two p {
  position: absolute;
  bottom: 0;
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

figure.blog-text-two:hover figcaption::before,
figure.blog-text-two:hover h2,
figure.blog-text-two:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
</style>