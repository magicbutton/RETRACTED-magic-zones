    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
    //generator:  noma4.1
    package tests
    import (
        "testing"
        "github.com/magicbutton/magic-zones/services/endpoints/space"
                    "github.com/magicbutton/magic-zones/services/models/spacemodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestSpaceupdate(t *testing.T) {
                                // transformer v1
            object := spacemodel.Space{}
         
            result,err := space.SpaceUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
