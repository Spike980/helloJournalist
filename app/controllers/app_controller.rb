class AppController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger", posts: []}
    redux_store("helloReduxStore", props: {name: "world"})
    render layout: 'index'
  end

  def welcome
    @app_store_state_props = {  }
    redux_store("helloReduxStore", props: {name: "world"})
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