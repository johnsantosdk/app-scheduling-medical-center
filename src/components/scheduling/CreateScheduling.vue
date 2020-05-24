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
    <hr>
    <div class="row">
        <div class="col-sm-6  conluna-agendamento">
            <FormCreateScheduling />
        </div>
        <div class="col-sm-6  conluna-agendados">
            <ListScheduling />
        </div>
    </div>
</div>
</template>

<script>
import FindPatient from '../patient/FindPatient.vue';
import ListPatients from '../patient/ListPatients.vue';
import FormCreateScheduling from './FormCreateScheduling.vue';
import ListScheduling from './ListScheduling.vue';

export default {
    components: {
        FindPatient,
        ListPatients,
        FormCreateScheduling,
        ListScheduling
    }
}
</script>