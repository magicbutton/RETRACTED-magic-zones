/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package zone

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/zonemodel"

)

func ZoneRead(id int) (*zonemodel.Zone, error) {
    log.Println("Calling Zoneread")

    return applogic.Read[database.Zone, zonemodel.Zone](id, applogic.MapZoneOutgoing)

}
