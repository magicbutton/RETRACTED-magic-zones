/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package jobmodel
import (
	"encoding/json"
	"time"
    // "github.com/magicbutton/magic-zones/database/databasetypes"
)

func UnmarshalJob(data []byte) (Job, error) {
	var r Job
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Job) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Job struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Unique_Job_Id string `json:"unique_job_id"`
    Jobtype_id int `json:"jobtype_id"`
    Zone_id int `json:"zone_id"`
    Person_id int `json:"person_id"`
    Startdate time.Time `json:"startdate"`
    Enddate time.Time `json:"enddate"`
    Status string `json:"status"`
    Notes string `json:"notes"`

}

