import React, {useEffect} from 'react';
import {useAuth} from '../../auth';
import ArchiveCount from './archivecount';
import CreateFlow from './createflow';
import LiveList from './livelist';
import PublishCount from './publishcount';
import TotalCount from './totalcount.jsx';


export default function Dashboard() {
  const auth = useAuth();

  function handleSignOut() {
    auth.signout(() => {});
  }


  return (
    <>
    <h1> welcome {auth.user.username}</h1>
    <CreateFlow/>
    <ArchiveCount/>
    <TotalCount/>
    <PublishCount/>
    <LiveList/>
    </> 
  );
}

      {/* <div>
        <h1 style={{'width': '200px'}}>
          This is the secure Dashboard Page. The user `{auth.user.username}` is
          logged in. The JWT is: `{auth.user.token}`
        </h1>
      </div>
      <button onClick={handleSignOut}>Sign Out</button> */}