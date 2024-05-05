/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package space

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/spacemodel"
    . "github.com/magicbutton/magic-zones/utils"
)

func SpaceSearch(query string) (*Page[spacemodel.Space], error) {
    log.Println("Calling Spacesearch")

    return applogic.Search[database.Space, spacemodel.Space]("name", query, applogic.MapSpaceOutgoing)

}
