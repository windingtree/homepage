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
Create a new Github tag will trigger Travis CI to run a new deploy

To create a new tag from command line 
```bash
$ git checkout master 
$ git pull                        # Tag must be created from latest commmit in master always
$ git tag -a vx.x.x -m "vx.x.x"   # Version must be the same as version in package.json
$ git tag

$ git push origin vx.x.x
```
You can do it from web client. For more information read
- [Working with tags](https://help.github.com/articles/working-with-tags/)
- [About releases](https://help.github.com/articles/about-releases/)