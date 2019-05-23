## 1. Team Dynamics

1. Pick someone into your time to host the main repository on their GitHub account.
2. Create the git repository on GitHub. It doesn't matter if the repo is public or private.
3. Add your dev team members as collaborators to the repository.
4. Clone the repo to your dev team computers

## 2. Main GitHub Account Holder Setup

1. Contact the Lead Educator for the Web Development program to get the repo to clone from.

2. Also send the GitHub username that will be pushing changes for your team. We will add you as a collaborator to this additional repository.

3. Add the repo as an additional one to the `origin`

   ```bash
   $ git remote add production <<github_repo_url>>
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

    FYI: These environments contains the following NPM packages (`package.json`)

   Client (Create-React-App):

   ```
   "axios": "^0.18.0",
   "react": "^16.8.6",
   "react-dom": "^16.8.6",
   "react-router-dom": "^5.0.0",
   "react-scripts": "3.0.1"
   ```

   Server (Node, Express):

   ```
   "axios": "^0.18.0",
   "cors": "^2.8.5",
   "express": "^4.16.4",
   "jsonwebtoken": "^8.5.1",
   "nodemon": "^1.19.0"
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

   