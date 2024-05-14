/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package jobtype

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/jobtypemodel"
    . "github.com/magicbutton/magic-zones/utils"
)

func JobTypeSearch(query string) (*Page[jobtypemodel.JobType], error) {
    log.Println("Calling JobTypesearch")

    return applogic.Search[database.JobType, jobtypemodel.JobType]("name", query, applogic.MapJobTypeOutgoing)

}
