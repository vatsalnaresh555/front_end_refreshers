type ProfileCardProps = {
  name: string; 
  age?: number;  
  country?: string; 
  avatarUrl?: string;
};

export function ProfileCard({
  name,
  age,
  country = "unknown",
  avatarUrl = "https://via.placeholder.com/80",
}: ProfileCardProps) {
  return( <div>
    <h2>{name}</h2>
    {age && <p>Age: {age}</p>}
    <p>Country: {country}</p>
    <img src={avatarUrl} width={80} />
  </div>);
}
