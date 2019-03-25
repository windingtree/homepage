# Winding Tree Homepage

## Development

### Local deployment

Clone repository and install all dependencies
```bash
$ npm i
```

### Local run

to run project in dev mode
```bash
$ npm run dev
```

to run project in production mode 
```bash
$ npm run build
$ npm start
```

### Code style (must use before push to master)

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

### Update repository
To keep it simple and prevent overhead, we are not using develop branch. 
The steps to are:
- Create a new branch from master. If you are not an internal developer you must work in your own fork.
- Work on your branch. Don't forget to update version in `package.json`
- Run **Code style** check (```npm run lint:fix```) before creating a PR and fix errors
- Create a new pull request directly to master, assign the PR to repository Admin to review
- Check Travis and Now.sh check statuses and fix issues in case of errors. All checks are mandatory

### Deploy

We are using Now.sh to run deploys for each pull request and to host the site. Also, we use Cloudflare.
After merging a PR to branch master, will trigger Travis CI to run a new deploy.


## Updating content

All content is stored in data .js files in ```/data/commons/``` and ```/data/features/```

```/data/commons/``` contains data files with default content for common components that are used across entire website

```/data/features/``` contains data files with content for every page. These data files may have content for common components that overwrite default content (from ```/data/commons/```) if necessary. You can edit *.js files keeping the structure unmodified.

______________________

### Basically you need to edit files only in **/data/features/** to update the content.
**You can edit *.js files keeping the structure unmodified.**

**Make sure you optimize images before creating a PR**
______________________