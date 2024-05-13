/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   




CREATE TABLE public.job
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone
    ,tenant character varying COLLATE pg_catalog."default"  NOT NULL
    ,name character varying COLLATE pg_catalog."default"  NOT NULL
    ,description character varying COLLATE pg_catalog."default" 
    ,unique_job_id character varying COLLATE pg_catalog."default"  NOT NULL
    ,jobtype_id int   NOT NULL
    ,zone_id int   NOT NULL
    ,person_id int   NOT NULL
    ,startdate character varying COLLATE pg_catalog."default"   NOT NULL
    ,enddate character varying COLLATE pg_catalog."default"  
    ,status character varying COLLATE pg_catalog."default"  NOT NULL
    ,notes character varying COLLATE pg_catalog."default" 


);

                ALTER TABLE IF EXISTS public.job
                ADD FOREIGN KEY (jobtype_id)
                REFERENCES public.jobtype (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                ALTER TABLE IF EXISTS public.job
                ADD FOREIGN KEY (zone_id)
                REFERENCES public.zone (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                ALTER TABLE IF EXISTS public.job
                ADD FOREIGN KEY (person_id)
                REFERENCES public.person (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;


---- create above / drop below ----

DROP TABLE public.job;

