import './App.css';
import { AdminPortal } from '@frontegg/react'
// import { useEffect } from 'react';
import { useAuth, useAuthActions, useLoginWithRedirect, ContextHolder } from "@frontegg/react";

function App() {
  const { switchTenant } = useAuthActions();
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  // useEffect(() => {
  //   if (!isAuthenticated) {
  // loginWithRedirect();
  //   }
  // }, [isAuthenticated, loginWithRedirect]);

  // https://docs.frontegg.com/docs/switch-active-tenant-from-your-application#react
  // Use user.tenantIds to get the tenants the user is a member of
  const handleSwitchTenant = (tenantId: string) => { 
    switchTenant({ tenantId: tenantId });
  };

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const handleClick = () => {
    AdminPortal.show();
  };

  return (
    <div className="App">
      { isAuthenticated ? (
        <div>
          {/* https://docs.frontegg.com/docs/switch-active-tenant-from-your-application#react */}
          <div>
            {/* https://www.w3schools.com/tags/tag_select.asp */}
            <label for="tenants">Choose a Tenant:</label>
            <select name="tenants" id="tenants">
              {user?.tenantIds.map((tenantId) => (
                <option onClick={() => handleSwitchTenant(tenantId)} value={tenantId}>{tenantId}</option>
              ))}
            </select>
          </div>
          <button onClick={handleClick}>Settings</button>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;
