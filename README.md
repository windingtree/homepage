### "How to" guide
**Note**: you need `Ruby` and `bundler` gem to be installed on your workspace to proceed.

##### To serve, run:
1. `bundle install` to install required gems
2. `yarn install` to install required npm packages
3. `gulp modernizr` to create custom build of [Modernizr](https://modernizr.com/)
4. `jekyll serve`:
    1. Optional with and/or: --host 0.0.0.0 --incremental --livereload (refer to [Jekyll: Basic Usage](https://jekyllrb.com/docs/usage/))
5. Proceed to [http://localhost:4000/winding-tree/](http://localhost:4000/winding-tree/) (by default).
    
##### To build, run:
1. `gulp build`:
    1. To optimize images in `/assets/img/` (optimization will last for about 1 minute, be patient)
    2. And *babelify, concatenate and uglify* scripts in `/assets/js` 
2. Then just commit and push into `master` branch, further build will be automatical:
    1. Gem `github-pages` will do its job 
    2. And Travis CI will run `jekyll build` with `JEKYLL_ENV=production`
3. Proceed to [https://vecoalla.github.io/winding-tree/](https://vecoalla.github.io/winding-tree/) after build had finished ([check the build status here](https://github.com/vecoalla/winding-tree/commits/master)).
    
