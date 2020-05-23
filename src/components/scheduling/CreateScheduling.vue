<template>
<div>
    <div class="row">
        <!-- <h2 class="alinhado-ao-centro">Agendamento de Consultas</h2> -->
        <FindPatient />
    </div>
    <hr>
    <div class="row">
        <ListPatients />
    </div>
    <div class="row">
        <div class="col-sm-6  conluna-agendamento">
            <FormCreateScheduling />
            
        </div>
        <div class="col-sm-6  conluna-agendados">
            <!-- <h2 class="h2">Coluna 2 table com os pcientes agendados</h2> -->
        </div>
    </div>
</div>
</template>

<script>
import FindPatient from '../patient/FindPatient.vue';
import ListPatients from '../patient/ListPatients.vue';
import FormCreateScheduling from './FormCreateScheduling.vue';

export default {
    components: {
        FindPatient,
        ListPatients,
        FormCreateScheduling
    }
}
</script>