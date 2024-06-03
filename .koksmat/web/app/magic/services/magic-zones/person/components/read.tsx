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
import {PersonItem} from "../applogic/model";


/* yankiebar */

export default function ReadPerson(props: { id: number }) {
    const { id } = props;
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<PersonItem>(
      "magic-zones.person",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const person = readResult.data;
    return (
      <div>
          
    {person && <div>
        <div>
        <div className="font-bold" >name</div>
        <div>{person.name}</div>
    </div>    <div>
        <div className="font-bold" >description</div>
        <div>{person.description}</div>
    </div>    <div>
        <div className="font-bold" >unique_person_id</div>
        <div>{person.unique_person_id}</div>
    </div>    <div>
        <div className="font-bold" >displayname</div>
        <div>{person.displayname}</div>
    </div>    <div>
        <div className="font-bold" >email</div>
        <div>{person.email}</div>
    </div>
    <div>
        <div>
        <div className="font-bold" >id</div>
        <div>{person.id}</div>
    </div>
        <div>
        <div className="font-bold" >created_at</div>
        <div>{person.created_at}</div>
    </div>
        <div>
        <div className="font-bold" >created_by</div>
        <div>{person.created_by}</div>
    </div>
        <div>
        <div className="font-bold" >updated_at</div>
        <div>{person.updated_at}</div>
    </div>
        <div>
        <div className="font-bold" >updated_by</div>
        <div>{person.updated_by}</div>
    </div>
    </div>
    </div>}


     
      </div>
    );
  }
      
