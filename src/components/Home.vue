<template lang="pug">
  .content-wrapper
    section
      .container
        h1.ui-title-1 Home
        .product-add
          input(
              type="text"
              placeholder="Введите название продукта ..."
              v-model="productName"
              @keyup.enter="addProduct"
          )
          .button.button--round.button-default(
              @click="addProduct"
              ) Добавить
    section
      .container
        .product-list
          .product-list__item(
              v-for="product in products"
              :key="product.title"
          )
            .ui-checkbox-wrapper
                input.ui-checkbox(
                  type='checkbox'
                  v-model="product.isVisible"
                )
            span.ui-text-regular(
                :class="{ visible: product.isVisible }"
            ) {{ product.productName }}
</template>
<script>
export default {
  computed: {
    products () {
      return this.$store.getters.getProducts
    }
  },
  data () {
    return {
      productName: ''
    }
  },
  methods: {
    addProduct () {
      if (this.productName === '') {
        return
      }
      const newProduct = {
        productName: this.productName,
        isVisible: false
      }

      this.$store.dispatch('addProduct', newProduct)

      // Reset
      this.productName = ''
    }
  }
}
</script>
<style lang="stylus" scoped>
.product-add
  display flex
  justify-content space-between
  align-items center
  input
     margin-bottom 0
     height 42px
     margin-right 10px

.product-list__item
  display flex
  margin-bottom 12 px
  &:last-child
    margin-bottom 0
  .ui-checkbox-wrapper
    margin-right 12px

.visible
  text-decoration-line line-through
  color #C0C0C0
</style>
