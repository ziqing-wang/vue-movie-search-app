<template>
  <div class="home">
    <FeatureCard />
    <form @submit.prevent="searchMovies()" class="search-box">
      <input type="text" placeholder="Search a movie..." v-model="search" />
      <input type="submit" value="Search" />
    </form>

    <div class="movies-list">
      <div class="movie" v-for="(movie, index) in movies" :key="index">
        <router-link :to="'/movie/' + movie['imdbID']">
          <div class="product-image">
            <img :src="movie['Poster']" :alt="movie['Title']" />
            <div class="type">{{ movie["Type"] }}</div>
          </div>

          <div class="product-detail">
            <p>{{ movie["Year"] }}</p>
            <h2>{{ movie["Title"] }}</h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FeatureCard from "../components/FeatureCard.vue";
import { ref } from "vue";

export default {
  components: {
    FeatureCard,
  },

  setup() {
    const search = ref("");
    const movies = ref([]);

    const searchMovies = () => {
      if (search.value != "") {
        console.log(search.value);
        fetch(
          `http://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDb_API_KEY}&s=${search.value}`
        )
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.Search;
            search.value = "";
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };

    return {
      search,
      movies,
      searchMovies,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;

  .search-box {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin: 16px auto;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      /* for search input */
      &[type="text"] {
        width: 100%;
        color: #fff;
        opacity: 0.7;
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;

        &::placeholder {
          color: #f3f3f3;
        }

        &:focus {
          opacity: 1;
          box-shadow: 0px 3px 6px rgba($color: #000000, $alpha: 0.2);
        }
      }

      /* for submit input */
      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #42b983;
        cursor: pointer;
        padding: 16px;
        border-radius: 8px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;

        &:hover {
          background-color: #3b8070;
        }
      }
    }
  }

  /** search result lists */
  .movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 8px;

    /** for each movie card */
    .movie {
      max-width: 240px;
      height: 100%;
      display: flex;
      flex-direction: column;
      flex: 1 1 50%;
      padding: 16px 8px;

      /** movie image with movie type */
      .product-image {
        position: relative;
        display: block;

        img {
          display: block;
          width: 100%;
          height: 275px;
          object-fit: cover;
        }
        .type {
          position: absolute;
          left: 0;
          bottom: 16px;
          background-color: #42b983;
          color: #fff;
          padding: 8px 16px;
          text-transform: capitalize;
        }
      }

      /** movie details */
      .product-detail {
        background-color: #496583;
        padding: 16px 8px;
        flex: 1 1 100%;

        /** which year has been created */
        p {
          color: #aaa;
          font-size: 14px;
        }

        /** movie title */
        h2 {
          color: #fff;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .movie {
    max-width: 50%;
  }
}
</style>
