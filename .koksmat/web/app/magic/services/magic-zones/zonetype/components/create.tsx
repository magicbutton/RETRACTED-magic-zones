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
    import {ZoneTypeForm} from "./form";
    
    import {ZoneTypeItem} from "../applogic/model";
    export default function CreateZoneType() {
       
        const zonetype = {} as ZoneTypeItem;
        return (
          <div>{zonetype && 
          <ZoneTypeForm zonetype={zonetype} editmode="create"/>}
         
          </div>
        );
    }
