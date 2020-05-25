<template>
<b-container>
    <b-row><!-- Inicio dos campos de especialidade-medico -->
        <b-col sm="3">
            <label for="IdEsp">Especialidade:</label>
        </b-col>
        <b-col sm="9">
            <b-form-select id="IdEsp" size="sm" class="mb-3">
                <template>
                    <b-form-select-option :value="null" disabled>-- Por Favor Escolha Para Qual Especialidade Agendar --</b-form-select-option>
                </template>
            </b-form-select>
        </b-col>
    </b-row>
    <b-row>
        <b-col sm="3">
            <label for="IdMed">Médico:</label>
        </b-col>
        <b-col sm="9">
            <b-form-select id="IdMed" size="sm" class="mb-3">
                <template>
                    <b-form-select-option :value="null" disabled>-- Por Favor Escolha Para Qual Médico Agendar --</b-form-select-option>
                </template>
            </b-form-select>
        </b-col>
    </b-row><!-- Final dos campos de especialidade-medico -->
    <b-row>
        <b-col sm="3">
            <label for="IdDate">Data:</label>
        </b-col>
        <b-col sm="9">
            <b-form-datepicker
                class="mb-3"
                id="IdDate"
                size="sm"
                type="date"
                local="pt-BR"
                placeholder="Escolha a data da consulta"
            ></b-form-datepicker>
        </b-col>
    </b-row>
    <b-row>
        <b-col sm="3">
            <label for="IdTur">Horário:</label>
        </b-col>
        <b-col sm="3">
            <b-form-input
                id="IdTur"
                type="time"
                size="sm"
                placeholder=""
            ></b-form-input>
        </b-col>
    </b-row>
    <hr>
    <b-row>
        <b-col sm="12">
            <b-button variant="outline-primary">Agendar</b-button>
        </b-col>
    </b-row>
    
</b-container>
</template>

<script>
export default {
        
}
</script>

<style  scoped>
button#btn-agendar {
    display: block;
    margin-right: auto;
    margin-left: auto;
}
</style>