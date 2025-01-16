import express from "express";
const router = express.Router();
import{
    searchMovie,
    searchPerson,
    searchTv,
    getSearchHistory,
    removeItemFromSearchHistory
} from "../controllers/search.controller.js";

router.get("/person/:query",searchPerson);
router.get("/movie/:query",searchMovie);
router.get("/tv/:query",searchTv);

router.get("/history",getSearchHistory);
router.delete("/history/:id", removeItemFromSearchHistory);

export default router;