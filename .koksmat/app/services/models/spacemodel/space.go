/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package spacemodel
import (
	"encoding/json"
	"time"
    // "github.com/magicbutton/magic-zones/database/databasetypes"
)

func UnmarshalSpace(data []byte) (Space, error) {
	var r Space
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Space) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Space struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Unique_Space_Id string `json:"unique_space_id"`
    Spacetype_id int `json:"spacetype_id"`
    Primaryowner_id int `json:"primaryowner_id"`
    Secondaryowner_id int `json:"secondaryowner_id"`
    Accountable_id int `json:"accountable_id"`

}

