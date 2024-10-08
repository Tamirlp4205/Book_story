
import {  Request, Response, RequestHandler } from "express";
import bookScema from "../schema/book";


export const createBook: RequestHandler = async (req: Request, res: Response) => {
  const { name, publisher, publisherAt, image, author, type,pages,summary } = req.body;

  try {
    const newBook = new bookScema({
      name,
      publisher,
      publisherAt,
      image,
      author,
      type,
      pages,
      summary,
    });

    const response = await newBook.save();
    res.status(201).json(response); 
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ message: 'Internal server error' }); 
  }
};

export const getAllBook: RequestHandler = async (req: Request, res: Response) => {
  try {
    const users = await bookScema.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getBookById: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const book = await bookScema.findById(id);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    res.status(200).json(book);
  } catch (error) {
    console.error('Error fetching Book:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateBook: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedUser = await bookScema.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedUser) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating Book:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteBook: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedUser = await bookScema.findByIdAndDelete(id);
    if (!deletedUser) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Error deleting Book:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};