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
import {KeyItem} from "../applogic/model";


/* yankiebar */

export default function ReadKey(props: { id: number }) {
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
      <div>
          
    {key && <div>
        <div>
        <div className="font-bold" >name</div>
        <div>{key.name}</div>
    </div>    <div>
        <div className="font-bold" >description</div>
        <div>{key.description}</div>
    </div>    <div>
        <div className="font-bold" >unique_key_id</div>
        <div>{key.unique_key_id}</div>
    </div>    <div>
        <div className="font-bold" >key</div>
        <div>{key.key}</div>
    </div>
    <div>
        <div>
        <div className="font-bold" >id</div>
        <div>{key.id}</div>
    </div>
        <div>
        <div className="font-bold" >created_at</div>
        <div>{key.created_at}</div>
    </div>
        <div>
        <div className="font-bold" >created_by</div>
        <div>{key.created_by}</div>
    </div>
        <div>
        <div className="font-bold" >updated_at</div>
        <div>{key.updated_at}</div>
    </div>
        <div>
        <div className="font-bold" >updated_by</div>
        <div>{key.updated_by}</div>
    </div>
    </div>
    </div>}


     
      </div>
    );
  }
      
