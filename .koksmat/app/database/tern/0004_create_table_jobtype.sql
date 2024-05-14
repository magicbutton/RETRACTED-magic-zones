/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   




CREATE TABLE public.jobtype
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone
    ,tenant character varying COLLATE pg_catalog."default"  NOT NULL
    ,name character varying COLLATE pg_catalog."default"  NOT NULL
    ,description character varying COLLATE pg_catalog."default" 
    ,unique_jobtype_id character varying COLLATE pg_catalog."default"  NOT NULL
    ,arg0 character varying COLLATE pg_catalog."default" 
    ,arg1 character varying COLLATE pg_catalog."default" 
    ,arg2 character varying COLLATE pg_catalog."default" 
    ,arg3 character varying COLLATE pg_catalog."default" 
    ,arg4 character varying COLLATE pg_catalog."default" 
    ,arg5 character varying COLLATE pg_catalog."default" 
    ,arg6 character varying COLLATE pg_catalog."default" 
    ,arg7 character varying COLLATE pg_catalog."default" 
    ,arg8 character varying COLLATE pg_catalog."default" 
    ,arg9 character varying COLLATE pg_catalog."default" 
    ,bodytemplate character varying COLLATE pg_catalog."default" 


);

                CREATE TABLE public.jobtype_m2m_zone (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,jobtype_id int  
 
                    ,zone_id int  
 

                );
            

                ALTER TABLE public.jobtype_m2m_zone
                ADD FOREIGN KEY (jobtype_id)
                REFERENCES public.jobtype (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.jobtype_m2m_zone
                ADD FOREIGN KEY (zone_id)
                REFERENCES public.zone (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;


---- create above / drop below ----
DROP TABLE IF EXISTS public.jobtype_m2m_zone;
DROP TABLE public.jobtype;

