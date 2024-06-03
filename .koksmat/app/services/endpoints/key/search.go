/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package key

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/keymodel"
    . "github.com/magicbutton/magic-zones/utils"
)

func KeySearch(query string) (*Page[keymodel.Key], error) {
    log.Println("Calling Keysearch")

    return applogic.Search[database.Key, keymodel.Key]("searchindex", query, applogic.MapKeyOutgoing)

}
