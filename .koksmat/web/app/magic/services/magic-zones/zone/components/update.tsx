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
import {ZoneForm} from "./form";

import {ZoneItem} from "../applogic/model";
export default function UpdateZone(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<ZoneItem>(
      "magic-zones.zone",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const zone = readResult.data;
    return (
      <div>{zone && 
      <ZoneForm zone={zone} editmode="update"/>}
     
      </div>
    );
}
