import { useContext } from "react";
import { AuthContext } from "../context/auth";

const UserAuth = ()=>{
    const context = useContext(AuthContext)

    return context;
}

export default UserAuth