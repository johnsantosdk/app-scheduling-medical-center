<template>
<b-container fluid>
    <b-row><!-- Inicio dos campos do paciente -->
        <b-col sm="2">
            <label for="IdCbo">Código CBO:</label>
        </b-col>
        <b-col sm="5">
            <b-form-input
                class="mb-3"
                id="IdCbo"
                size="sm"
                type="text"
                placeholder="Digite o código cbo"
                autofocus
                required
            ></b-form-input>
        </b-col>
    </b-row>
    <b-row>
        <b-col sm="2">
            <label for="IdEsp">Nome da ocupação:</label>
        </b-col>
        <b-col sm="5">
            <b-form-input
                class="mb-3"
                id="IdEsp"
                size="sm"
                type="text"
                placeholder="Digite o nome da ocupação"
                required
            ></b-form-input>
        </b-col>
    </b-row>
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