<template>
  <header>
    <router-link to="/">
      <h1><span>Vue</span>Movies</h1>
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;

  &::selection {
    background-color: transparentize($color: #42b983, $amount: 0.5);
  }
}

body {
  background-color: #35495e;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2c3d4e;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);

  h1{
    color: #fff;

    span{
      color: #42b983;
    }
  }
}
</style>
