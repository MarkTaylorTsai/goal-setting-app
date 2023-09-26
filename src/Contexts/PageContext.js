import React, { createContext } from "react";

const PageContext = createContext(null);

function PageContextProvider({children, onAddGoal, goals, onDeleteGoal}){
    return(
        <PageContext.Provider value={{onAddGoal, goals, onDeleteGoal}}>{children}</PageContext.Provider>
    )
}

export {PageContext, PageContextProvider};

