
<template>
        <div>

            <b-navbar toggleable="md" type="dark" variant="info">

              <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

              <b-navbar-brand href="#">Homebar</b-navbar-brand>

              <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">

                  <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                  </b-nav-form>

                  <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                      <strong>Sangit</strong>
                    </template>
                    <b-dropdown-item href="#">Signout</b-dropdown-item>
                  </b-nav-item-dropdown>
                </b-navbar-nav>

              </b-collapse>
            </b-navbar>

            <!-- navbar-1.vue -->
        </div>

</template>


<script>

    export default{

    }
</script>

<style>

</style>
