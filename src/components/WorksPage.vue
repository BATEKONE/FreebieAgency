<template>
  <div class="works-page">
    <h1 class="works-head"><span>Посл</span>едние работы</h1>
    <div class="works-menu">
      <ul>
        <li><RouterLink to='/works' @click="selectCategory('all')">Все</RouterLink></li>
        <li><RouterLink to="/works" @click="selectCategory('web')">Веб-дизайн</RouterLink></li>
        <li><RouterLink to="/works" @click="selectCategory('brands')">Бренды</RouterLink></li>
        <li><RouterLink to="/works" @click="selectCategory('photos')">Фотографии</RouterLink></li>
        <li><RouterLink to="/works" @click="selectCategory('illustrations')">Иллюстрации</RouterLink></li>
      </ul>
    </div>
    <div class="works-back">
      <div v-for="item in filteredWorksData" :key="item.id" class="work-item">
        <img :src="item.image" alt="">
        <div class="works-item-text">
          <h1>{{ item.title }}</h1>
          <h2>{{ item.subtitle }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorksPage",
  data() {
    return {
      selectedCategory: "all",
      worksData: [
        {
          id: 1,
          image: require("../assets/img1.svg"),
          title: "100 лет фотографии",
          subtitle: "Веб-дизайн",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "web"
        },
        {
          id: 2,
          image: require("../assets/img2.svg"),
          title: "Жизнь котиков",
          subtitle: "Веб-дизайн",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "web"
        },
        {
          id: 3,
          image: require("../assets/img3.svg"),
          title: "Потерянная яблоками магия",
          subtitle: "Веб-дизайн",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "web"
        },
        {
          id: 4,
          image: require("../assets/img4.svg"),
          title: "Что-то какая-то магия",
          subtitle: "Веб-дизайн",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "web"
        },
        {
          id: 5,
          image: require("../assets/img4.svg"),
          title: "Клевый ноутбук",
          subtitle: "Веб-дизайн",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "web"
        },
        {
          id: 6,
          image: require("../assets/img1.svg"),
          title: "И снова они же",
          subtitle: "Веб-дизайн",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "web"
        },
        {
          id: 7,
          image: require("../assets/img1.svg"),
          title: "Вот это ...",
          subtitle: "Бренды",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "brands"
        },
        {
          id: 8,
          image: require("../assets/img4.svg"),
          title: "Вот это ...",
          subtitle: "Бренды",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "brands"
        },
        {
          id: 9,
          image: require("../assets/img3.svg"),
          title: "Вот это ...",
          subtitle: "Бренды",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "brands"
        },
        {
          id: 10,
          image: require("../assets/img3.svg"),
          title: "Вот это ...",
          subtitle: "Бренды",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "brands"
        },
        {
          id: 11,
          image: require("../assets/img2.svg"),
          title: "Маленькие котята",
          subtitle: "Фотографии",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "photos"
        },
        {
          id: 12,
          image: require("../assets/img1.svg"),
          title: "Маленькие котята",
          subtitle: "Фотографии",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "photos"
        },
        {
          id: 13,
          image: require("../assets/img1.svg"),
          title: "Маленькие котята",
          subtitle: "Фотографии",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "photos"
        },
        {
          id: 14,
          image: require("../assets/img1.svg"),
          title: "Заголовок 2",
          subtitle: "Иллюстрации",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          category: "illustrations"
        }
      ]
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    }
  },
  computed: {
    filteredWorksData() {
      if (this.selectedCategory === "all") {
        return this.worksData;
      } else {
        return this.worksData.filter(
            item => item.category === this.selectedCategory
        );
      }
    }
  }
};
</script>

<style lang="scss">
.works-page {
  display: grid;
  padding: 45px 100px;
  row-gap: 30px;
}

.works-head {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 80px;
  letter-spacing: 1.5px;
  color: #252525;
}

.works-head span {
  border-bottom: 2px #000 solid;
  padding-bottom: 20px;
}

ul {
  display: flex;
  align-items: center;
  column-gap: 40px;
}

li {
  list-style-type: none;
}

li a {
  font-family: 'OpenSans', sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.832px;
  text-decoration: none;
  color: #252525;
  opacity: 0.3;
}

li a:focus {
  opacity: 1;
}

.works-back {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.work-item {
  //box-shadow: 0 0 0.5px 0.5px #dcdcdc, 0 0 0.5px 0.5px #dcdcdc;
  padding: 20px;
  color: #fff;
  display: grid;
  justify-items: end;
  align-items: center;
}

.work-item img {
  max-width: 100%;
  justify-self: center;
}

.works-item-text{
  text-align: right;
}

.works-item-text h1{
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 40px;
  line-height: 60px;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #2a2022;
}

.works-item-text h2{
  font-family: 'OpenSans', sans-serif;
  font-size: 20px;
  letter-spacing: 1px;
  opacity: 0.7;

  color: #2a2022;
}

.works-item-text p{
  font-family: 'OpenSans', sans-serif;
  font-size: 13px;
  line-height: 30px;
  letter-spacing: 1px;
  opacity: 1;

  color: #2a2022;
}
</style>
