<h1>Calendar-Front-End</h1>

<h2>Tecnologias e ferramentas</h2>

<ul>
  <li>ReactJS</li>
  <li>TypeScript</li>
</ul>

<h2>Instalação e uso</h2>

<h3>Requisitos</h3>
<p>No seu computador, com sistema operacional windows, tem que ter o <a href="https://nodejs.org/pt-br/download/](https://nodejs.org/en/download/">Node</a> instalado.</p>

<p>Cria uma pasta onde irá baixar os códigos. Após criar a pasta siga os passos abaixo:</p>

```
# No terminal da pasta criada, copie o repositório com o seguinte comando
$ git clone https://github.com/bruno-nakahara/calendar.git

# Após clonar o repositório, pelo terminal, entra na pasta usando o comando
$ cd calendar

# Instale as dependências utilizando o comando 
$ yarn install

# Se tem todas as dependências, então rode a aplicação com
$ yarn dev

# e pronto! Front-end da Aplicação rodando.
```
<h2>Como é a aplicação?</h2>

<p>- Navegar para o próximo mês ou para o mês anterior</p>

<p>- Receber uma lista de dias que contém um status e, com base nesse status, aplicar regra de renderização diferente para um dia correspondente.</p>

<p>Tipos de status:</p>

<ul>
  <li>Uma data com status de "block", vai bloquear o botão da data para não conseguir realizar nenhum tipo de ação.</li>
  <li>Status de "booked", a data está destacado. Caso clicar na data, ela deixa de ser "booked"</li>
  <li>Sem status, não terá nenhuma regra. Ao clicar na data, ela vai mudar para o status de "booked"</li>
</ul>

<p>OBS: No arquivo index.tsx na pasta src/components/calendar vai poder alterar as datas customizadas para testar a aplicação</p>

