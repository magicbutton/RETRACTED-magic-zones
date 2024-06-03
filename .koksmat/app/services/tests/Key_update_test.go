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
        "github.com/magicbutton/magic-zones/services/endpoints/key"
                    "github.com/magicbutton/magic-zones/services/models/keymodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestKeyupdate(t *testing.T) {
                                // transformer v1
            object := keymodel.Key{}
         
            result,err := key.KeyUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
