<template>
  <div class="container">
    <div class="brif-info">
      <div class="movie-img">
        <img :src="movie['Poster']" :alt="movie['Title']" />
      </div>

      <div class="movie-info">
        <h1>{{ movie["Title"] }}</h1>
        <table>
          <tr v-for="(value, propertyName) in briefInfo" :key="value">
            <th>{{ propertyName }}:</th>
            <td>{{ value }}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="plot">
      <h2>Plot</h2>
      <p>" {{ movie["Plot"] }} "</p>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onBeforeMount, computed } from "vue";

export default {
  setup() {
    const movieId = useRoute().params.id;
    const movie = ref({});

    onBeforeMount(() => {
      fetch(
        `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDb_API_KEY}&i=${movieId}&plot=full`
      )
        .then((response) => response.json())
        .then((data) => (movie.value = data))
        .catch((err) => {
          console.error(err);
        });
    });

    //filter the movie object to get the brief infos of the movie
    const briefInfo = computed(() => {
      const filteredKeys = [
        "Year",
        "Genre",
        "Director",
        "Writer",
        "Actors",
        "Language",
        "Country",
        "imdbRating",
      ];

      const filteredInfo = Object.assign(
        {},
        ...filteredKeys.map((key) => {
          return { [key]: movie.value[key] };
        })
      );
      return filteredInfo;
    });

    return {
      movieId,
      movie,
      briefInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 16px 10%;

  h1,
  h2 {
    color: #fff;
    padding: 10px;
  }

  .brif-info {
    display: grid;
    grid-template-columns: 1fr 3fr;
    background-color: #496583;

    .movie-img {
      display: block;

      img {
        height: 100%;
        object-fit: cover;
      }
    }

    .movie-info {
      padding: 10px;

      h1 {
        color: #fff;
        padding: 10px;
      }
      table {
        color: silver;
        text-align: left;

        th,
        td {
          padding: 10px;
        }
      }
    }
  }

  .plot {
    margin: 24px;
    p {
      color: silver;
      line-height: 1.5;
    }
  }
}
@media (max-width: 1000px) {
  .container {
    margin: 16px 0;
  }
}

@media (max-width: 500px) {
  .container {
    .brif-info {
      grid-template-columns: 1fr;
      margin: 16px 0;

      .movie-img{
        width: 100%;
        img{
          width: 100%;
        }
      }
    }
  }
}
</style>