/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3
package app

// noma2
import (
	"context"
	"errors"

	"github.com/magicbutton/magic-zones/utils"
	"github.com/uptrace/bun"
)

type Count struct {
	bun.BaseModel `bun:"table:jobs,alias:j"`

	Count int `json:"count"`
}

func GetCount(sql string) int {
	ctx := context.Background()
	count := []Count{}
	rows, err := utils.Db.QueryContext(ctx, sql)
	if err != nil {
		return -1
	}

	err = utils.Db.ScanRows(ctx, rows, &count)

	return count[0].Count
}

func GlobalDashboard(args []string) (*interface{}, error) {

	return nil, errors.New("Not implemented")

}
