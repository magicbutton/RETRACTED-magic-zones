/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package zone

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/zonemodel"

)

func ZoneUpdate(item zonemodel.Zone) (*zonemodel.Zone, error) {
    log.Println("Calling Zoneupdate")

    return applogic.Update[database.Zone, zonemodel.Zone](item.ID,item, applogic.MapZoneIncoming, applogic.MapZoneOutgoing)

}
