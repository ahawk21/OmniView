class ApplicationController < ActionController::Base    
    attr_reader :current_user

    before_action :define_current_user
    def define_current_user
        begin 

            # request.headers = eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.A6uJWtxKMq_aarBbagofRur0yC0RC-ZFpMDxi3N1kxE
                   
            token = request.headers['Authorization'].split(' ')[1]
            # type, token = request.headers['Authorization'].split(' ')
            
            payload = JWT.decode(token, 'agojngjn7r5326879r0ujngq0-203ru0hgf2j1-qw')[0]

            # payload, header = JWT.decode(token, '65bc368fbc69306')
            @current_user = User.find(payload['id'])
            puts @current_user                             

            if @current_user
                return true
            else
                render json: {
                    error: true,
                    message: 'User does not exist'
                }
            end
        rescue 
            # They are not
            render json: {
                error: true,
                message: 'Invalid Authentication'
            }
        end
    end

    # def fallback_index_html
    #     render :file => 'public/index.html'
    #   end
end