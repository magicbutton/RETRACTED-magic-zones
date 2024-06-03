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

func ZoneSearch(query string) (*Page[zonemodel.Zone], error) {
    log.Println("Calling Zonesearch")

    return applogic.Search[database.Zone, zonemodel.Zone]("searchindex", query, applogic.MapZoneOutgoing)

}
