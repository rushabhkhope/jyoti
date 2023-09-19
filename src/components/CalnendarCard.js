import React from "react";
import { useState } from "react";

import Calendar from "react-calendar";
import DateRangePicker from "tw-daterange";

export default function CalnendarCard() {
  const [range, setRange] = useState({
    startDate: new Date(),
  });
  return (
    <>
      <div class="d-flex flex-sm-row flex-column">
        <div class="p-2 w-sm-25 h-25" >
          <div class="card">
            <div class="card-body">This is some text within a card body.
      </div>
          </div>
        </div>
        <div class="p-2 h-25">
          <div class="card">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div> <div class="p-2 h-25">
          <div class="card">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div> <div class="p-2 h-25">
          <div class="card">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>
      </div>
    </>
  );
}
