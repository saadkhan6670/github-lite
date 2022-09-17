This is Github user and respository searching Application built on [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run test:

```bash
npm run test
```

## Overview of the project

This is a simple github application which uses the github search api to query and get data related to user and repository.

For infinite scroll pagination I used a library which handles the infinite scroll and stops where we want it to stop.

As for the tests I mocked the search api in certain conditions.

The UI is very simple. It has a single view where things are changing on the basis of condition as to show loading, or no data and data states,

As for the state management I used reduxToolit for saving the type of search, search text, and also data which is coming from api and error messages. Why did I do this? Is because ro avoid props drilling and we can get any type of data in any module as my project is in a modular approach so we have a component for almost everything so to perform some tasks and to display some data on the basis of different conditions we can get the data easily via redux store. 

Variables in store 
```bash
  searchText: this is the variable which has the text to search for in the api,

  searchType: this type is used in all of the application to perform specific tasks related to users or repositories example while hitting the api and showing the DataList component a different view.

  searchResults: {
    incomplete_results: false,
    items: [],
    total_count: 0,
  }, : This has the data coming for the api.

  loading: this handles the loading state of the app.

  errorMessage: if there is any sort of error we can use this to set the error and the snackbar component will display the error.

  showToast: to show the toast message.
```

I did my best to use all the aspects of nextJs . Also I make sure that all the components and api hits and action dispatches are typed properly.

While making this I did manual testing on metrics, Data is coming properly on every scenario and that the type is going properly. Pagination is working as expected and errors are handled. Modules are properly consolidated. 

