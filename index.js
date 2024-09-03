require('dotenv').config()
const express= require("express")
const app= express()
const port = 4000
const githuData={
    "login": "Suditi",
    "id": 5801538,
    "node_id": "MDQ6VXNlcjU4MDE1Mzg=",
    "avatar_url": "https://avatars.githubusercontent.com/u/5801538?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Suditi",
    "html_url": "https://github.com/Suditi",
    "followers_url": "https://api.github.com/users/Suditi/followers",
    "following_url": "https://api.github.com/users/Suditi/following{/other_user}",
    "gists_url": "https://api.github.com/users/Suditi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Suditi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Suditi/subscriptions",
    "organizations_url": "https://api.github.com/users/Suditi/orgs",
    "repos_url": "https://api.github.com/users/Suditi/repos",
    "events_url": "https://api.github.com/users/Suditi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Suditi/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2013-10-29T07:56:08Z",
    "updated_at": "2016-02-19T09:33:31Z"
  }
app.get("/",(req,res)=>{
    res.send("app is working")          //get request krni h app ak slash / home route h usko listen kro jismai res, req hoga to jo slash mai agr koi request agr aati h to usko call back kr denge and usmai response mai send kr denge hello world
});

app.get("/twitter",(req,res)=>{
 res.send('suditi')
})
app.get("/login",(req,res)=>{
    res.send("<h1>Welcome to Telepathy</h1>")
})
app.get("/youtube",(req,res)=>{
    res.send("BACKEND WAY")
})
app.get("/git",(req,res)=>{
res.json(githuData)
})
app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${port}`); // listen ki power bhi app se aati h 
});