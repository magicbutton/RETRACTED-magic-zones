/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package servicemodel
import (
	"encoding/json"
	"time"
    // 
)

func UnmarshalService(data []byte) (Service, error) {
	var r Service
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Service) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Service struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    CreatedBy string `json:"created_by"`
    UpdatedAt time.Time `json:"updated_at"`
    UpdatedBy string `json:"updated_by"`
        Name string `json:"name"`
    Description string `json:"description"`
    Unique_Service_Id string `json:"unique_service_id"`
    Service string `json:"service"`

}

