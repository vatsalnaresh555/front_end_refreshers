import { useState } from "react";

export function NameInput() {

    const [name, setName] = useState<string>("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    return ( <div>
     <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
     <p>Your name is: {name}</p>

    </div>);
}