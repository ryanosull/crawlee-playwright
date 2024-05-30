# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>



### Postgres
 If you don't have PostgresSQL installed in your machine, go to [PostgreSQL Downloads](https://www.postgresql.org/download/) to install.
### Prereqs
xKfjL!44MBUDhhs ryanosull@wlabel.co ryanosull

☑️ Prerequisites
Before installing Strapi, the following requirements must be installed on your computer:

Node.js: Only Active LTS or Maintenance LTS versions are supported (currently v18 and v20). Odd-number releases of Node, known as "current" versions of Node.js, are not supported (e.g. v19, v21).
Your preferred Node.js package manager:
npm (v6 and above)
yarn
Python (if using a SQLite database)



- The admin panel of a local Strapi project runs at http://localhost:1337/admin. This is where you will spend most of your time creating and updating content.

- If the server is not already running, in your terminal, cd into the `/packages/strapi` folder and run npm run develop (or yarn develop) to launch it.

- yarn install
- yarn start - autoreload disabled
- yarn develop - autoreload enabled ; You should never use this command to run a Strapi application in production.
- yarn strapi help
- nvm install 20 vs. nvm use 20



✏️ Note
When connecting Strapi to a PostgreSQL database, the database user requires SCHEMA permissions. While the database admin has this permission by default, a new database user explicitly created for the Strapi application will not. This would result in a 500 error when trying to load the admin console.

To create a new PostgreSQL user with the SCHEMA permission, use the following steps.

 Create a new database user with a secure password
$ CREATE USER my_strapi_db_user WITH PASSWORD 'password';
# Connect to the database as the PostgreSQL admin
$ \c my_strapi_db_name admin_user
 Grant schema privileges to the user
$ GRANT ALL ON SCHEMA public TO my_strapi_db_user;


