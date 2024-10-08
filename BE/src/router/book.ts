import { Router } from 'express';
import { createBook,getAllBook,getBookById,updateBook,deleteBook} from './../controller/book';

const bookRouter = Router();
bookRouter.post("/create", createBook);
bookRouter.get("/get", getAllBook);
bookRouter.get("/:id", getBookById);
bookRouter.put("/:id/update", updateBook);
bookRouter.delete("/:id/delete", deleteBook);


export default bookRouter;