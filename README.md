<img alt="Readme-image" src="https://github.com/user-attachments/assets/962540f0-6a27-4a4e-b6da-76a4b0b945f8">

## Stack technologies

- [React](https://react.dev/learn) + [Typescript](https://www.typescriptlang.org/docs/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - Small, fast, and scalable bearbones state management solution
- [Shadcn UI](https://ui.shadcn.com) - As ready-made UI components
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms with
- [React Query](https://tanstack.com/query) - Automatically caches data from your queries, reducing the need for redundant network requests and improving application performance.
- [Tailwindcss](https://tailwindcss.com) - For styles
- [Nextjs](https://Nextjs.org/) - framework for SSR

> [!IMPORTANT]  
> This code structure was created using FSD (Feature-Sliced Design). Please read the FSD documentation before making any changes. Tailwind CSS and shadcn-ui are used for UI components. Define any CSS units such as px, rem, etc., in globals.css. React Query is used for API integration.

## Basic requirements for the project

> [!NOTE]
> Vesion Node +v20\*

## For Developers

```bash
npm i
# and
npm run dev
# or
yarn install
# and
yarn dev
```

Run the project at [localhost:3000](http://localhost:3000)

### To launch the project in the production environment, run the command:

```bash
npm i
npm run build
npm run dev
# or
yarn install
yarn build
yarn dev
```

run the project at [localhost:3000](http://localhost:3000)

> [!NOTE]
> You need to create .env.development following the example of .env.example so that all parameters are

## Project structure (we will describe large sections separately inside the folder)

```
Root
├── .hasky - Prehooks for commits
│
├── public - All public files that will be included in the production build
│
├── src - Development folder
│   │
│   ├── api- Describes all back requests indicating the Endpoint for firebase
│   │
│   ├── app - Here is the entire project structure by structure
│   │
│   ├── assets - All images of the project should be in this folder
│   │
│   ├── components - Components common to the project that are not included in the ui
│   │
│   ├── constants - Common constants for the project that are used throughout the project
|   |
│   ├── helpers - Contains utility functions and code for auxiliary tasks throughout the project
│   │
│   ├── layouts - For all layouts of the project
│   │
│   ├── lib - Contains shared utility functions and reusable components.
|   |
│   ├── locales - All project language words are formed in this folder!
|   |
│   ├── modules - All modules of the project, that is, all pages, the main code is created in this folder
|   |
│   ├── providers - All project providers are described and formed in this folder
│   │
│   ├── shared - Components that are used throughout the project
│   │
│   ├── stores - State management is written in this folder
│   │
│   ├── styles - For globals css
│   │
│   ├── types- General types by src
│   │
│   └── widgets- Contains reusable UI components and widget implementations
│
├── .env.example - Example of environment variables for production.
├── .eslintrc.json - Configuration for ESLint.
├── .gitignore - Specifies which files and directories to ignore in Git.
├── .npmrc - Configuration for npm, including registry settings and package behaviors.
├── .prettierignore - Specifies which files and directories to ignore for Prettier formatting.
├── tailwind.config.ts - Configuration for tailwind.
├── .prettierrc - Configuration for Prettier formatting.
├── next.config.ts - Configuration settings for Next.js.
├── package.json - List of project dependencies and scripts.
├── postcss.config.cjs - Configuration for PostCSS.
└── tsconfig.json - Configuration for TypeScript
```

#### ☝️ - IMPORTANT:

1. The names of folders and files are always in notation (kebab-case), except for components that are both folders and files in notation (PascalCase)
2. From the component, everything always imports from the index.ts file
3. Styles are always in tailwindcss
4. Interfaces in types.ts
5. constants in constants.tsx

# GIT

## Push to git

> [!NOTE]
> When pushing to git, the task given on **Trello** is thrown to the brand with the Id

### Created branch

```bash
git checkout -b feat/TASK_ID
```

### Switch to another branch

```bash
git switch feat/TASK_ID
```

### Push to git branch

> [!WARNING]
> Check that the branch is in the your task branch

```bash
git add .
git commit -m "YOUR_COMMENT"
git push origin feat/TASK_ID
```

### Get Pull from the main code (from dev branch)

```bash
git pull origin dev
```

#### Get Pull from the main code (from dev branch) rebase

> [!WARNING]
> Ff git pull asks for rebase, you can get git pull from **dev** branch with this command

```bash
git pull origin dev  --no-rebase
# or
git pull origin dev  --rebase
```

> [!CAUTION]
> Inform the **TEAM LEAD** that every time a pull PR is released on github, the code will be reviewed. And if there is a task code review, it goes to the **dev** branch and then moves to the next task!

## Code Review

    1) If the code is not ready, then mark your PR as “Draft” with the “Mark as draft” button
    2) Considers Architectural, Structural and other agreements on the design of PR to be critical and for this is not passed further than PR
    3) The remaining comments are purely advisory in nature and are not a blocker for PR
    4) Any controversial issue is discussed by the team and if there is no violation of points 1-2, then this dispute is not blocked!

## ☝️ - IMPORTANT:

> - To type everything and anything that is possible is not to use ANY!
> - any enemy! - always discuss exceptions with the team!
> - avoid console.log if possible, in extreme cases console.error console.warn
> - mutate values ​​outside the mobx store (use exclusively actions from the mobx store for such things.)
#   l m s . g l m v . d e v  
 