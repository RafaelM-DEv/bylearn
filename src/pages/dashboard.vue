<template>
  <q-page class="column justify-center items-center bg-cyan-10">
    <div class="my-font text-amber text-center ">
      <h2 class="anime_astronaut">bylearn.</h2>
      <h4>Group Manager</h4>
    </div>
    <div class="q-pa-md row items-start q-gutter-md">
      <!-- Campaing -->
      <q-card class="shadow-7" style="min-width: 200px;">
        <q-card-section class="bg-amber text-white">
          <div class="text-h6">Campaing</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat>Add</q-btn>
          <q-btn flat :to="{ name: 'campainglist'}">change</q-btn>
        </q-card-actions>
      </q-card>

      <!-- users -->
      <q-card class="shadow-7" style="min-width: 200px;">
        <q-card-section class="bg-cyan-7 text-white">
          <div class="text-h6">Users</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat>Add</q-btn>
          <q-btn flat>change</q-btn>
        </q-card-actions>
      </q-card>

      <!-- groups -->
      <q-card class="shadow-7" style="min-width: 200px;">
        <q-card-section class="bg-green-7 text-white">
          <div class="text-h6">Groups</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat>Add</q-btn>
          <q-btn flat>change</q-btn>
        </q-card-actions>
      </q-card>

      <!-- sites -->
      <q-card class="shadow-7" style="min-width: 200px;">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Sites</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat> Add</q-btn>
          <q-btn flat>change</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div class="my-font text-cyan-7">
      <h6 style="text-shadow: 2px 2px rgba(0,0,0, 0.2);">system in developement</h6>
    </div>
  </q-page>
</template>

<script>
export default {

}
</script>
