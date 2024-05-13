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
	"github.com/magicbutton/magic-zones/services/models/zonemodel"
   
)


func MapzoneOutgoing(db database.zone) zonemodel.zone {
    return zonemodel.zone{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        UpdatedAt: db.UpdatedAt,
                Tenant : db.Tenant,
        Name : db.Name,
        Description : db.Description,
        Unique_Zone_Id : db.Unique_Zone_Id,
                Zonetype_id : db.Zonetype_id,
                Primaryowner_id : db.Primaryowner_id,
                Secondaryowner_id : db.Secondaryowner_id,
                Accountable_id : db.Accountable_id,

    }
}

func MapzoneIncoming(in zonemodel.zone) database.zone {
    return database.zone{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        UpdatedAt: in.UpdatedAt,
                Tenant : in.Tenant,
        Name : in.Name,
        Description : in.Description,
        Unique_Zone_Id : in.Unique_Zone_Id,
                Zonetype_id : in.Zonetype_id,
                Primaryowner_id : in.Primaryowner_id,
                Secondaryowner_id : in.Secondaryowner_id,
                Accountable_id : in.Accountable_id,

    }
}
