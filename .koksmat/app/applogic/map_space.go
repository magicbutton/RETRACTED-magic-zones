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
	"github.com/magicbutton/magic-zones/services/models/spacemodel"
   
)


func MapSpaceOutgoing(db database.Space) spacemodel.Space {
    return spacemodel.Space{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        UpdatedAt: db.UpdatedAt,
                Tenant : db.Tenant,
        Name : db.Name,
        Description : db.Description,
        Unique_Space_Id : db.Unique_Space_Id,
                Spacetype_id : db.Spacetype_id,
                Primaryowner_id : db.Primaryowner_id,
                Secondaryowner_id : db.Secondaryowner_id,
                Accountable_id : db.Accountable_id,

    }
}

func MapSpaceIncoming(in spacemodel.Space) database.Space {
    return database.Space{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        UpdatedAt: in.UpdatedAt,
                Tenant : in.Tenant,
        Name : in.Name,
        Description : in.Description,
        Unique_Space_Id : in.Unique_Space_Id,
                Spacetype_id : in.Spacetype_id,
                Primaryowner_id : in.Primaryowner_id,
                Secondaryowner_id : in.Secondaryowner_id,
                Accountable_id : in.Accountable_id,

    }
}
