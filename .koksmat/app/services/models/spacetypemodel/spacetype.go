/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package spacetypemodel
import (
	"encoding/json"
	"time"
    // 
)

func UnmarshalSpaceType(data []byte) (SpaceType, error) {
	var r SpaceType
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *SpaceType) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type SpaceType struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`

}

