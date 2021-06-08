
heroku login


# links up to remote heroku url
heroku git:remote -a YOUR_HEROKU_APP_NAME

git add .
git commit -m ""

# in main branch
git push heroku main/master

heroku open

# if heroku builds are stuck
heroku plugins:install heroku-builds
heroku builds:cancel -a YOUR_HEROKU_APP_NAME




# instructions 
git init
heroku git:remote -a insert-your-app-name-here
git add .
git commit -am "Deploy app to Heroku"
git push heroku master

# error: src refspec master does not match any
git push heroku HEAD:master

# for logs
heroku logs --tail


