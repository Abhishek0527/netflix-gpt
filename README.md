# Netflix-Gpt
- create react app
- tailwind setup

# planning first before start a project
- signup & sigin  page
    -sigin form

landing page(only after authentication)
    -header
    -trailer section
        -video
        - movie title & description
        -button
    -movies card in category (horizonatal scrool)
    -footer

- signup & sigin  page
    -sigin form
    then

-netflix gpt
    -search bar
    -movie suggestion

# connect local repository with github after intial commiting
-we have to write 3 command as described by github
after creating a repository in github

# Setup routing in app
- first install the dependencies
    - npm i - D react-router-dom

- we have to configure our routes in the body component
- const approute = createBrowserRouter([
    {
        path:/,
        element:<Body>
    }
]);

this createBrowserRouter function  comes from react router dom and it takes an array of path and elements which

-And to provide this configuration into our app we need to import RouterProvider from react router dom
- pass this Router provider router={approute} to my component which replaces the component