import React from "react";
import PieChartComp from "./PieChartComp";
export default function TradeCards() {
  return (
    <>
      <div class="d-flex justify-content-around flex-sm-row flex-column">
        <div class="p-2 bd-highlight">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title"> Total Trade </h4>

              <PieChartComp></PieChartComp>
            </div>
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>
      </div>
    </>
  );
}
