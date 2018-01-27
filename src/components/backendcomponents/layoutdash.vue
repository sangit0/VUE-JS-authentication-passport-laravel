
<template>
        <div>
                   <headerComponents></headerComponents>
                            <router-view></router-view>
        </div>
</template>


<script>
import HeaderComponents from './Admin/headerComponents.vue';

    export default{
        components: {
              HeaderComponents
          }
    }
</script>

<style>

</style>
