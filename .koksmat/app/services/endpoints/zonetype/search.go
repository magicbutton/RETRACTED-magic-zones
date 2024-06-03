/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package zonetype

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/zonetypemodel"
    . "github.com/magicbutton/magic-zones/utils"
)

func ZoneTypeSearch(query string) (*Page[zonetypemodel.ZoneType], error) {
    log.Println("Calling ZoneTypesearch")

    return applogic.Search[database.ZoneType, zonetypemodel.ZoneType]("searchindex", query, applogic.MapZoneTypeOutgoing)

}
