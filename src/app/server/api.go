package server

import (
	"time"

	"github.com/labstack/echo"
	"gopkg.in/olivere/elastic.v3"
)

// API is a defined as struct bundle
// for api. Feel free to organize
// your app as you wish.
type API struct{}

//TODO: read from yaml file
const (
	AllIndex = "laglang-*"
	AllDictionaryIndex = "laglang-dictionary-*"
	EijiroIndex = "laglang-dictionary-eijiro"
	AllScriptIndex = "laglang-script-*"
	PillarsIndex = "laglang-script-pillars"
)

// Bind attaches api routes
func (api *API) Bind(group *echo.Group) {
	group.Get("/v1/conf", api.ConfHandler)
	group.Get("/v1/dictionary/search", api.SearchWordHandler)
}

// ConfHandler handle the app config, for example
func (api *API) ConfHandler(c *echo.Context) error {
	app := c.Get("app").(*App)
	<-time.After(time.Millisecond * 500)
	c.JSON(200, app.Conf.Root)
	return nil
}

// SearchWordHandler handle to search in dictionary with given word
func (api *API) SearchWordHandler(c *echo.Context) error {
	//	logger := c.Echo().Logger()
	//app := c.Get("app").(*App)

	query := c.Query("query")

	client, e := elastic.NewClient()
	Must(e)

	termQuery := elastic.NewQueryStringQuery(query)
	searchResult, e := client.Search().
	Index(AllIndex).
	Query(termQuery).
	From(0).Size(1000).
	Do()

	c.JSON(200, searchResult.Hits)

	return nil
}
