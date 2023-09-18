import React from "react";

export default function dashbordHeader( {setShowSideNav, showSideNav} ) {
  return (
    <>
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <h4 class="text-white">Collapsed content</h4>
            <span class="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={()=>{setShowSideNav( !showSideNav )}}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </>
  );
}
