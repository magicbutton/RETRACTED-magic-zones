    
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/       
"use client";
import { z } from "zod";
// spunk
// Service
export interface ServiceItem  {
    id: number;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
        name : string ;
    description : string ;
    unique_service_id : string ;
    service : string ;

}


// Service
export const ServiceSchema = z.object({  
   
        name : z.string(), 
    description : z.string(), 
    unique_service_id : z.string(), 
    service : z.string(), 

});

