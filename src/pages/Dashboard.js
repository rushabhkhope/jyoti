import React, { useState } from "react";
import SideNav from "../components/sideNav";
import DashbordHeader from "../components/dashbordHeader";
import TradeCards from './../components/TradeCards'
import GraphCard from "../components/GraphCard";
import CalnendarCard from "../components/CalnendarCard";
import TableCard from "../components/TableCard";

import PieChartComp from "../components/PieChartComp";


export default function Dashbaord() {
  const [showSideNav, setShowSideNav] = useState(true);
  return (
    <>
      <div class="container-fluid bg-secondary h-100" >
        <div class="d-flex flex-sm-row flex-column bd-highlight mb-3">
          {showSideNav ? (
            <div class="p-2 bd-highlight  mw-25 " >
              <SideNav></SideNav>
            </div>
          ) : null}

          <div class="p-2 bd-highlight flex-fill">
            <div class="d-flex flex-column">
              {/* ---------headerNavbar------------- */}
              <div class="p-2">
                <DashbordHeader
                  setShowSideNav={setShowSideNav}
                  showSideNav={showSideNav}
                ></DashbordHeader>
                {/* ------------------------- */}
              </div>
              <div class="p-2">
                <TradeCards></TradeCards>
              </div>
              <div class="p-2 " >
                <GraphCard></GraphCard>
              </div>
              <div class="p-2">

                <CalnendarCard></CalnendarCard>
              </div>
              <div class="p-2">
                <TableCard></TableCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
