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
import {ZoneTypeItem} from "../applogic/model";


/* yankiebar */

export default function ReadZoneType(props: { id: number }) {
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
      <div>
          
    {zonetype && <div>
        <div>
        <div className="font-bold" >name</div>
        <div>{zonetype.name}</div>
    </div>    <div>
        <div className="font-bold" >description</div>
        <div>{zonetype.description}</div>
    </div>
    <div>
        <div>
        <div className="font-bold" >id</div>
        <div>{zonetype.id}</div>
    </div>
        <div>
        <div className="font-bold" >created_at</div>
        <div>{zonetype.created_at}</div>
    </div>
        <div>
        <div className="font-bold" >created_by</div>
        <div>{zonetype.created_by}</div>
    </div>
        <div>
        <div className="font-bold" >updated_at</div>
        <div>{zonetype.updated_at}</div>
    </div>
        <div>
        <div className="font-bold" >updated_by</div>
        <div>{zonetype.updated_by}</div>
    </div>
    </div>
    </div>}


     
      </div>
    );
  }
      
