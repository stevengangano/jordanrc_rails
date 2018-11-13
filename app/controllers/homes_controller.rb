class HomesController < ApplicationController

	def index
		@homes = Home.all
	end

	def new
		@home = Home.new
	end

	#Page to edit (/articles/:id/edit)
	def edit
		@home = Home.find(params[:id])
	end

	#Posts an article from (articles/new)
	def create
		#render plain: params[:article].inspect 
		@home = Home.new(home_params)
		# @event.user = current_user
		if @home.save 
		    redirect_to root_path
		else
		  render :new 
		end
	end

	#Posts the updated article (articles/:id)
	def update
		@home = Home.find(params[:id])
	    if @home.update(home_params)
	      redirect_to root_path
	    else
	      render :edit
	    end
	end

	#Delete route (/articles/:id)
  	def destroy
	    @home = Home.find(params[:id])
	    @home.destroy
	    redirect_to root_path        
  	end

	

end

private
#method to add data to the database
def home_params
  params.require(:home).permit(:month, :day, :city, :news_info) 
end