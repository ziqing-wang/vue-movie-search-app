<template>
  <div class="feature-card">
    <router-link to="/movie/tt3896198">
      <img
        src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
        alt="Guardians of the Galaxy"
        class="feature-img"
      />
      <div class="feature-details">
        <h3>Guardians of the Galaxy</h3>
        <p>
          The Guardians struggle to keep together as a team while dealing with
          their personal family issues, notably Star-Lord's encounter with his
          father the ambitious celestial being Ego.
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
