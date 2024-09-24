# Adonis 6 Basic Structure API

Este repositório oferece uma estrutura básica para o desenvolvimento de APIs utilizando o AdonisJS 6 e TypeScript. Ele visa facilitar a criação de novas APIs RESTful, aplicando boas práticas de organização de código, arquitetura limpa e padrões de codificação.

## Ferramentas utilizadas

- **Node.js** (mínimo v21) e npm
- **AdonisJS 6** com TypeScript
- **PostgreSQL** como banco de dados
- **Docker** para fácil configuração e gerenciamento de containers

## Como rodar o projeto?

1. **Clone o repositório para sua máquina**

   ```bash
   git clone https://github.com/IanBraga96/adonis_6_basic_structure.git
   cd adonis_6_basic_structure
   ```

2. **Crie um arquivo `.env`**

   - Use o arquivo `.env.example` como referência, localizado na raiz do projeto.

3. **Instale as dependências**

   ```bash
   npm install
   ```

4. **Suba o container do banco de dados com Docker** (necessário ter o Docker instalado)

   ```bash
   docker compose up -d
   ```

5. **Inicialize a aplicação**

   ```bash
   npm run dev
   ```

6. **Testes**
   - Você pode testar as rotas da API utilizando o arquivo de configuração do Insomnia, que está na raiz do projeto.

## Estrutura do projeto

- **Controllers**: Controlam as entradas e saídas da API, acionando os serviços responsáveis e retornando as respostas.
- **Validators**: Fazem a validação dos dados de entrada para garantir que os dados recebidos estão no formato correto.
- **DTOs**: Transportam os dados validados entre camadas como Controllers e UseCases.
- **Middlewares**: Interceptam e manipulam requisições antes de chegarem aos Controllers, realizando tarefas como autenticação e autorização.
- **Models**: Representam as entidades do banco de dados e implementam regras de negócio simples, como criptografia de senhas.
- **Repositories**: Realizam as operações de banco de dados por meio das Models.
- **Services**: Serviços externos e integrações, como envio de e-mails ou chamadas de APIs externas.
- **UseCases**: Contêm a lógica de negócios da aplicação, definindo como as regras de negócio devem ser aplicadas.
- **Utils**: Funções utilitárias e constantes globais que não se encaixam em outras camadas.

## Regras e Boas Práticas de Estrutura

- Apenas **Repositories** e **Middlewares** devem acessar diretamente as **Models**.
- **UseCases** e **Repositories** são considerados serviços e podem ser chamados pelos **Controllers**.
- **Validators** e **DTOs** devem transportar somente os dados necessários para a requisição.
- **Middlewares** não devem ser acumulados sem necessidade na mesma rota.

## Guia de Codificação

Para manter a consistência e a legibilidade do código, siga estas convenções:

- **Arquivos**: Use `snake_case` para nomeação.
- **Classes**: Nomeadas com `CamelCase`, começando com letra maiúscula.
- **Métodos e Funções**: Nomeadas com `camelCase`, começando com letra minúscula e iniciando com um verbo (e.g., `validateUser`).
- **Variáveis e Atributos**: Nomeados em `camelCase` com a primeira letra minúscula.
- **Tabelas SQL**: `snake_case`, minúsculas e no plural.
- **Colunas SQL**: `snake_case`, minúsculas e no singular.
- **Listas/Arrays**: Nomeadas no plural.

## Observações Gerais

- Siga as regras e convenções, mas permita flexibilidades sempre que necessário para manter a clareza e a organização do código.
- Evite valores "soltos" no código, prefira o uso de constantes.

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch com a nova feature (`git checkout -b feature/nova-feature`).
3. Faça commit das mudanças (`git commit -m 'Adiciona nova feature'`).
4. Envie para o seu fork (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
