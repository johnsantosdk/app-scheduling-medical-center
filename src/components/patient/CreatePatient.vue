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
        <Address /><!-- Campos de endereco -->
        <hr>
        <b-row><!-- Inicio dos campos de convenio -->
            <b-col sm="2">
                <label for="IdCon">Convênio:</label>
            </b-col>
            <b-col sm="4">
                <b-form-select size="sm" @change="getPlanos" v-model="convenio" :options="convenios" class="mb-3">
                    <template>
                        <b-form-select-option :value="null" disabled>-- Por Favor Escolha o Convênio --</b-form-select-option>
                    </template>
                </b-form-select>
            </b-col>
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
        </b-row>
        <b-row>
            <b-col sm="2" right>
                <label for="IdMat">Matricula:</label>
            </b-col>
            <b-col sm="4">
                <b-form-input
                    id="IdMat"
                    size="sm"
                    type="text"
                    placeholder="Digite a matricula do convênio"
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
import Address from '../address/Address';

export default {
    components: {
        Address
    },
    data() {
      return {
        convenio: null,
        plano: null,
        planos: [],
        convenios: [
            {id:115, value: 1, text: 'Unimed', 
                plano: [
                    {id:1, text:'Valentina'},
                    {id:2, text:'Carolina'},
                    {id:3, text:'5 Estrelas'},
                ]
            },
            {id:25, value: 2, text: 'Saude Bradesco',
                plano: [
                    {id:1, text:'Master'}, 
                    {id:2, text:'Califonia'}, 
                    {id:3, text:'Super Satar'}, 
                    {id:4, text:'Platina'}
                ] 
            },
            {id:126, value: 3, text: 'Vitallis', 
                plano: [
                     {id:1, text:'Diamante'}, 
                     {id:1, text:'Perola'}, 
                     {id:1, text:'Rubi'}, 
                     {id:1, text:'Fenix'}
                ]  
            },
            {id:40, value: 4, text: 'Saude Caixa', 
                plano: [
                    {id:1, text:'Preto'}, 
                    {id:2, text:'Branco'}, 
                    {id:3, text:'Ouro'}, 
                    {id:4, text:'Esmeralda'}
                ]  
            }
        ]
      }
    },
    watch: {

    },
    methods: {
        getPlanos(valuePlano) {
            this.planos = []
            this.convenios.forEach( item => {
                if(item.value == valuePlano) {
                    item.plano.forEach(i => { this.planos.push(i)})
                }
            })
        }
    },
    created() {
 
    }
}
</script>

<style scoped>
label {
    margin-right: auto;
    /* background-color: blue; */
}
</style>