# teste-dti
<div align="center">
    <img src="https://mineira.sbc.org.br/wp-content/uploads/2022/05/dti-azul-assinatura-e1652110024585.png" alt="Descrição da Imagem" width="400"/>
</div>

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (testado na versão 21.7.1)
- [NPM (Node Package Manager)](https://www.npmjs.com/) (testado na versão 10.5.0)
- [MySQL](https://www.mysql.com/) (testado na versão 9.0.1)
- [Git](https://git-scm.com/) (testado na versão 2.44.0)

### Clonando o Repositório

1. Clone o repositório:
    ```bash
    git clone https://github.com/bgbaine/teste-dti.git
    ```

2. Após o download, mude para o diretório recém-criado:
    ```bash
    cd teste-dti
    ```

3. Liste os diretórios:
    ```bash
    ls
    ```

   Você deve encontrar:
    ```bash
    README.md  client  server
    ```

4. Caso não encontre, verifique se as ferramentas estão instaladas.

- Tudo relacionado ao Backend está no diretório `server`:
    ```bash
    server
    ```

- Enquanto tudo relacionado ao Frontend se encontra no diretório `client`:
    ```bash
    client
    ```

## Instalação

### Configurando o Backend

1. Estando dentro do diretório `teste-dti`, mude para o diretório `server`:
    ```bash
    cd server
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Procure o arquivo `.env.example`, abra-o e ele deve estar assim:
    ```bash
    DATABASE_URL="mysql://<SEU-USUARIO>:<SUA-SENHA>@localhost:3306/<NOME-DO-BANCO>"
    ```

4. Crie um arquivo chamado `.env` e cole o conteúdo copiado, substituindo os campos pelos seus dados:
    ```bash
    DATABASE_URL="mysql://carlos:senhaforte@localhost:3306/banco-dti"
    ```

4. Execute o comando a seguir, para aplicar a migration (criar o banco):
    ```bash
    npx prisma migrate deploy
    ```

5. Por fim, gere  o Prisma client com o comando:
    ```bash
    npx prisma generate
    ```

   - Lembre-se de executar a etapas 4 e 5 com o servidor desligado.

### Configurando o Frontend

1. Estando no diretório `teste-dti`, mude para o diretório `client`:
    ```bash
    cd client
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Aguarde o término da instalação. Se não houve erros, a configuração do Frontend está pronta!

## Execução

Para facilitar o desenvolvimento, o sistema executa o Backend e o Frontend separadamente. Recomenda-se abrir duas abas do terminal.

1. No diretório `client`, execute:
    ```bash
    npm run dev
    ```

2. Em outra aba, dentro do diretório `server`, execute:
    ```bash
    npm run dev
    ```

Pronto! O sistema deve estar completamente funcional.

## Acessando o Sistema

- Acesse o Frontend em `http://localhost:5173` e você deverá ver a seguinte tela:
<div align="center">
    <img src="media/index.png" alt="Descrição da Imagem" width="800"/>
</div>

- Caso a aplicação não integre com o Backend, verifique a porta em que o Frontend foi aberto. O Backend foi configurado com CORS para permitir conexões da porta 5173 até a porta 5179.

- Para acessar o Backend, vá para `http://localhost:3001`:
<div align="center">
    <img src="media/api.png" alt="Descrição da Imagem" width="800"/>
</div>

- Para adicionar um aluno, clique em "Inserir Aluno" e preencha os campos:
<div align="center">
    <img src="media/modal.png" alt="Descrição da Imagem" width="800"/>
</div>

- Verifique se os dados estão sendo renderizados no Backend:
<div align="center">
    <img src="media/tabela.png" alt="Descrição da Imagem" width="800"/>
</div>

- Se tudo correu bem, o sistema deve estar funcional, caso encontre algum erro, repita os passos anteriores
  
## Lista de Premissas Assumidas

- O sistema foi desenvolvido com base em um sistema para cinco disciplinas, podendo ser reajustado.
- O sistema foi desenvolvido para uso exclusivo de um professor, também podendo ser reajustado.
- A aplicação teve seu funcionamento testado no navegador Chrome.
- O sistema realiza verificações dos dados tanto no Frontend quanto no Backend, porém, dado o tempo de desenvolvimento, falhas de segurança podem ocorrer.

## Decisões de Projeto

### Arquitetura
O sistema foi projetado de maneira a obedecer as regras do teste e estar dentro de um repositório único. O Frontend foi escrito em TypeScript e o Backend em JavaScript, devido ao pequeno tempo de desenvolvimento e às dificuldades encontradas para "tipar" o Backend.

### Tecnologia
**Frontend** utiliza:
```bash
react-hook-form: Para lidar com o formulário.
react-responsive-modal: Para criar o modal do formulário.
react: Para possibilitar tudo.
tailwindcss: Para estilização mais ágil.
vite: Para criação do projeto.
```
**Backend** utiliza:
```bash
cors: Para habilitar requisições do Frontend.
dotenv: Para as variáveis de ambiente.
express: Como o backbone do servidor.
jest: Para testes, alguns implementados, porém incompletos.
mysql2: Para o banco de dados.
nodemon: Para reload automático do Backend ao salvar.
prisma: Para gerenciar o banco de dados.
zod: Para verificações das requisições.
```
Obs:
- O tamanho do projeto fez com que o Next.js não fosse cogitado.
- Como mencionado anteriormente, os testes unitários não foram implementados por questão de tempo (prioridades), apesar de saber da importância destes não só para testes como também para o desenvolvimento (test driven development). Apenas não me senti a vontade com o tempo que tinha.
- Apesar da existência dos botões 'Editar' e 'Deletar', estes foram apenas parcialmente implementados, suas ações após pressionados apenas para depuração
- Devido a tabela, a página apresenta dificuldades com a responsividade. Dependências como react-table foram testadas, porém sem sucesso.

## Informações Adicionais

- **Contato**: Para quaisquer dúvidas, você pode me contatar pelo e-mail [bgbaine@gmail.com](mailto:bgbaine@gmail.com) ou pelo número +55 (53) 98164-0674.

- **Agradecimentos**: Agradeço pela oportunidade de mostrar meus conhecimentos, especialmente a convite da empresa. Espero que o projeto seja de agrado! ;)
