# Answers to questions

Complete parts 1 and 2

For part 3 (optional)

- [x] i. Add a functional logout button
- [x] ii. Add a switch tenant drop-down - the drop-down should show a list of tenants the user is a part of. The user can select the relevant tenant and will be switched to that tenant
- [ ] iii. Switch to deploy your application with Embedded Login
  - left a comment to switch `hostedLoginBox` to `false` to enable embdedded
- [x] iv. Make the hunter@frontegg.com user a superuser
  - done via "Backoffice" > "Users" > Hunter three dots > "Edit roles" , change to admin
- [ ] v. Setup a working social login
- [ ] vi. Deploy your application to Staging and Production
  - left a comment on configuring using an .env file

5. three improvements
- 1. had to Google for CORs error (and open developer tools console to see the CORs error because it wasn't logging in), but should be a step or section on [quickstart tutorial](https://portal.frontegg.com/development/applications/60da8b14-d971-42a3-9ab7-3b231df46fd7/integrations). It should reference either the [support doc on errors](https://support.frontegg.com/hc/en-us/sections/8563170726429-Errors) or the specific [CORs error page](https://support.frontegg.com/hc/en-us/articles/5264971544733-Why-am-I-receiving-CORS-errors-when-trying-to-load-my-app)
- 2. Would be nice if there were a link in the integration quick start to the next section to configure the portal linking to [managing users](https://docs-beta.frontegg.com/guides/admin-portal/workspace/managing-users-admin-portal). Will make it easier for developers to understand some builder features:
> Make sure the user can only view their info, invite other users,
access audit logs, & create m2m tokens.
- 3. There are seemingly 2 docs sites https://docs-beta.frontegg.com and https://docs.frontegg.com , which makes it confusing since the pages are not in sync with each other.

6. common question responses
- a. When creating a new application, the default `App URL` is `localhost:3000` if not specified otherwise. In your application settings, please set the App URL to something different than `localhost:3000`. 
- b. Please refer to our [managing users](https://docs-beta.frontegg.com/guides/admin-portal/workspace/managing-users-admin-portal) documentation to learn how to use `Builder` to enable the `Users` page. Bonus: In order to invite a new user, your logged in User must have the `Admin` role on your tenant. 
- c. In Builder, under `Login Box` the `Google` social logins must be enabled.
- d. Refresh tokens enable a User to obtain more short lived access tokens without needing to go through the login flow each time. Bonus 1: 401 means Unauthorized, please refer to our [documentation](https://support.frontegg.com/hc/en-us/articles/5425090458653-Why-do-I-get-401-error-on-refresh-requests) to troubleshoot.
Bonus 2: JWT tokens are used to authenticate + authorize a user against an API (Frontegg or customer's application). The refresh token is used to issue new JWT tokens from the authentication provider (e.g. Frontegg)
- e. On the server side, you may use the [Update user's active tenant API](https://docs.frontegg.com/reference/userscontrollerv1_updateusertenant). Within the web application, you may follow [this guide](https://docs.frontegg.com/docs/switch-active-tenant-from-your-application#react) 
- f. You may use [security rules](https://docs.frontegg.com/docs/security-rules) to block users from a specific email domain from accessing your tenant and application.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
