/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: true
---
*/
package magicapp

import (
	"github.com/magicbutton/magic-zones/services"
	"github.com/nats-io/nats.go/micro"
)

func RegisterServiceEndpoints(root micro.Group) {
	root.AddEndpoint("app", micro.HandlerFunc(services.HandleAppRequests))

	root.AddEndpoint("person", micro.HandlerFunc(services.HandlePersonRequests))
	root.AddEndpoint("zonetype", micro.HandlerFunc(services.HandleZoneTypeRequests))
	root.AddEndpoint("zone", micro.HandlerFunc(services.HandleZoneRequests))
	root.AddEndpoint("jobtype", micro.HandlerFunc(services.HandleJobTypeRequests))
	root.AddEndpoint("job", micro.HandlerFunc(services.HandleJobRequests))
}
