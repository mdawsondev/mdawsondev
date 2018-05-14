## Stack and Workflow

A complete rundown of the tools I use, why I use them, how I use them, and my process for building a project from start to end.

## Tech

* **Visual Studio Code** - the plugins are extensive and powerful enough to emulate a full IDE.
* **Cmder with Hyper Overlay** - I like the power of Cmder but enjoy the look and idea behind Hyper.
* **Modern JavaScript** - Using the latest of ES6+ and transpiling for older computers.
* **React** - I prefer react because it's much less overhead than Angular or Vue, which are full-blown frameworks and not libraries.
* **Jest** - I use Jest for unit testing because it works harmoniously with React.
* **Sass** - Though not always necessary, I like the Sass modular design and the power of nesting CSS and the ability to use conditionals, variables, and loops if they're needed.
* **GitHub** - Issue tracking, public deployment, collaberation.
* **Node.js** - I mostly use Node for local support of JavaScript (servers, CLI, etc.), but Node is an extremely powerful development enviornment that I have use for local native applications.
* **git** - Version Control.
* **Webpack** - Bundling; alternatively Gulp, but Webpack is becoming by-far the leader here.
* **Firebase** - Easy database management for small to mid-sized projects.

## Workflow

1. **Brainstorming** - Writing general ideas, creating a flow chart, seeing what I can compile.
2. **Specs** - Refine the idea into a spec that can be easily understood by myself and the client.
3. **Technical Review** - Decide what technologies are best suited for this project.
4. **Environment Setup** - Install/implement said technologies to prepare project for development.
5. **Modular Planning** - Write how the pieces will fit together.
6. **Big Picture** - Working from the broad view to specific details, begin putting together components.
7. **Testing** - Beyond unit testing, running a full-sweep test to try and break the application.
8. **Deployment** - Stable, fully tested releases.
9. **New Features** - New features are built on a new git branch and merged after fully being tested.

## Technical Failsafes

* **Variable Typing** - Using TypeScript or React's prop-types package, depending on what language I'm using.
* **Modular CSS** - Ensure CSS is modular and specific to the component it affects (Sass/Imports).
* **TDD** - Building unit tests with Jest/Mocha/Jasmine for every new function.
* **Version Control** - Using git to build new features/components on a new branch then importing them to master once they're confirmed to work without issues.
* **Mobile First** - When building the design, start from a mobile-first state.
* **One-Step Build** - The entire build process is handled by a single build script to prevent user error.
* **Polyfills** - Newer code needs to be transpiled or reworked with polyfills.
* **Can I Use** - Verify that support is high enough to prevent poor user experience.
* **Specs** - Always have a spec document and make sure the project sticks to the plan.
* **Daily/Nightly Builds** - Build once a day, make sure the build works and no new bugs were introduced.
* **Issue Tracking** - Write down and document every bug; keep bug tracking in a database.

## Better Code

* **BEM** - Block, Element, Modifier structure of classs for CSS.
* **Functional vs OOP** - Using the right tool for the job depending on the languages and libraries I intend to use.
* **Functional Design** - Functions do exactly one thing.
* **Modular Design** - Components and objects are segregated into their own space and imported where needed.
* **DRY** - Don't repeat yourself: make use of components, variables, and functions as much as possible.
* **Time Complexity** - Try to minimize time complexity of functions, always considering Big O (worst case).
