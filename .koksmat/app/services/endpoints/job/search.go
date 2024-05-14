/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package job

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/jobmodel"
    . "github.com/magicbutton/magic-zones/utils"
)

func JobSearch(query string) (*Page[jobmodel.Job], error) {
    log.Println("Calling Jobsearch")

    return applogic.Search[database.Job, jobmodel.Job]("name", query, applogic.MapJobOutgoing)

}
