import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice"; // Import the slice reducer

export default configureStore({
    reducer: {
        store: reducer, // Use the slice reducer here
    },
});
