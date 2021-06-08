

# in root directory
heroku create

# links up to remote heroku url
heroku git:remote -a YOUR_H

# in main branch
git push heroku main


# if heroku builds are stuck
heroku plugins:install heroku-builds
heroku builds:cancel -a YOUR_HEROKU_APP_NAME
