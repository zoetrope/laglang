import io.vertx.core.AbstractVerticle
import io.vertx.core.logging.LoggerFactory
import io.vertx.kotlin.lang.*
import org.elasticsearch.common.settings.Settings;

class MainVerticle : AbstractVerticle() {
    override fun start() {
        val logger = LoggerFactory.getLogger("main")

        val route = Route {
            apiRoute()
            staticFileRoute()
        }
        httpServer(8084, "0.0.0.0", block = route)
    }

    private fun Route.apiRoute(){

        val settings = Settings

        GET("/api/v1/conf") { request ->
            bodyJson {
                "field1" to "this is a test"
            }
        }
    }

    private fun Route.staticFileRoute(){
        GET(glob("/static/**/*")) { request -> sendFile(request.path().substring(1)) }
        GET("/") { request -> sendFile("static/templates/index.html") }
        GET("/index.html") { request -> sendFile("static/templates/index.html") }
        otherwise { request -> sendFile("static/templates/index.html") }
    }
}
