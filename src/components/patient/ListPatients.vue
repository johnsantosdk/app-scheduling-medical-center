<template>
<b-col>
    <b-table dark small ref="selectableTable" selectable select-mode="single" :items="patients" :fields="fields" @row-selected="onRowSelected" responsive="sm">
        <!-- Example scoped slot for select state illustrative purposes -->
        <template v-slot:cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
            <span aria-hidden="true">&check;</span>
            <span class="sr-only">Selecionado</span>
            </template>
            <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Nenhum Selecionado</span>
            </template>
        </template>
    </b-table>
    <p>
      Cadastro Selecionado:<br>
      {{ RegisterSelected }}
    </p>
</b-col>
</template>

<script>
    export default {
        data() {
            return {
                // modes: ['multi', 'single', 'range'],
                fields: [
                    {selected: 'Selecionar'},
                    {name: 'Nome'}, 
                    {helathInsurance: 'Convênio'}, 
                    {phone: 'Telefone'},
                    {show_details: 'Detalhes'}
                ],
                patients: [
                    { 
                        isActive: true, 
                        age: 40, 
                        name: 'Dickerson', 
                        helathInsurance: 'Unimed', 
                        phone: '(98) 9 8877-5544' ,
                        _showDetails: true,
                        cpf: '000.111.222-77'
                    }
                ],
                // selectMode: 'multi',
                RegisterSelected: []
            }
        },
        methods: {
            onRowSelected(items) {
                this.RegisterSelected = items //
                console.log(items)
            },
        } 
    }
</script>