## 1. Team Dynamics

1. Pick someone into your time to host the main repository on their GitHub account.

2. Create the git repository on GitHub. It doesn't matter if the repo is public or private. **DON'T initialize the repository!**

3. Add your team members as collaborators to the repository.

4. Clone the repo to you and your team members computers. 

   `git clone <<your_github_repo_url>>`

## 2. Main GitHub Account Holder Setup

1. Contact the Lead Educator for the Web Development program to get the repo to clone from.

2. Also send the GitHub username that will be pushing changes for your team. We will add you as a collaborator to this additional repository.

3. Add the production repo as an additional to `origin` in your own local git directory

   ```bash
   $ git remote add production <<production_github_repo_url>>
   ```

4. Pull in the files from the `production` remote

   ```bash
   $ git pull production master
   ```

5. Ensure that the client and server environments work. You should see the site once everything is done.

   ```bash
   $ npm run install:all
   $ npm start
   ```

   If you are not going to use the server, you can then:

   ```bash
   $ cd ./client
   $ npm install
   $ npm start
   ```

    FYI: These environments contains the following NPM packages (`package.json`)

    Client (Create-React-App):

    ```
    "axios": "^0.19.0",
    "chart.js": "^2.8.0",
    "node-sass": "^4.12.0",
    "react": "^16.8.6",
    "react-chartjs-2": "^2.7.6",
    "react-dom": "^16.8.6",
    "react-router-dom": "^5.0.1",
    "react-scripts": "3.0.1"
    ```

    Server (Node, Express):

    ```
    "axios": "^0.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "nodemon": "^1.19.1"
    ```

6. Add and commit the files

   ```bash
   $ git commit -a -m "Initial files from the production repo"
   ```

7. Push the changes to your own GitHub account

   ```bash
   $ git push
   ```

8. The other dev team members should now be able to do the following. Once completed, they should see the site running on their computer.

   ```bash
   $ git pull
   $ npm run install:all
   $ npm start
   ```


## 3. Production Push

Early in the afternoon, do a push to the production repository (regardless of the current visual state).

First, merge your changes into the `master` branch. Once completed, test that your site is still working correctly. 

Lastly, push your changes to the `production` remote.

```bash
$ git push production
```

## 4. Publish to a live server
When the code is pushed to the production remote on GitHub, Netlify will build and deploy the client (CRA) to a live web server. 

**Please allow a _minimum_ of 5 minutes for the build process to complete and publish your site on Netlify.**

The URL for the public site is https://bstn-3d-summer-2019-team-1.netlify.com