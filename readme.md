## GoIT Node.js Course Template Homework

Please fork this repository to complete your homework assignments (2-6).
Forking will create a repository on your http://github.com account.

## Expalanation Recording to hanle homeworks in the Node.js Block
[Watch the video](https://www.loom.com/share/007c97d271604e02ae61adbb5b69edd3)

### Commands:

- `npm start` &mdash; starts the server in production mode.
- `npm run start:dev` &mdash; starts the server in development mode.
- `npm run lint` &mdash; runs eslint to check the code. Make sure to execute this before each PR and fix all linting errors.
- `npm lint:fix` &mdash; same as the previous command but fixes simple linting errors automatically.



## Flow of changes from HW3 to HW4
- .env
- .usersModel.js
- .usersController.js
- bcrypt, jsonwebtoken
- authenticateToken middleware

## Note HW5
1. serve static files (app.js)
2. avatarURL(string) in schema
3. gravatar package to generate a default avatar url
4. updateAvatar Controller PATCH /users/avatars
5. jimp package for processing images
6. multer package for accepting multipart/form-data encoding type to send files (upload.js middleware; usage on usersRouter.js)
