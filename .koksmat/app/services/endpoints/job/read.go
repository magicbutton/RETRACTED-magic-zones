/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package job

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/jobmodel"

)

func JobRead(id int) (*jobmodel.Job, error) {
    log.Println("Calling Jobread")

    return applogic.Read[database.Job, jobmodel.Job](id, applogic.MapJobOutgoing)

}
