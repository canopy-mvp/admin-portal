import React, { useEffect, useState } from 'react';

export function UserDetailPage({ userId }: { userId: string }) {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    fetch(`/api/v1/users/${userId}`).then(r => r.json()).then(setUser);
  }, [userId]);
  if (!user) return <div>Loading...</div>;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Detail</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>SSN: {user.ssn}</p>
      <p>Address: {user.address}</p>
    </div>
  );
}
