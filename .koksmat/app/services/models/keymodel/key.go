/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package keymodel
import (
	"encoding/json"
	"time"
    // 
)

func UnmarshalKey(data []byte) (Key, error) {
	var r Key
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Key) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Key struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    CreatedBy string `json:"created_by"`
    UpdatedAt time.Time `json:"updated_at"`
    UpdatedBy string `json:"updated_by"`
        Name string `json:"name"`
    Description string `json:"description"`
    Unique_Key_Id string `json:"unique_key_id"`
    Key string `json:"key"`

}

