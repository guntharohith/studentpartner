import {Route, Redirect} from 'react-router-dom'
const isLogged = localStorage.getItem("token") === "" || !localStorage.getItem("token") ? false : true 
export function PrivateRoute({ component: Component, ...rest }){
    return(
        <Route
            {...rest}
            render={props =>
                isLogged ? (<Component {...props} />) : (<Redirect to={{ pathname: "/login" }} />)
            }
        />
    )
}
