            /*
            File have been automatically created. To prevent the file from getting overwritten
            set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
            ---
            keep: false
            ---
            */
            //generator:  noma3.delete.v2
            package key
            
            import (
                "log"
                "strconv"
                "github.com/magicbutton/magic-zones/applogic"
                "github.com/magicbutton/magic-zones/database"
                "github.com/magicbutton/magic-zones/services/models/keymodel"
            
            )
            
            func KeyDelete(arg0 string) ( error) {
                id,_ := strconv.Atoi(arg0)
                log.Println("Calling Keydelete")
            
                return applogic.Delete[database.Key, keymodel.Key](id)
            
            }
