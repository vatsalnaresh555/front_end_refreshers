
type UsernameDisplayProps = {
    username: string;
}
function UsernameDisplay({ username }: UsernameDisplayProps) {
    return <p>Logged in as: {username}</p>;
}


export default UsernameDisplay;