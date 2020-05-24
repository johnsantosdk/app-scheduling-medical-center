<template>
<form>
    <div class="row">
        <div class="col-sm-6 form-group">
            <label for="IdSpec">Especialidade</label>
            <select class="form-control" id="IdSpec">
                <option value="">Ortopedia e Traumatologia</option>
                <option value="">Clínico Geral</option>
            </select>
        </div>
        <div class="col-sm-6 form-group">
            <label for="IdDoctor">Médico</label>
            <select class="form-control" id="IdDoctor">
                <option value="">José Luis Silva Freire</option>
                <option value="">José Roberto Silva Freire</option>
            </select>
        </div>
        <div class="col-sm-6 form-group">
            <label for="IdDate">Data da Consulta:</label>
            <input type="date" id="IdDate" class="form-control">
        </div>
        <div class="col-sm-6 form-group">
            <label for="IdTime">Horário/Turno da Consulta:</label>
            <select id="idTime" class="form-control">
                <option value="matutino">Matutino</option>
                <option value="vespertion">Vespertion</option>
            </select>
        </div>
        <button class="btn btn-secondary btn-lg" id="btn-agendar" @click.prevent="agendar">Agendar</button>
    </div>
</form>
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