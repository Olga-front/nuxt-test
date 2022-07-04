<template>
  <div>
    <h1>Events</h1>

    <event-card v-for="event in events"
                :key="event.id"
                :event="event"
                :data-index="event.id"></event-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EventCard from '@/components/EventCard.vue'

export default {
  components: {
    EventCard
  },

  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
        error({
        statusCode: 503,
        message: 'Unable to fetch Events at this time. Please try again'
      })
    }
  },

  head() {
    return {
      title: 'Index Page Title',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Content description'
        }
      ]
    }
  },

  computed: mapState({
    events: state => state.events.events
  })
};
</script>
