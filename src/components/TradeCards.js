import React from "react";
import PieChartComp from "./PieChartComp";
export default function TradeCards() {
  return (
    <>
      <div class="d-flex justify-content-around flex-sm-row flex-column ">
        <div class="p-2 bd-highlight  h-25">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title"> Total Trade </h4>

              <PieChartComp></PieChartComp>
            </div>
          </div>
        </div>

        <div class="p-2 bd-highlight h-25">
          <div class="card">
            {/* <div class="card-body">This is some text within a card body.</div> */}
            <div class="d-flex flex-column bd-highlight mb-3">
              <div class="p-2 bd-highlight">
                <div class="card">
                  <div class="card-body">
                    This is some text within a card body.
                  </div>
                </div>
              </div>
              <div class="p-2 bd-highlight h-25">
                <div class="card">
                  <div class="card-body">
                    This is some text within a card body.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 bd-highlight h-25">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title"> Top Winners </h4>

              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title"> Top lossers </h4>

              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
