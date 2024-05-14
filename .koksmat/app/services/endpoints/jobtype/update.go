/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package jobtype

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/jobtypemodel"

)

func JobTypeUpdate(item jobtypemodel.JobType) (*jobtypemodel.JobType, error) {
    log.Println("Calling JobTypeupdate")

    return applogic.Update[database.JobType, jobtypemodel.JobType](item.ID,item, applogic.MapJobTypeIncoming, applogic.MapJobTypeOutgoing)

}
