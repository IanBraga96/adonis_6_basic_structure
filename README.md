# Adonis 6 Basic Structure API

This repository provides a basic structure for developing APIs using AdonisJS 6 and TypeScript. It aims to simplify the creation of new RESTful APIs by applying best practices in code organization, clean architecture, and coding standards.

> 🇧🇷 [Leia esta documentação em português](README.pt-BR.md)

## Tools Used

- **Node.js** (minimum v21) and npm
- **AdonisJS 6** with TypeScript
- **PostgreSQL** as the database
- **Docker** for easy container setup and management

## How to Run the Project

1. **Clone the repository to your machine**

   ```bash
   git clone https://github.com/IanBraga96/adonis_6_basic_structure.git
   cd adonis_6_basic_structure
   ```

2. **Create a `.env` file**
   - Use the `.env.example` file located at the project root as a reference.

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the database container using Docker** (Docker must be installed)

   ```bash
   docker compose up -d
   ```

5. **Start the application**

   ```bash
   npm run dev
   ```

6. **Testing**
   - You can test the API routes using the Insomnia configuration file located at the project root.

## Project Structure

- **Controllers**: Handle API input and output, trigger the responsible services, and return responses.
- **Validators**: Validate input data to ensure it’s in the correct format.
- **DTOs**: Transfer validated data between layers such as Controllers and UseCases.
- **Middlewares**: Intercept and manipulate requests before they reach Controllers, handling tasks such as authentication and authorization.
- **Models**: Represent database entities and implement simple business rules, such as password encryption.
- **Repositories**: Handle database operations using the Models.
- **Services**: External services and integrations like sending emails or calling external APIs.
- **UseCases**: Contain the application’s business logic and define how business rules should be applied.
- **Utils**: Utility functions and global constants that don’t fit into other layers.

## Structure Rules and Best Practices

- Only **Repositories** and **Middlewares** should access **Models** directly.
- **UseCases** and **Repositories** are considered services and can be called by **Controllers**.
- **Validators** and **DTOs** should only carry the necessary data for the request.
- **Middlewares** should not be stacked unnecessarily on the same route.

## Coding Guidelines

To maintain code consistency and readability, follow these conventions:

- **Files**: Use `snake_case` for naming.
- **Classes**: Use `CamelCase`, starting with an uppercase letter.
- **Methods and Functions**: Use `camelCase`, starting with a lowercase letter and begin with a verb (e.g., `validateUser`).
- **Variables and Attributes**: Use `camelCase`, starting with a lowercase letter.
- **SQL Tables**: Use lowercase `snake_case` in plural.
- **SQL Columns**: Use lowercase `snake_case` in singular.
- **Lists/Arrays**: Use plural names.

## General Notes

- Follow the rules and conventions, but allow flexibility when necessary to maintain clarity and organization.
- Avoid "magic values" in the code—prefer using constants.

## How to Contribute

1. Fork the project.
2. Create a branch for the new feature (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your fork (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
