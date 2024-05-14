/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package jobtype

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/jobtypemodel"

)

func JobTypeCreate(item jobtypemodel.JobType) (*jobtypemodel.JobType, error) {
    log.Println("Calling JobTypecreate")

    return applogic.Create[database.JobType, jobtypemodel.JobType](item, applogic.MapJobTypeIncoming, applogic.MapJobTypeOutgoing)

}
