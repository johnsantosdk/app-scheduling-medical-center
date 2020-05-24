<template>
    <b-container fluid>
        <b-row>
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
        </b-row>
        <hr>
        <Address />
        <hr>
    </b-container>
</template>

<script>
import Address from '../address/Address';

export default {
     components: {
         Address
     }   
}
</script>

<style scoped>

</style>