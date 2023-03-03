import React, {useEffect} from 'react';
import {useAuth} from '../auth';

export default function Dashboard() {
  const auth = useAuth();

  function handleSignOut() {
    auth.signout(() => {});
  }

  return (
    <>
      <div>
        <h1>
          This is the secure Dashboard Page. The user `{auth.user.username}` is
          logged in. The JWT is: `{auth.user.token}`
        </h1>
      </div>
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
}
