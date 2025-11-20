import Info from "./Info.tsx";

type Profilerops = {    username: string; }


/*function Profile({ username }: Profilerops) {
    return (
        <div>
            <h3>Profile Component</h3>
            <Info username={username} />
        </div>
    );
}*/

function Profile( ) {
    return (
        <div>
            
            <Info  />
        </div>
    );
}


export default Profile;