<template>
<b-container>
    <b-row><!-- Inicio dos campos de convenio -->
<!-- Inicio dos campos do paciente -->
        <b-col sm="2">
            <label for="IdPatientName">Nome do Convênio:</label>
        </b-col>
        <b-col sm="5">
            <b-form-input
                id="IdPatientName"
                size="sm"
                placeholder="Digite o nome do convênio"
                autofocus
                required
            ></b-form-input>
        </b-col>
    </b-row>
    <!-- <b-row>
        <b-col sm="1">
            <label for="IdCon">Plano:</label>
        </b-col>
        <b-col sm="4">
            <b-form-select size="sm" v-model="plano" :options="planos" class="mb-3">
                <template>
                    <b-form-select-option :value="null" disabled>-- Tipo do Plano --</b-form-select-option>
                </template>
            </b-form-select>
        </b-col>
    </b-row> -->
    <hr>
    <b-row><!-- Botao de cadastro -->
        <b-col>
            <b-button variant="outline-primary">Cadastrar</b-button>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>