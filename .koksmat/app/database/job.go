/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//version: pølsevogn2
package database

import (
	"time"
    
	"github.com/uptrace/bun"
)

type Job struct {
	bun.BaseModel `bun:"table:job,alias:job"`

	ID             int     `bun:"id,pk,autoincrement"`
	CreatedAt      time.Time `bun:",nullzero,notnull,default:current_timestamp"`
	UpdatedAt      time.Time `bun:",nullzero,notnull,default:current_timestamp"`
	DeletedAt      time.Time `bun:",soft_delete,nullzero"`
        Tenant string `bun:"tenant"`
    Name string `bun:"name"`
    Description string `bun:"description"`
    Unique_Job_Id string `bun:"unique_job_id"`
    Jobtype_id int `bun:"jobtype_id"`
    Zone_id int `bun:"zone_id"`
    Person_id int `bun:"person_id"`
    Startdate time.Time `bun:"startdate"`
    Enddate time.Time `bun:"enddate"`
    Status string `bun:"status"`
    Notes string `bun:"notes"`

}

