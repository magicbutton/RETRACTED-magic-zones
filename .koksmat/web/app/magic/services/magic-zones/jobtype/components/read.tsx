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
import {JobTypeItem} from "../applogic/model";


/* yankiebar */

export default function ReadJobType(props: { id: number }) {
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
      <div>
          
    {jobtype && <div>
        <div>
        <div className="font-bold" >name</div>
        <div>{jobtype.name}</div>
    </div>    <div>
        <div className="font-bold" >description</div>
        <div>{jobtype.description}</div>
    </div>    <div>
        <div className="font-bold" >unique_jobtype_id</div>
        <div>{jobtype.unique_jobtype_id}</div>
    </div>    <div>
        <div className="font-bold" >arg0</div>
        <div>{jobtype.arg0}</div>
    </div>    <div>
        <div className="font-bold" >arg1</div>
        <div>{jobtype.arg1}</div>
    </div>    <div>
        <div className="font-bold" >arg2</div>
        <div>{jobtype.arg2}</div>
    </div>    <div>
        <div className="font-bold" >arg3</div>
        <div>{jobtype.arg3}</div>
    </div>    <div>
        <div className="font-bold" >arg4</div>
        <div>{jobtype.arg4}</div>
    </div>    <div>
        <div className="font-bold" >arg5</div>
        <div>{jobtype.arg5}</div>
    </div>    <div>
        <div className="font-bold" >arg6</div>
        <div>{jobtype.arg6}</div>
    </div>    <div>
        <div className="font-bold" >arg7</div>
        <div>{jobtype.arg7}</div>
    </div>    <div>
        <div className="font-bold" >arg8</div>
        <div>{jobtype.arg8}</div>
    </div>    <div>
        <div className="font-bold" >arg9</div>
        <div>{jobtype.arg9}</div>
    </div>    <div>
        <div className="font-bold" >bodytemplate</div>
        <div>{jobtype.bodytemplate}</div>
    </div>
    <div>
        <div>
        <div className="font-bold" >id</div>
        <div>{jobtype.id}</div>
    </div>
        <div>
        <div className="font-bold" >created_at</div>
        <div>{jobtype.created_at}</div>
    </div>
        <div>
        <div className="font-bold" >created_by</div>
        <div>{jobtype.created_by}</div>
    </div>
        <div>
        <div className="font-bold" >updated_at</div>
        <div>{jobtype.updated_at}</div>
    </div>
        <div>
        <div className="font-bold" >updated_by</div>
        <div>{jobtype.updated_by}</div>
    </div>
    </div>
    </div>}


     
      </div>
    );
  }
      
