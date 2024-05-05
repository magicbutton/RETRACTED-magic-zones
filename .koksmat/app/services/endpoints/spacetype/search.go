/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package spacetype

import (
    "log"

    "github.com/magicbutton/magic-zones/applogic"
    "github.com/magicbutton/magic-zones/database"
    "github.com/magicbutton/magic-zones/services/models/spacetypemodel"
    . "github.com/magicbutton/magic-zones/utils"
)

func SpaceTypeSearch(query string) (*Page[spacetypemodel.SpaceType], error) {
    log.Println("Calling SpaceTypesearch")

    return applogic.Search[database.SpaceType, spacetypemodel.SpaceType]("name", query, applogic.MapSpaceTypeOutgoing)

}
