# Bingle : Back-End

![BingleMain](https://user-images.githubusercontent.com/56938630/76613670-ce4d2880-64db-11ea-922f-57ec02c91828.png)

**Back-end Model**

```
UserSchema: {
blurb: req.body.blurb,
          bootcamp: string,
          followers: [],
          following: [],
          name: string,
          photo: string,
          email: string,
          projects: [{src: string, url: string}],
          title: string,
          github: string,
          uid: string
}
```

## CRUD Items in detail:

```

Create a new user
app.post('/api/create/user', (req, res) => {}

GET users
app.get('/api/read/users', (req, res) => {}

get user by id
app.get('/api/read/user/:uid', (req, res) => {}

update user's profile
app.put('/api/create/user/profile', (req, res) => {}

add project to portfolio
app.put('/api/create/project', (req, res) => {}

return followers
app.get('/api/read/followers/:uid', (req, res) => {}

return following
app.get('/api/read/following/:uid', (req, res) => {}

follow user
app.put('/api/create/follow', (req, res) => {}

```

## Snapshot of the Required packages

![Screen Shot 2020-03-13 at 8 55 25 AM](https://user-images.githubusercontent.com/56938630/76637698-724cc900-6508-11ea-8b80-911b962a2494.png)

## Technologies:

- Hooks
- Node
- Express
- Firebase Functions
- Firebase Authentication
- Firebase Firestore
- Postman
