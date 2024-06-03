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
	"github.com/magicbutton/magic-zones/services/models/zonetypemodel"
   
)


func MapZoneTypeOutgoing(db database.ZoneType) zonetypemodel.ZoneType {
    return zonetypemodel.ZoneType{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        CreatedBy: db.CreatedBy,
        UpdatedAt: db.UpdatedAt,
        UpdatedBy: db.UpdatedBy,
                Name : db.Name,
        Description : db.Description,

    }
}

func MapZoneTypeIncoming(in zonetypemodel.ZoneType) database.ZoneType {
    return database.ZoneType{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        CreatedBy: in.CreatedBy,
        UpdatedAt: in.UpdatedAt,
        UpdatedBy: in.UpdatedBy,
                Name : in.Name,
        Description : in.Description,
        Searchindex : in.Name,

    }
}
