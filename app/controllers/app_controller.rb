class AppController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger" }
    redux_store("helloReduxStore", props: {name: "world"})
    print("index")
    render layout: 'index'
  end

  def welcome
    redux_store("helloReduxStore", props: {name: "world"})
    print("welcome")
    render layout: 'application'
  end

  private
    def data
	    # This is the props used by the React component.
	    @app_props = {
	        name: "Mr. Server Side Rendering"
	    }

  end
end