<template>
<div>
    <b-row class="mb-1">
        <b-col sm="2">
            <label for="IdCep">CEP:</label>
        </b-col>
        <b-col sm="2">
            <b-form-input
                id="IdCep"
                size="sm"
                type="text"
                placeholder="65000-000"
            ></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mb-1">
        <b-col sm="2">
            <label for="IdLog">Logradouro:</label>
        </b-col>
        <b-col sm="6">
            <b-form-input
                id="IdLog"
                size="sm"
                type="text"
                placeholder="Ex.: Rua Castelo Branco"
            ></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mb-1">
        <b-col sm="2">
            <label for="IdComp">Complemento:</label>
        </b-col>
        <b-col sm="6">
            <b-form-input
                id="IdComp"
                size="sm"
                type="text"
                placeholder="Ex.: Ao lado da Praça da Sé"
            ></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mb-1">
        <b-col sm="2">
            <label for="IdBai">Bairro:</label>
        </b-col>
        <b-col sm="6">
            <b-form-input
                id="IdBai"
                size="sm"
                type="text"
                placeholder="Ex.: Bairro da Mantiqueira"
            ></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mb-1">
        <b-col sm="2">
            <label for="IdCid">Cidade:</label>
        </b-col>
        <b-col sm="6">
            <b-form-input
                id="IdCid"
                size="sm"
                type="text"
                placeholder="Ex.: Florianopolis"
            ></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mb-1">
        <b-col sm="2">
            <label for="IdEst">Estado:</label>
        </b-col>
        <b-col sm="6">
            <b-form-input
                id="IdEst"
                size="sm"
                type="text"
                placeholder="Ex.: Santa Catarina"
            ></b-form-input>
        </b-col>
    </b-row>
</div>
</template>

<script>

    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>