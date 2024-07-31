const express = require ('express');
const userController = require ('../controller/userController')
const userRouter = express.Router ();

userRouter.post('/register', userController.userRegister);
userRouter.post('/login', userController.userLogin);
userRouter.put('/update', userController.userUpdate);
userRouter.get('/verify', userController.verifyUser);


module.exports = userRouter;