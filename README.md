## Getting started with the starter kit

1. Do not use npm to install packages, use yarn. If you want to run `npm install` then delete the `yarn.lock` file and install the packages using npm.

2. Create a .env file and copy .env.sample to .env

3. Run `yarn dev` to start the development server.


## Folder Structure

```
react-typescript-starterkit-v3/
│
├── docs/                                   # Miscellaneous Documentation
│
├── public/                                 # Contains static files
│   └── favicon.ico                         # The favicon for the application
│
├── scripts/                                # Folder for utility scripts to help with development tasks
│   └── setup-user-module.sh                # Script for setting up user auth module
│
├── src/                                    # Source code for the React app
│   ├── api/                                # Folder for API fetching using react-query
│   │   └── dashboard/
│   │       ├── index.ts                    # Contains API fetching functions
│   │       └── types.ts                    # Interfaces for API data
│   │
│   ├── assets/                             # Contains static assets like images and CSS
│   │   ├── css/                            # Stores global or specific stylesheets
│   │   │   ├── index.css
│   │   │   └── tailwind.css                # Tailwind specific global css
│   │   ├── images/                         # Folder to store images
│   │   │   └── logo.png
│   │   │
│   ├── components/                         # Contains reusable, modular components
│   │   ├── common/                         # Common components used across project
│   │   │   ├── Button/
│   │   │   ├── Dropdown/
│   │   │   └── Header/
│   │   │
│   │   └── Dashboard/                      # Contains Dashboard specific components
│   │
│   ├── constants/                          # Contains Constants used throughout the project
│   │
│   ├── hooks/                              # Reuseable custom hooks
│   │   ├── useAuth.ts
│   │   └── useOutsideClick.ts
│   │
│   ├── routes/                             # Contains routing configuration
│   │
│   ├── services/                           # Contains service files to handle API requests
│   │   ├── common.ts
│   │   └── dashboard.ts
│   │
│   ├── store/                              # React-Redux setup folder for state management
│   │   ├── actions/                        # Redux action creators to dispatch actions
│   │   ├── hooks/                          # Custom hooks to interact with Redux store (e.g., useSelector, useDispatch)
│   │   ├── reducers/                       # Redux reducers to handle actions and update the store state
│   │   ├── sagas/                          # Redux-Saga files for handling side-effects (e.g., API calls)
│   │   ├── selectors/                      # Redux selectors to retrieve specific pieces of state
│   │   └── slices/                         # Redux Toolkit slices for simplifying reducer and action creation
│   │
│   ├── utils/                              # Utility functions and helper methods used across the project
│   │   ├── isEmpty.ts
│   │   └── prepareFormData.ts
│   │
│   ├── views/                              # Contains views for different sections of the application
│   │   ├── Dashboard/                      # Main dashboard view component
│   │   └── Infographics/
│   │
│   ├── App.tsx                             # Main root component that wraps the entire application
│   └── main.tsx                            # Entry point of the React application
│
└── README.md                               # Documentation file for the project
```

## Example to add shadcn component (select component- [link](https://ui.shadcn.com/docs/components/select) )

	npx shadcn-ui add select
give path as      
 **./src/ui/atoms/common/**
 
- resolve all classes with tailwind prefix
- replace classes with color variables with project color variables
- add missing dependencies ( if npx failed to install dependencies automatically e.g: @radix-ui/react-select )
