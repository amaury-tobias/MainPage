module.exports = {
  apps: [{
    name: "MainPage",
    script: "./bin/www"
  }],
  "deploy": {
    "production": {
      //"key"  : "/path/to/key.pem",
      "user": "amaurytobias",
      "host": "amaurytq.me",
      "ref": "origin/master",
      "repo": "https://github.com/amaury-tobias/MainPage.git",
      "path": "/home/amaurytobias/production/MainPage",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    },
  }
}