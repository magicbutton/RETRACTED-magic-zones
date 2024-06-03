/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package key

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/keymodel"

)

func KeyUpdate(item keymodel.Key) (*keymodel.Key, error) {
    log.Println("Calling Keyupdate")

    return applogic.Update[database.Key, keymodel.Key](item.ID,item, applogic.MapKeyIncoming, applogic.MapKeyOutgoing)

}
