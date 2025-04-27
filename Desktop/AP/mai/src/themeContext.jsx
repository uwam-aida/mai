import { Children, useEffect } from "react";

export default function hemeProvider({Children}){

},[];
useEffect(()=>{
    localStorage.setItem('appTheme',theme);
},[Theme]);
return(
    <ThemeContext.Provider value={{theme, setTheme}}></ThemeContext.Provider>
)
})
