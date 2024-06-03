    
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
// Key
export interface KeyItem  {
    id: number;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
        name : string ;
    description : string ;
    unique_key_id : string ;
    key : string ;

}


// Key
export const KeySchema = z.object({  
   
        name : z.string(), 
    description : z.string(), 
    unique_key_id : z.string(), 
    key : z.string(), 

});

