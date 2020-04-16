<template lang="pug">
  .content-wrapper
    section
      .container
        h1.ui-title-1 Home
        form(@submit.prevent="addProduct")
          .add-products-form(:class="{ 'errorInput': $v.productName.$error }")
            .product-add
              input(
                  type="text"
                  placeholder="Введите название продукта ..."
                  v-model="productName"
                  @keyup.enter="addProduct"
                  :class="{ errorInput: $v.productName.$error }"
                  @change="$v.productName.$touch()"
              )
              button.button.button--round.button-default(type="submit" :disabled="submitStatus === 'PENDING'") Добавить
            .add-products-info
              .messages-error
               .error(v-if="!$v.productName.required") Поле должно быть заполнено
              .messages-info
                p.typo__p(v-if="submitStatus === 'OK'") Продукт добавлен
                p.typo__p(v-if="submitStatus === 'PENDING'") Добавляем...
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
import { required } from 'vuelidate/lib/validators'
export default {
  computed: {
    products () {
      return this.$store.getters.getProducts
    }
  },
  data () {
    return {
      productName: '',
      submitStatus: null
    }
  },
  methods: {
    addProduct () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
        const newProduct = {
          productName: this.productName,
          isVisible: false
        }
        this.$store.dispatch('addProduct', newProduct)
        this.productName = ''
        this.$v.$reset()
      }
    }
  },
  validations: {
    productName: {
      required
    }
  }
}
</script>
<style lang="stylus" scoped>
.add-products-form
 .error
    display none
    margin-bottom 8px
    font-size 13.4px
    color #fc5c65
  &.errorInput
    .error
      display block

.product-add
  display flex
  justify-content space-between
  align-items center
  margin-bottom0
  input
    &.errorInput
      border-color #fc5c65
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
