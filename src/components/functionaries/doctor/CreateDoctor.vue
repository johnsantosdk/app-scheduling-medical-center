<template>
<b-container fluid>
        <b-row><!-- Inicio dos campos do paciente -->
            <b-col sm="2">
                <label for="IdPatientName">Nome:</label>
            </b-col>
            <b-col sm="5">
                <b-form-input
                    id="IdPatientName"
                    size="sm"
                    placeholder="Digite o nome"
                    autofocus
                    required
                ></b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="2">
                <label for="IdPatientEmail">E-mail:</label>
            </b-col>
            <b-col sm="5">
                <b-form-input
                    id="IdPatientName"
                    size="sm"
                    type="email"
                    :state="false"
                    placeholder="Digite o e-mail"
                    required
                ></b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="2">
                <label for="IdPatientNasc">Nascimento:</label>
            </b-col>
            <b-col sm="2">
                <b-form-input
                    id="IdPatientNasc"
                    size="sm"
                    type="date"
                ></b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="2">
                <label for="IdPatientCpf">CPF:</label>
            </b-col>
            <b-col sm="3">
                <b-form-input
                    id="IdPatientCpf"
                    size="sm"
                    type="text"
                    placeholder="000.000.000-00"
                    required
                ></b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="2">
                <label for="IdPatientRg">RG:</label>
            </b-col>
            <b-col sm="3">
                <b-form-input
                    id="IdPatientRg"
                    size="sm"
                    type="text"
                    placeholder="Digite o RG"
                ></b-form-input>
            </b-col>
        </b-row><!-- Final dos campos do paciente -->
        <hr>
        <b-row><!-- Inicio dos campos de convenio -->
            <b-col sm="2">
                <label for="IdCon">Especialidade:</label>
            </b-col>
            <b-col sm="5">
                <b-form-select size="sm"  class="mb-3">
                    <template>
                        <b-form-select-option :value="null" disabled>-- Selecione a Especialidade do Médico --</b-form-select-option>
                    </template>
                </b-form-select>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="2" right>
                <label for="IdMat">CRM:</label>
            </b-col>
            <b-col sm="3">
                <b-form-input
                    id="IdMat"
                    size="sm"
                    type="text"
                    placeholder="Digite o CRM do Médico"
                ></b-form-input>
            </b-col>
        </b-row><!-- Final dos campos de convenio -->
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