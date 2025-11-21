
type UserCardProps ={ name:string;
    age?:number;
    isAdmin:boolean;
    hobbies:string[];
    id:number;
    onSelect :(id:number)=>void;
    role?:  "user" | "admin" | "guest";
    status?:"online"  | "offline";


}

export const UserCard=({name,age=0,isAdmin,hobbies,id,onSelect,role="user",status="offline"}:UserCardProps)=>{

    return(
        <div onClick={()=>onSelect(id)}  style={{ border:"1px solid #ccc",padding:"12px",marginBottom:"8px",borderRadius:"6px",cursor:"pointer"}}>
            <h3>{name}</h3>
            <p>{age}</p>
           { isAdmin && <p>Admin User</p>}
           <p>Hobbies:{hobbies.join(",")}</p>
           
         <p>Status: {status === "online" ? "🟢 Online" : "⚪ Offline"}</p>
           <p>Role:{role}</p>
         
            
            </div>

         
    );
}