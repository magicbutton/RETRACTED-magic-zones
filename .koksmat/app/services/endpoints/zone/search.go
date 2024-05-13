/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package zone

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/zonemodel"
    . "github.com/magicbutton/magic-zones/utils"
)

func zoneSearch(query string) (*Page[zonemodel.zone], error) {
    log.Println("Calling zonesearch")

    return applogic.Search[database.zone, zonemodel.zone]("name", query, applogic.MapzoneOutgoing)

}
