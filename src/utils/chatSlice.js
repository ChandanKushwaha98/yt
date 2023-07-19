import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT, OFFSET_LIVE_CHAT } from "./contants";

const chatSlice = createSlice({
    name: 'Chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(LIVE_CHAT_COUNT, state.messages.length - 1)
            state.messages.push(action.payload)
        }
    }
})


export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;