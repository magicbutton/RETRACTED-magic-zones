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
import {KeyForm} from "./form";

import {KeyItem} from "../applogic/model";
export default function UpdateKey(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<KeyItem>(
      "magic-zones.key",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const key = readResult.data;
    return (
      <div>{key && 
      <KeyForm key={key} editmode="update"/>}
     
      </div>
    );
}
