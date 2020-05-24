<template>
    <form >
        <div class="row justify-content-md-center form-group form-inline" >
                <legend>Busca de Paciente</legend>
                <div class="col-sm-4">
                    <label >Nome:</label>
                    <input type="text" id="IdName" class="form-control" placeholder="Digite o nome">
                </div>
                <div class="col-sm-3">
                    <label for="IdCpf">CPF:</label>
                    <input type="text" id="IdCpf" class="form-control" placeholder="Digite o CPF">
                </div>
                <div class="col-sm-2">
                    <label for="IdNasc">Nascimento:</label>
                    <input type="date" id="IdNasc" class="form-control">
                </div>
                <div class="col-sm-2">
                    <label for="Idplano">Plano:</label>
                    <select  class="form-control" id="Idplano">
                        <option selected disabled>Select one</option>
                        <option value="">Unihosp</option>
                        <option value="">Unimed</option>
                        <option value="">Vitallis</option>
                    </select>
                </div>
                <div class="col-sm-1 mt-4 btn btn-primary">Buscar</div>
        </div>
    </form>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.form-inline {
    /* background-color: rgb(219, 219, 219); */
    margin: 10px auto;
    padding: 10px 50px 10px 10px;
}
 .form-inline input { 
    display:inline;
    background-color: rgb(236, 236, 236);
} 
#IdName {
    width: 300px;
}    
</style>