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
	"github.com/magicbutton/magic-zones/services/models/jobtypemodel"
   
)


func MapJobTypeOutgoing(db database.JobType) jobtypemodel.JobType {
    return jobtypemodel.JobType{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        CreatedBy: db.CreatedBy,
        UpdatedAt: db.UpdatedAt,
        UpdatedBy: db.UpdatedBy,
                Name : db.Name,
        Description : db.Description,
        Unique_Jobtype_Id : db.Unique_Jobtype_Id,
        Arg0 : db.Arg0,
        Arg1 : db.Arg1,
        Arg2 : db.Arg2,
        Arg3 : db.Arg3,
        Arg4 : db.Arg4,
        Arg5 : db.Arg5,
        Arg6 : db.Arg6,
        Arg7 : db.Arg7,
        Arg8 : db.Arg8,
        Arg9 : db.Arg9,
        Bodytemplate : db.Bodytemplate,

    }
}

func MapJobTypeIncoming(in jobtypemodel.JobType) database.JobType {
    return database.JobType{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        CreatedBy: in.CreatedBy,
        UpdatedAt: in.UpdatedAt,
        UpdatedBy: in.UpdatedBy,
                Name : in.Name,
        Description : in.Description,
        Unique_Jobtype_Id : in.Unique_Jobtype_Id,
        Arg0 : in.Arg0,
        Arg1 : in.Arg1,
        Arg2 : in.Arg2,
        Arg3 : in.Arg3,
        Arg4 : in.Arg4,
        Arg5 : in.Arg5,
        Arg6 : in.Arg6,
        Arg7 : in.Arg7,
        Arg8 : in.Arg8,
        Arg9 : in.Arg9,
        Bodytemplate : in.Bodytemplate,
        Searchindex : in.Name,

    }
}
