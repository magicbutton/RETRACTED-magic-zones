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
import {ZoneItem} from "../applogic/model";


/* yankiebar */

export default function ReadZone(props: { id: number }) {
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
      <div>
          
    {zone && <div>
        <div>
        <div className="font-bold" >name</div>
        <div>{zone.name}</div>
    </div>    <div>
        <div className="font-bold" >description</div>
        <div>{zone.description}</div>
    </div>    <div>
        <div className="font-bold" >unique_zone_id</div>
        <div>{zone.unique_zone_id}</div>
    </div>    <div>
        <div className="font-bold" >zonetype</div>
        <div>{zone.zonetype_id}</div>
    </div>    <div>
        <div className="font-bold" >primaryowner</div>
        <div>{zone.primaryowner_id}</div>
    </div>    <div>
        <div className="font-bold" >secondaryowner</div>
        <div>{zone.secondaryowner_id}</div>
    </div>    <div>
        <div className="font-bold" >accountable</div>
        <div>{zone.accountable_id}</div>
    </div>
    <div>
        <div>
        <div className="font-bold" >id</div>
        <div>{zone.id}</div>
    </div>
        <div>
        <div className="font-bold" >created_at</div>
        <div>{zone.created_at}</div>
    </div>
        <div>
        <div className="font-bold" >created_by</div>
        <div>{zone.created_by}</div>
    </div>
        <div>
        <div className="font-bold" >updated_at</div>
        <div>{zone.updated_at}</div>
    </div>
        <div>
        <div className="font-bold" >updated_by</div>
        <div>{zone.updated_by}</div>
    </div>
    </div>
    </div>}


     
      </div>
    );
  }
      
