/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package person

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/personmodel"

)

func PersonRead(id int) (*personmodel.Person, error) {
    log.Println("Calling Personread")

    return applogic.Read[database.Person, personmodel.Person](id, applogic.MapPersonOutgoing)

}
