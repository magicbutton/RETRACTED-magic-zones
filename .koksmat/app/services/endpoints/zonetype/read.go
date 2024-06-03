/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package zonetype

import (
    "log"
    "strconv"
    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/zonetypemodel"

)

func ZoneTypeRead(arg0 string) (*zonetypemodel.ZoneType, error) {
    id,_ := strconv.Atoi(arg0)
    log.Println("Calling ZoneTyperead")

    return applogic.Read[database.ZoneType, zonetypemodel.ZoneType](id, applogic.MapZoneTypeOutgoing)

}
