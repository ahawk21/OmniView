class UserController < ApplicationController 

    skip_before_action :define_current_user, only: [ :authenticate, :create, :index]

    def create
        user = User.create(user_params)
        render json: user
    end

    def user_params
        params.permit(:username, :password)
    end

    def index
        render json: User.all
    end

    def authenticate
        @user=User.find_by(username: params[:username])
        if @user !=nil && @user.authenticate(params[:password])
            render json: @user, methods: [:auth_token]
        else
            render json: {error:true,message: 'Login Failed'}
        end
    end



end