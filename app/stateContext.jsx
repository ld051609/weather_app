import {createContext, useState} from 'react';

export const StateContext = createContext();    

export const StateProvider = ({children}) => {
    const [imgIcon, setImgIcon] = useState('');
    return(
        <StateContext.Provider value={{imgIcon, setImgIcon}}>
            {children}
        </StateContext.Provider>
    )
}