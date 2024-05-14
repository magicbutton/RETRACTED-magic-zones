/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package jobtypemodel
import (
	"encoding/json"
	"time"
    // 
)

func UnmarshalJobType(data []byte) (JobType, error) {
	var r JobType
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *JobType) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type JobType struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Unique_Jobtype_Id string `json:"unique_jobtype_id"`
    Arg0 string `json:"arg0"`
    Arg1 string `json:"arg1"`
    Arg2 string `json:"arg2"`
    Arg3 string `json:"arg3"`
    Arg4 string `json:"arg4"`
    Arg5 string `json:"arg5"`
    Arg6 string `json:"arg6"`
    Arg7 string `json:"arg7"`
    Arg8 string `json:"arg8"`
    Arg9 string `json:"arg9"`
    Bodytemplate string `json:"bodytemplate"`

}

