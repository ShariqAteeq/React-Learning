import React , {useState} from 'react';

export const AuthContext = React.createContext({
    isAuth : false,
    login : () => {}
});

const authContextProvider = (props) => {
    
    const [auth , setAuth] = useState(false);

    const loginHandler = () => {
        setAuth(true);
    };
    
    return(
    
    <AuthContext.Provider value = {{
        isAuth : auth,
        login : loginHandler
    }}
    >
        {props.children}
    </AuthContext.Provider>
    );
};

export default authContextProvider;