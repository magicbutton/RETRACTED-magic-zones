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
    import {ServiceForm} from "./form";
    
    import {ServiceItem} from "../applogic/model";
    export default function CreateService() {
       
        const service = {} as ServiceItem;
        return (
          <div>{service && 
          <ServiceForm service={service} editmode="create"/>}
         
          </div>
        );
    }
