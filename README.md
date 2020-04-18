# INSTALL

```sh
$ npm install
$ npm start
```

# API

| URL | req | res |
|-----|-----|-----|
| `GET /api/tasks` | ∅ | `200 Ok [ {"title": "Shopping", "doneyet": false}, ... ]` |
| `POST /api/tasks` | `{"title": "Shopping"}` | `201 Created {"title": "Shopping", "doneyet": false}` |
| `PUT /api/tasks/1234` | `{"doneyet": true}` | `200 Ok {"title": "Shopping", "doneyet": true}` |
| `DELETE /api/tasks/1234` | ∅ | `204 No Content` |