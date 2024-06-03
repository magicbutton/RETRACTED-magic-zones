    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
    "use client";
    import { useService } from "@/koksmat/useservice";
    import { useState } from "react";
    import {JobTypeForm} from "./form";
    
    import {JobTypeItem} from "../applogic/model";
    export default function CreateJobType() {
       
        const jobtype = {} as JobTypeItem;
        return (
          <div>{jobtype && 
          <JobTypeForm jobtype={jobtype} editmode="create"/>}
         
          </div>
        );
    }
