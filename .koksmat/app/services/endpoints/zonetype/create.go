/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package zonetype

import (
    "log"
   
    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/zonetypemodel"

)

func ZoneTypeCreate(item zonetypemodel.ZoneType) (*zonetypemodel.ZoneType, error) {
    log.Println("Calling ZoneTypecreate")

    return applogic.Create[database.ZoneType, zonetypemodel.ZoneType](item, applogic.MapZoneTypeIncoming, applogic.MapZoneTypeOutgoing)

}
