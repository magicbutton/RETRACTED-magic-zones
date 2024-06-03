/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   


-- sure sild

CREATE TABLE public.zone
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by character varying COLLATE pg_catalog."default"  ,

    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_by character varying COLLATE pg_catalog."default" ,

    deleted_at timestamp with time zone
    ,tenant character varying COLLATE pg_catalog."default"  NOT NULL
    ,searchindex character varying COLLATE pg_catalog."default"  NOT NULL
    ,name character varying COLLATE pg_catalog."default"  NOT NULL
    ,description character varying COLLATE pg_catalog."default" 
    ,unique_zone_id character varying COLLATE pg_catalog."default"  NOT NULL
    ,zonetype_id int   NOT NULL
    ,primaryowner_id int   NOT NULL
    ,secondaryowner_id int  
    ,accountable_id int  


);

                ALTER TABLE IF EXISTS public.zone
                ADD FOREIGN KEY (zonetype_id)
                REFERENCES public.zonetype (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                ALTER TABLE IF EXISTS public.zone
                ADD FOREIGN KEY (primaryowner_id)
                REFERENCES public.person (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                ALTER TABLE IF EXISTS public.zone
                ADD FOREIGN KEY (secondaryowner_id)
                REFERENCES public.person (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                ALTER TABLE IF EXISTS public.zone
                ADD FOREIGN KEY (accountable_id)
                REFERENCES public.person (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;


---- create above / drop below ----

DROP TABLE public.zone;

