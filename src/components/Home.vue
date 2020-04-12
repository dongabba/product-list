<template lang="pug">
  .content-wrapper
    section
      .container
        h1.ui-title-1 Home
        input(
            type="text"
            placeholder="Введите название продукта ..."
            v-model="productName"
            @keyup.enter="addProduct"
        )
        .addButton
          a.button--round.button--small.button.button-primary(
            type='submit'
            @click="addProduct"
            ) Добавить
    section
      .container
        .product-list
          .product-list__item(
              v-for="product in products"
              :key="product.id"
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
  data () {
    return {
      productId: 4,
      productName: '',
      products: [
        {
          id: 1,
          productName: 'Бананы',
          isVisible: false
        },
        {
          id: 2,
          productName: 'Картофель',
          isVisible: false
        },
        {
          id: 3,
          productName: 'Водка',
          isVisible: false
        }
      ]
    }
  },
  methods: {
    addProduct () {
      if (this.productName === '') {
        return
      }
      this.products.push({
        id: this.productId,
        productName: this.productName,
        isVisible: false
      })

      // Reset
      this.productId += 1
      this.productName = ''
    }
  }
}
</script>
<style lang="stylus" scoped>
.addButton
  align-items left

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
