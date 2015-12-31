package server

import (
	"time"

	"github.com/labstack/echo"
	"gopkg.in/olivere/elastic.v3"
	"encoding/json"
)

// Dictionary data
type Dictionary struct {
	Id          string `json:"id"`
	Word        string `json:"word"`
	Class       string `json:"class"`
	Translation string `json:"translation"`
}

// API is a defined as struct bundle
// for api. Feel free to organize
// your app as you wish.
type API struct{}

// Bind attaches api routes
func (api *API) Bind(group *echo.Group) {
	group.Get("/v1/conf", api.ConfHandler)
	group.Get("/v1/word/search", api.SearchWordHandler)
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
	//	if query == ""

	client, e := elastic.NewClient()
	Must(e)

	termQuery := elastic.NewTermQuery("word", query)
	searchResult, e := client.Search().
	Index("english-japanese-dictionary").
	Query(termQuery).
	From(0).Size(1000).
	Do()

	if searchResult.Hits != nil {
		var dics = make([]Dictionary, 0, searchResult.Hits.TotalHits)
		for _, hit := range searchResult.Hits.Hits {
			var d Dictionary
			err := json.Unmarshal(*hit.Source, &d)
			Must(err)
			d.Id = hit.Id
			dics = append(dics, d)
		}
		c.JSON(200, dics)
	} else {
		c.JSON(200, nil);
	}

	return nil
}
