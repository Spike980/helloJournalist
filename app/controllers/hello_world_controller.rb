class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger" }
    redux_store("helloReduxStore", props: {name: "world"})
    render layout: 'index'
  end

  private
    def data
	    # This is the props used by the React component.
	    @app_props = {
	        name: "Mr. Server Side Rendering"
	    }

  end
end
