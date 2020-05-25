<template>
    <b-container>
        <b-row>
        <b-col sm="1">
                <label for="IdNome">Nome:</label>
            </b-col>
            <b-col sm="3">
                <b-form-input
                id="IdNome"
                type="text"
                size="sm"
                placeholder="Digite o nome"
                ></b-form-input>
            </b-col>
 
            <b-col sm="1">
                <label for="IdCpf">CPF:</label>
            </b-col>
            <b-col sm="2">
                <b-form-input
                id="IdCpf"
                type="text"
                size="sm"
                placeholder="000.000.00-00"
                ></b-form-input>
            </b-col>

            <b-col sm="1">
                <label for="IdNasc">Nasc.:</label>
            </b-col>
            <b-col sm="2">
                <b-form-input
                id="IdNasc"
                type="date"
                size="sm"
                ></b-form-input>
            </b-col>
            <b-col>
                <b-button variant="outline-secondary" size="sm">Buscar</b-button>
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