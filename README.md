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
- [Navegador](https://www.google.com/intl/pt-BR/chrome/) (testado em um navegador Chromium (Brave) na versão 130.0.6723.91)
    - Deve funcionar em outros navegadores, apenas não foi testado.

### Clonando o Repositório

1. Clone o repositório:
    ```bash
    git clone https://github.com/bgbaine/teste-dti.git
    ```

2. Após o download, mude para o diretório recém-criado:
    ```bash
    cd teste-dti
    ```

3. Liste os diretórios com o comando (shells bash):
    ```bash
    ls
    ```
    ou (cmd e PowerShell)
    ```bash
    dir
    ```
   Você deve encontrar o seguinte conteúdo dentro do diretório:
    ```bash
    README.md  client  server
    ```

    - Caso não encontre, verifique se as ferramentas estão instaladas.

- Tudo relacionado ao Backend está no diretório `server`:
    ```bash
    server
    ```

- Enquanto tudo relacionado ao Frontend se encontra no diretório `client`:
    ```bash
    client
    ```

## Instruções para executar o sistema

Para facilitar o desenvolvimento, o sistema executa o Backend e o Frontend separadamente. 
- Execute os passos a seguir em abas (ou janelas) individuais para cada sistema (mantenha sempre ambos abertos).

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

4. Execute então o comando:
    ```bash
    npm run dev
    ```

5. Acesse o Frontend em `http://localhost:5173` e você deverá ver a seguinte tela:
<div align="center">
    <img src="media/index.png" alt="Descrição da Imagem" width="800"/>
</div>

<br>

- Verifique se a porta escolhida pelo Vite foi de fato a porta 5173, caso esta esteja ocupada, o Frontend será criado na porta seguinte (5174, 5175, etc)

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

   - Lembre-se de executar a etapas 5 e 6 com o servidor desligado.

6. Execute então o comando:
    ```bash
    npm run dev
    ```

7. Para acessar o Backend, acesse o endereço `http://localhost:3001`, você deve encontrar esta tela:
<div align="center">
    <img src="media/api.png" alt="Descrição da Imagem" width="800"/>
</div>

## Utilizando o Sistema

Para adicionar um aluno, clique em "Inserir Aluno" e preencha os campos:
<div align="center">
    <img src="media/modal.png" alt="Descrição da Imagem" width="800"/>
</div>

<br>

Verifique se os dados do Backend estão sendo renderizados no Frontend:
<div align="center">
    <img src="media/tabela.png" alt="Descrição da Imagem" width="800"/>
</div>

<br>

Você pode editar qualquer aluno clicando no campo "Editar":
<div align="center">
    <img src="media/edit.png" alt="Descrição da Imagem" width="800"/>
</div>

<br>

Também é possível deletar um registro, clicando no campo "Deletar"
<div align="center">
    <img src="media/delete.png" alt="Descrição da Imagem" width="800"/>
</div>

<br>

Se tudo correu bem, o sistema deve estar funcional, caso encontre algum erro, repita os passos anteriores
- Caso a aplicação não integre com o Backend, verifique novamente a porta em que o Frontend foi aberto.
    - O Backend foi configurado com CORS para permitir conexões da porta 5173 até a porta 5179.
  
## Lista de Premissas Assumidas

- O sistema foi desenvolvido com base em um sistema para cinco disciplinas, podendo ser reajustado.
- O sistema foi desenvolvido para uso exclusivo de um professor, também podendo ser reajustado.
- A aplicação teve seu funcionamento testado em um navegador Chromium.
- O sistema realiza verificações dos dados tanto no Frontend quanto no Backend, porém, dado o tempo de desenvolvimento, falhas de segurança podem ocorrer.

## Decisões de Projeto

### Arquitetura
- O sistema foi projetado de maneira a obedecer as regras do teste e estar dentro de um repositório único.
- O Frontend foi escrito em TypeScript e o Backend em JavaScript, devido ao pequeno tempo de desenvolvimento e às dificuldades encontradas para "tipar" o Backend.

### Tecnologias
**Frontend** utiliza:
```bash
react-hook-form: Para lidar com o formulário.
react-responsive-modal: Para criar o modal do formulário.
react: Para possibilitar tudo.
sonner: Para os toasts de sucesso e erro.
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
- Devido a tabela, a página apresenta dificuldades com a responsividade. Dependências como react-table foram testadas, porém sem sucesso.

## Informações Adicionais

- **Contato**: Para quaisquer dúvidas, você pode me contatar pelo e-mail [bgbaine@gmail.com](mailto:bgbaine@gmail.com) ou pelo número +55 (53) 98164-0674.

- **Agradecimentos**: Agradeço pela oportunidade de mostrar meus conhecimentos, especialmente a convite da empresa. Espero que o projeto atenda às expectativas! ;)
