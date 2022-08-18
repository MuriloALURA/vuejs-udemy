<template>
  <div id="app">
    <md-card>
      <md-card-header>
        <div class="md-title">
          Material Design com vueJS 2
        </div>
        <div class="md-suhead">
          Tabela
        </div>
      </md-card-header>
      <md-card-content>
        <md-button class="md-raised md-primary" @click="table()" >Tabela</md-button>
        <md-button class="md-raised md-primary" @click="limpar()" >Limpar</md-button>
      </md-card-content>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>
              Primeiro Nome
            </md-table-head>

            <md-table-head>
              Sobrenome
            </md-table-head>
            
            <md-table-head>
              Email
            </md-table-head>

          </md-table-row>
        </md-table-header>
        <br>

        <md-table-body>
          <md-table-row v-for="contato in contatos">
            <md-table-cell>{{contato.nome}}</md-table-cell>
            <md-table-cell>{{contato.sobrenome}}</md-table-cell> 
            <md-table-cell>{{contato.email}}</md-table-cell>       
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-card>

  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      contatos: [
        {nome:'Clayton', sobrenome:'Passos' , email: 'Clayton@gmail.com'},
        {nome:'Daniela', sobrenome:'Alves' , email: 'Daniela@gmail.com'}
      ]
    }
    },methods: {
      table: function() {
        this.contatos.push({nome:'Sebastian', sobrenome:'Silva' , email: 'Clayton@gmail.com'}),
        this.contatos.push({nome:'Gabriela', sobrenome:'Romeno' , email: 'Clayton@gmail.com'}),
        this.contatos.push({nome:'Pedro', sobrenome:'Mariano' , email: 'Clayton@gmail.com'})
      },
      limpar: function () {
        this.contatos.splice(0, this.contatos.length)
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

