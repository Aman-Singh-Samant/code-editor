# live demo :
## https://aman-singh-samant.github.io/code-editor/

## The number of requests to API is 50 per day.

The app is using monaco editor and oceanic theme.

Above the editor we have 1 selector component haveing different programming languages to choose from. There are also three 
button components to left of selector. 

Lock button can toggle the editor between readonly and read/write (image also changes).

Save button downloads the file in user's device (default file type is text but language extensions can be added by the user when saving the file). 

Copy button copies the code from the editor and gives a sucess notification at top right. On failure of copying the code it gives error notification (using toast) on top right.

At right bottom we have compile button which sends the code to Judge() along with the language and custom input.
Compilation is done using Judge() in RapidAPI. It polls the api and on successful response gives success notification at top right, error notification is given on failed response. 

Above the compilation button we have custom input component which takes input from user and gives to Judge() for compilation. 


Above it is Output component which shows the Std output on sucessful compilation of code. On receving other status code other data is shown. Types of staus code can be seen below in the statuses obj. 

Compilation time and memory along with the type of status is shown  at bottom right after the successful response from api.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Different status code we can get from api

export const statuses = [
  {
    id: 1,
    description: "In Queue",
  },
  {
    id: 2,
    description: "Processing",
  },
  {
    id: 3,
    description: "Accepted",
  },
  {
    id: 4,
    description: "Wrong Answer",
  },
  {
    id: 5,
    description: "Time Limit Exceeded",
  },
  {
    id: 6,
    description: "Compilation Error",
  },
  {
    id: 7,
    description: "Runtime Error (SIGSEGV)",
  },
  {
    id: 8,
    description: "Runtime Error (SIGXFSZ)",
  },
  {
    id: 9,
    description: "Runtime Error (SIGFPE)",
  },
  {
    id: 10,
    description: "Runtime Error (SIGABRT)",
  },
  {
    id: 11,
    description: "Runtime Error (NZEC)",
  },
  {
    id: 12,
    description: "Runtime Error (Other)",
  },
  {
    id: 13,
    description: "Internal Error",
  },
  {
    id: 14,
    description: "Exec Format Error",
  },
];
