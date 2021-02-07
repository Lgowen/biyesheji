<template>
  <div class="container">
    <img class="image"
         v-for="item in list"
         :key="item"
         :src="item" />
  </div>
</template>

<script>
function getRandomPic () {
  const rans = [-100, -50, 0, 50, 100]
  const randomIndex = (num) => Math.floor(num * rans.length)
  const randomLength = (num) => 300 + rans[randomIndex(num)]
  const baseUrl = 'http://placehold.it/'
  return `${baseUrl}${randomLength(Math.random())}x${randomLength(Math.random())}/${Math.random().toString(16).slice(2, 8)}`
}

export default {
  data: () => ({
    list: []
  }),
  mounted () {
    let n = 50
    while (n--) this.list.push(getRandomPic())
  },
  generate () {

  }
}
</script>

<style lang="scss" scoped>
.container {
  .image {
    height: 100px;
    margin: 5px;
  }
}
</style>  