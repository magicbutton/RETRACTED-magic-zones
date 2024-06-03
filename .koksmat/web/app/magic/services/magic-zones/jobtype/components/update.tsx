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
import {JobTypeForm} from "./form";

import {JobTypeItem} from "../applogic/model";
export default function UpdateJobType(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<JobTypeItem>(
      "magic-zones.jobtype",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const jobtype = readResult.data;
    return (
      <div>{jobtype && 
      <JobTypeForm jobtype={jobtype} editmode="update"/>}
     
      </div>
    );
}
