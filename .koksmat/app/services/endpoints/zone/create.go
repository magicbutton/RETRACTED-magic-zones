/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package zone

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/zonemodel"

)

func ZoneCreate(item zonemodel.Zone) (*zonemodel.Zone, error) {
    log.Println("Calling Zonecreate")

    return applogic.Create[database.Zone, zonemodel.Zone](item, applogic.MapZoneIncoming, applogic.MapZoneOutgoing)

}
