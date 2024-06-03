/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
"use client";
// piratos
import { useService } from "@/koksmat/useservice";
import { useState } from "react";
import {ZoneTypeForm} from "./form";

import {ZoneTypeItem} from "../applogic/model";
export default function UpdateZoneType(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<ZoneTypeItem>(
      "magic-zones.zonetype",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const zonetype = readResult.data;
    return (
      <div>{zonetype && 
      <ZoneTypeForm zonetype={zonetype} editmode="update"/>}
     
      </div>
    );
}
