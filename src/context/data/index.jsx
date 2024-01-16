import React, {createContext, useState} from "react";

const DEFAULT_VALUE = {
    state:{
        data:[],
    },
    setState: () => {

    },
};

const DataContext = createContext(DEFAULT_VALUE);

function DataContextProvider({ children }){
    const [ state, setState] = useState(DEFAULT_VALUE.state);

return(
    <DataContext.Provider value={{ state, setState }}>
        {children}
    </DataContext.Provider>
);
}

export {DataContextProvider};
export default DataContext;