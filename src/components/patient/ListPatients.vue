<template>
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Convênio/Plano de Saúde</th>
      <th scope="col">Telefone</th>
      <th scope="col">Selecionar</th>
      <th scope="col">Realizar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Airton Vieira dos Santos</td>
      <td>Saude Bradesco</td>
      <td>(98) 9 8800-1122</td>
      <td>
            <button class="btn btn-sm mr-4" :class="classeCSS">
                <i class="fa fa-check"></i>
            </button>
      </td>
      <td>
            <button class="btn btn-primary btn-sm mr-1" title="Editar">
                <i class="fa fa-pencil-alt"></i>
            </button>
            <button class="btn btn-danger btn-sm" title="Deletar">
                <i class="fa fa-trash"></i>
            </button>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
    export default {
        
    }
</script>