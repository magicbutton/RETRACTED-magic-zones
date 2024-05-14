            /*
            File have been automatically created. To prevent the file from getting overwritten
            set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
            ---
            keep: false
            ---
            */
            //generator:  noma3.delete.v2
            package jobtype
            
            import (
                "log"
            
                "github.com/magicbutton/magic-zones/applogic"
                "github.com/magicbutton/magic-zones/database"
                "github.com/magicbutton/magic-zones/services/models/jobtypemodel"
            
            )
            
            func JobTypeDelete(id int) ( error) {
                log.Println("Calling JobTypedelete")
            
                return applogic.Delete[database.JobType, jobtypemodel.JobType](id)
            
            }
