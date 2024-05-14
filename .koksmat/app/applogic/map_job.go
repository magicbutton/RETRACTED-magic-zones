/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
//GenerateMapModel v1.1
package applogic
import (
	//"encoding/json"
	//"time"
	"github.com/magicbutton/magic-zones/database"
	"github.com/magicbutton/magic-zones/services/models/jobmodel"
   
)


func MapJobOutgoing(db database.Job) jobmodel.Job {
    return jobmodel.Job{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        UpdatedAt: db.UpdatedAt,
                Tenant : db.Tenant,
        Name : db.Name,
        Description : db.Description,
        Unique_Job_Id : db.Unique_Job_Id,
                Jobtype_id : db.Jobtype_id,
                Zone_id : db.Zone_id,
                Person_id : db.Person_id,
        Status : db.Status,
        Notes : db.Notes,

    }
}

func MapJobIncoming(in jobmodel.Job) database.Job {
    return database.Job{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        UpdatedAt: in.UpdatedAt,
                Tenant : in.Tenant,
        Name : in.Name,
        Description : in.Description,
        Unique_Job_Id : in.Unique_Job_Id,
                Jobtype_id : in.Jobtype_id,
                Zone_id : in.Zone_id,
                Person_id : in.Person_id,
        Status : in.Status,
        Notes : in.Notes,

    }
}
