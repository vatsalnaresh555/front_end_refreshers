import UserNameDisplay from './UsernameDisplay.tsx';
type InfoProps = {
    username: string;
}

function Info() {  

    return (
        <div>
            
           <UserNameDisplay  />
        </div>
    );
}
/*function Info({ username }: InfoProps) {  

    return (
        <div>
            <h4>Info Component</h4>
           <UserNameDisplay username={username} />
        </div>
    );
}*/
  
  export default Info;