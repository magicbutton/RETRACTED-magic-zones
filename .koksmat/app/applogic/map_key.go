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
	"github.com/magicbutton/magic-zones/services/models/keymodel"
   
)


func MapKeyOutgoing(db database.Key) keymodel.Key {
    return keymodel.Key{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        CreatedBy: db.CreatedBy,
        UpdatedAt: db.UpdatedAt,
        UpdatedBy: db.UpdatedBy,
                Name : db.Name,
        Description : db.Description,
        Unique_Key_Id : db.Unique_Key_Id,
        Key : db.Key,

    }
}

func MapKeyIncoming(in keymodel.Key) database.Key {
    return database.Key{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        CreatedBy: in.CreatedBy,
        UpdatedAt: in.UpdatedAt,
        UpdatedBy: in.UpdatedBy,
                Name : in.Name,
        Description : in.Description,
        Unique_Key_Id : in.Unique_Key_Id,
        Key : in.Key,
        Searchindex : in.Name,

    }
}
