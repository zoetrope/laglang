import io.vertx.core.AbstractVerticle
import io.vertx.core.logging.LoggerFactory
import io.vertx.kotlin.lang.*
import org.elasticsearch.common.settings.Settings;
import elastiko.*
import org.elasticsearch.common.unit.TimeValue

class MainVerticle : AbstractVerticle() {
    val logger = LoggerFactory.getLogger("main")

    override fun start() {
        val route = Route {
            apiRoute()
            staticFileRoute()
        }
        httpServer(8084, "0.0.0.0", block = route)
    }

    private fun Route.apiRoute() {

        val client = transportClient(listOf(address("localhost", 9300))) {
            settings {
                put("cluster.name", "elasticsearch")
            }
        }

        GET("/api/v1/conf") { request ->

            client.searchAsync("laglang-*") {
                setQuery(termQuery("word", "test"))
                setTimeout(TimeValue.timeValueSeconds(5))
            } success {
                bodyJson {
                    it.hits.hits.map { it.source }
                }
            } fail {
                bodyJson {
                    "message" to it.message
                }
            }
        }
    }

    private fun Route.staticFileRoute() {
        GET(glob("/static/**/*")) { request -> sendFile(request.path().substring(1)) }
        GET("/") { request -> sendFile("static/templates/index.html") }
        GET("/index.html") { request -> sendFile("static/templates/index.html") }
        otherwise { request -> sendFile("static/templates/index.html") }
    }
}
