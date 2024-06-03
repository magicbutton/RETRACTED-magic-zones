    
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
// Person
export interface PersonItem  {
    id: number;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
        name : string ;
    description : string ;
    unique_person_id : string ;
    displayname : string ;
    email : string ;

}


// Person
export const PersonSchema = z.object({  
   
        name : z.string(), 
    description : z.string(), 
    unique_person_id : z.string(), 
    displayname : z.string(), 
    email : z.string(), 

});

