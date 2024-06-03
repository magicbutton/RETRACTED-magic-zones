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
	"github.com/magicbutton/magic-zones/services/models/servicemodel"
   
)


func MapServiceOutgoing(db database.Service) servicemodel.Service {
    return servicemodel.Service{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        CreatedBy: db.CreatedBy,
        UpdatedAt: db.UpdatedAt,
        UpdatedBy: db.UpdatedBy,
                Name : db.Name,
        Description : db.Description,
        Unique_Service_Id : db.Unique_Service_Id,
        Service : db.Service,

    }
}

func MapServiceIncoming(in servicemodel.Service) database.Service {
    return database.Service{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        CreatedBy: in.CreatedBy,
        UpdatedAt: in.UpdatedAt,
        UpdatedBy: in.UpdatedBy,
                Name : in.Name,
        Description : in.Description,
        Unique_Service_Id : in.Unique_Service_Id,
        Service : in.Service,
        Searchindex : in.Name,

    }
}
