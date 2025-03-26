import { createContext } from "react";

// export const MessagesContext=createContext();
export const MessagesContext = createContext({
    messages: [],
    setMessages: () => {}
});