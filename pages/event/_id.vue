<template>
  <div>
    <h1>Event # {{ event.id }}</h1>
    <code>{{ event.title }}</code>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  head() {
    return {
      title: this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Content description'
        }
      ]
    }
  },
  async fetch({ store, error, params }) {
    console.log('12')
    try {
      await store.dispatch('events/fetchEvent', params.id)
    } catch (e) {
        error({
        statusCode: 503,
        message: 'Unable to fetch event #' + params.id
      })
    }
  },
  computed: mapState({
    event: state => state.events.event
  })
};
</script>

<style lang="scss" scoped>

</style>
