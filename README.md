# Winding Tree homapage

## Development

### Add new feature or fix a big
To keep it simple and prvent overhead, we are not using develop branch. 
The steps to are:
- Create a new branch from master. If you are not an internal developer you must work in your own fork.
- Work on your branch. Don't forget to update version in `package.json`
- Create a new pull request directly to master. 


### Run

Install all depdencies and run project
```bash
$ npm i
```
and run project in dev mode
```bash
$ npm run dev
```
or production

```bash
$ npm run build
$ npm start
```
### Code style

Run linter and style linter
```bash
$ npm run lint 
$ npm run lint:fix
```

### Static type check

Run flow to analyze your code
```bash
$ npm run flow
```

### Deploy

We are using Now.sh to run deploys for each pull request and to host the site. Also, we use Cloudflare.
After merge to branch master, will trigger Travis CI to run a new deploy.
