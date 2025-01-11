<template>
      <div class="px-4 mx-auto max-w-screen-xl lg:px-2">
        <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <template v-for="member in members" :key="member.id">
            <OurTeamMember :data="member" />
          </template>
        </div>
      </div>



</template>



<script>
import OurTeamMember from '@/components/reusable/OurTeamMember.vue'

export default {
    name: 'OurTeamCard',
    components: {
        OurTeamMember
    },
    props: {
        showTeam: {
            type: Boolean,
            required: false,
            default: false
        },
        members: {
            type: Array,
            required: false,
            default: () => []
        }
    }
}
</script>