import express from 'express';
import { getSearchHistory, removeItemsFromSearchHistory, searchMovie, searchPerson, searchTv } from '../controllers/searchController.js';

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

router.get("/history", getSearchHistory);
router.delete("/history/:id", removeItemsFromSearchHistory);

export default router;