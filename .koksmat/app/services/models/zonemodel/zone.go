/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package zonemodel
import (
	"encoding/json"
	"time"
    // "github.com/magicbutton/magic-zones/database/databasetypes"
)

func Unmarshalzone(data []byte) (zone, error) {
	var r zone
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *zone) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type zone struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Unique_Zone_Id string `json:"unique_zone_id"`
    Zonetype_id int `json:"zonetype_id"`
    Primaryowner_id int `json:"primaryowner_id"`
    Secondaryowner_id int `json:"secondaryowner_id"`
    Accountable_id int `json:"accountable_id"`

}

