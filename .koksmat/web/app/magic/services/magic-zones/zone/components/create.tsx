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
    import {ZoneForm} from "./form";
    
    import {ZoneItem} from "../applogic/model";
    export default function CreateZone() {
       
        const zone = {} as ZoneItem;
        return (
          <div>{zone && 
          <ZoneForm zone={zone} editmode="create"/>}
         
          </div>
        );
    }
