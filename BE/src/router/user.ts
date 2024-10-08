import { Router } from 'express';
import { createUser,getAllUsers,getUserById,updateUser,deleteUser } from './../controller/user';

const userRouter = Router();
userRouter.post("/create", createUser);
userRouter.get("/get", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id/update", updateUser);
userRouter.delete("/:id/delete", deleteUser);


export default userRouter;