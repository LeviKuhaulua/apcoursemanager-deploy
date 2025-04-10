# AP Course Manager

Description: This codebase houses the source code for the AP Course Manager web app for Farrington High School. It uses the following technologies

- NextJs &rarr; Opinionated framework that handles routing, authentication, and much more. 
- React &rarr; Reusability for components across website
- Bootstrap &rarr; Styling framework 
- Prisma &rarr; ORM to easily manage and update the structure and schema of the database
- Postgres &rarr; Database to house data related to the AP Courses
- Playwright &rarr; Visual regression testing for websites

## Folder Structure

```sh
.github/ # Contains workflows to handle integrating and pushing code to codebase, and templates for issues + reviews
checklists/ # Make sure we're adhering to best practices for the project
config/ # Test data for the database
doc/ # Files & assets for documentation
prisma/ # Prisma configurations
public/ # Files & assets available to the public
src/ # Source code for codebase
tests/ # Playwright tests

# Other files here...
```

## Getting Started

1. Run `npm install` to install all dependencies for this project
2. Create a `.env` file in the root directory
3. Add in the secrets from the discord into the `.env` file
4. Modify the `DATABASE_URL` secret 
    - update username to your postgres account
    - update password to your postgres account
5. Create your db located in the `DATABASE_URL`
6. Run the following commands in the terminal
    - `npx prisma db migrate`
    - `npx prisma db seed`
7. Afterwards, run `npm run dev` and verify that local development works. 