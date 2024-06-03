    
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
// Zone
export interface ZoneItem  {
    id: number;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
        name : string ;
    description : string ;
    unique_zone_id : string ;
    zonetype_id : number ;
    primaryowner_id : number ;
    secondaryowner_id : number ;
    accountable_id : number ;

}


// Zone
export const ZoneSchema = z.object({  
   
        name : z.string(), 
    description : z.string(), 
    unique_zone_id : z.string(), 
    zonetype_id : z.number(), 
    primaryowner_id : z.number(), 
    secondaryowner_id : z.number(), 
    accountable_id : z.number(), 

});

