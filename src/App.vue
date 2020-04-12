<template lang="pug">
  .wrapper
    header
      .navbar
        .container
          .navbar-content
            router-link.header-logo(
              to="/"
            ) Shopping List
            .button-burger(
              @click="showMenu = !showMenu"
              :class="{ active: showMenu}"
            )
              span.line.line-1
              span.line.line-2
              span.line.line-3
            .navbar-list__wrapper(
              :class="{ active: showMenu}"
            )
              ul.navbar-list
                li.navbar-item(
                  v-for="link in links"
                  :key="link.url"
                  @click="showMenu = false"
                )
                  router-link.navbar-link(
                    :to='`${link.url}`'
                    ) {{ link.title }}
    router-view
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showMenu: false,
      links: [
        {title: 'Home', url: '/'},
        {title: 'Login', url: '/login'},
        {title: 'Registration', url: '/registration'}
      ]
    }
  }
}
</script>

<style lang="stylus">
</style>
