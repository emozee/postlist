import { useEffect, useState } from "react";

// 1. Updated Type for Users
type User = Readonly<{ 
  id: number; 
  name: string; 
  email: string;
  company: { catchPhrase: string }; // We can use this as a "body" description
}>;

export function PostsList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white animate-pulse p-10">Loading users...</p>;

  return (
    <ul className="space-y-3 p-6 max-h-[500px] overflow-y-auto bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl">
      <h3 className="text-white font-black uppercase tracking-widest mb-4">GMC Team Members</h3>
      {users.map((u) => (
        <li key={u.id} className="rounded-xl border border-white/20 bg-white/40 p-4 text-[#101828] shadow-sm transition-all hover:bg-white/60">
          <p className="font-bold text-lg">{u.name}</p>
          <p className="text-sm text-blue-800 italic">{u.email}</p>
          {/* Rendering the "body" equivalent */}
          <p className="mt-2 text-sm text-gray-700">{u.company.catchPhrase}</p>
        </li>
      ))}
    </ul>
  );
}