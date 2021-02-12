<template>
  <q-page class="column justify-center items-center bg-cyan-10">
    <div class="my-font text-amber text-center ">
      <h3>Select campaing to change</h3>
    </div>
    <!-- list -->
    <div v-for="(item, index) in campaing" :key="index" class="q-pa-md" style="max-width: 350px">
      <q-card class="shadow-7" style="min-width: 300px;">
        <q-card-section class="bg-amber text-white">
          <div class="text-h6">{{ item.name }}</div>
          <div class="text-subtitle2">{{ item.slug }} - {{ item.owner }}</div>
        </q-card-section>
        <div v-if="item.active" class="bg-amber">
          <div class="q-pl-md text-white q-pb-md">
          <q-icon name="fiber_manual_record" color="green"/>
          Active
          </div>
        </div>
         <div v-if="!item.active" class="bg-amber">
          <div class="q-pl-md text-white q-pb-md">
            <q-icon name="fiber_manual_record" color="red"/>
             Inative
          </div>
        </div>
        <q-separator />

        <q-card-actions align="right">
          <q-btn flat>delete</q-btn>
          <q-btn flat :to="{ name: 'campaingedit'}">edit</q-btn>
        </q-card-actions>
      </q-card>
  </div>
  </q-page>
</template>

<script>

const campaing = [
  {
    name: 'Jornada Python Faixa preta',
    slug: 'Jornada',
    owner: 'Bylearn',
    active: true
  },
  {
    name: 'Jornada Python Faixa branca',
    slug: 'Jornada',
    owner: 'Bylearn',
    active: false
  },
  {
    name: 'Jornada Python Faixa azul',
    slug: 'Jornada',
    owner: 'Bylearn',
    active: true
  }
]

export default {
  data () {
    return {
      campaing
    }
  }
}
</script>
