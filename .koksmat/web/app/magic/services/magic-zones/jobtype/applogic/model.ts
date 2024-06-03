    
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
// JobType
export interface JobTypeItem  {
    id: number;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
        name : string ;
    description : string ;
    unique_jobtype_id : string ;
    arg0 : string ;
    arg1 : string ;
    arg2 : string ;
    arg3 : string ;
    arg4 : string ;
    arg5 : string ;
    arg6 : string ;
    arg7 : string ;
    arg8 : string ;
    arg9 : string ;
    bodytemplate : string ;

}


// JobType
export const JobTypeSchema = z.object({  
   
        name : z.string(), 
    description : z.string(), 
    unique_jobtype_id : z.string(), 
    arg0 : z.string(), 
    arg1 : z.string(), 
    arg2 : z.string(), 
    arg3 : z.string(), 
    arg4 : z.string(), 
    arg5 : z.string(), 
    arg6 : z.string(), 
    arg7 : z.string(), 
    arg8 : z.string(), 
    arg9 : z.string(), 
    bodytemplate : z.string(), 

});

