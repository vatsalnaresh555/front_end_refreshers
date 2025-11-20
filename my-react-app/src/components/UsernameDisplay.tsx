import { useContext } from "react";
import { UserContext } from "../context/UserContext.tsx";

type UsernameDisplayProps = {
    username: string;
}
function UsernameDisplay() {
    const username = useContext(UserContext);
    return <p>Logged in as: {username}</p>;
}
/*function UsernameDisplay({ username }: UsernameDisplayProps) {
    return <p>Logged in as: {username}</p>;
}*/


export default UsernameDisplay;