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

type JobType struct {
	bun.BaseModel `bun:"table:jobtype,alias:jobtype"`

	ID             int     `bun:"id,pk,autoincrement"`
	CreatedAt      time.Time `bun:",nullzero,notnull,default:current_timestamp"`
	CreatedBy      string `bun:"created_by,"`
	UpdatedAt      time.Time `bun:",nullzero,notnull,default:current_timestamp"`
	UpdatedBy      string `bun:"updated_by,"`
	DeletedAt      time.Time `bun:",soft_delete,nullzero"`
        Tenant string `bun:"tenant"`
    Searchindex string `bun:"searchindex"`
    Name string `bun:"name"`
    Description string `bun:"description"`
    Unique_Jobtype_Id string `bun:"unique_jobtype_id"`
    Arg0 string `bun:"arg0"`
    Arg1 string `bun:"arg1"`
    Arg2 string `bun:"arg2"`
    Arg3 string `bun:"arg3"`
    Arg4 string `bun:"arg4"`
    Arg5 string `bun:"arg5"`
    Arg6 string `bun:"arg6"`
    Arg7 string `bun:"arg7"`
    Arg8 string `bun:"arg8"`
    Arg9 string `bun:"arg9"`
    Bodytemplate string `bun:"bodytemplate"`

}

