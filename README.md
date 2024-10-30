# Table of contents
# What is npm? (Node Package Manager)
### 1. Main features:
- Module management: Create libraries as a module and store them in registry.
- Versioning: Define specific version to apply them to your project.
- Dependency Management: Automatically installs and manages package dependencies, handling nested dependencies for seamless integration.

### 2. Pros and cons:
- Pros:
    + Easy to find then install dependencies
    + Shared libraries and reusable libraries 
    + Multiple frameworks
    + Easy to maintain dependencies with automatic updates
- Cons:
    + Potential for dependency bloat and large node_modules folders
    + Security risks if not carefully managing versions and updates
    + Version conflicts may arise with deeply nested dependencies

### 3. Usecase:
- Share code multiple projects: Dont need commit full library when copy code, it's just installing dependencies at node_modules by run command line - keep time.
- Centralize dependencies: Need centralized dependency - keep it uptodate and maintanable.

### 4: These dependencies can be seen as different levels:
- *"dependencies on tools"* level, where one would list all the programming languages and libraries needed for building code.

- *"dependency on individual modules"* level, which lists out every module referenced by another module in use; or even at lower levels like listing all source file dependencies

### 5. Different ways to create an npm package
- Yeoman is a Node.js-based open source project and may be used as an alternative to Grunt or Gulp in the frontend world. 
- Using Webpack and Babel: Webpack is a great way to compile your JavaScript and CSS files into one single bundle

# Implementation with on-premises registry
- [Gitlab npm packages in the package registry](https://docs.gitlab.com/ee/user/packages/npm_registry/)
- 
# Pricing and alternative:
- Use npm registry: you can unlimited upload package with public pagage and only 7$/mo with private package.
- Use verdaccio proxy: opensouce - lightweight private npm proxy registry (conly config registry in your package npmrc)
- Gitlab package registry: (See detail document)[https://docs.gitlab.com/ee/user/packages/npm_registry/index.html#publishing-a-package-by-using-a-cicd-pipeline]

# How maintain library dependencies?
# Usage:
- [Create npm project](https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/)
- [Principle npm](https://docs.npmjs.com/cli/v10/commands/npm-init)
# The step-by-step overview to create an npm package and distribute it:
1. Decide on package name and confirm that it is unique in public npm registry
2. Install Node.js (and npm)
3. Create a directory for your npm package and work from within it
4. Run `npm init` to create 'package.json'
5. Add package dependencies (if any) to 'package.json'
6. Add your Javascript code
7. Run `npm login` to login to npm registry (create an account if you don't have one)
8. Run `npm publish` to share your package with the world
9. Configure `npm` to publish to a private repository (if desired)
## Implement:
```bash
npm init
npm install typescript 
npx txc --init
# creat .npmrc add registry=http://localhost:4873
npm publish
```

# Best practice to write resuable packages:
# Workflow: