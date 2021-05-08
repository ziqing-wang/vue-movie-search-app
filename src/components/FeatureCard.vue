<template>
  <div class="feature-card">
    <router-link to="/movie/tt9335498">
      <img
        src="https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg"
        alt="Demon Slayer: Kimetsu No Yaiba"
        class="feature-img"
      />
      <div class="feature-details">
        <h3>Demon Slayer: Kimetsu No Yaiba</h3>
        <p>
          A family is attacked by demons and only two members survive - Tanjiro
          and his sister Nezuko, who is turning into a demon slowly. Tanjiro
          sets out to become a demon slayer to avenge his family and cure his
          sister.
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },

  setup(props) {
    console.log(props);
  },
};
</script>

<style lang="scss" scoped>
.feature-card {
  position: relative;
  width: 320px;
  margin: 16px auto;

  .feature-img {
    display: block;
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }

  .feature-details {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 16px;
    z-index: 1;

    h3,
    p {
      color: silver;
      margin-bottom: 16px;
    }
  }
}

@media (max-width: 500px) {
  .feature-card {
    width: 100%;
    margin: 0;
  }
}
</style>
