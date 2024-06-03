    
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
// Job
export interface JobItem  {
    id: number;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
        name : string ;
    description : string ;
    unique_job_id : string ;
    jobtype_id : number ;
    zone_id : number ;
    person_id : number ;
    startdate : string ;
    enddate : string ;
    status : string ;
    notes : string ;

}


// Job
export const JobSchema = z.object({  
   
        name : z.string(), 
    description : z.string(), 
    unique_job_id : z.string(), 
    jobtype_id : z.number(), 
    zone_id : z.number(), 
    person_id : z.number(), 
    startdate : z.string(), 
    enddate : z.string(), 
    status : z.string(), 
    notes : z.string(), 

});

