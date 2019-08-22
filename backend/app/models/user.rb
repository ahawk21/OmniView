class User < ApplicationRecord

    has_many :favorites
    has_many :cards, through: :favorites

    has_secure_password
    
    def auth_token
        JWT.encode({ id: self.id }, 'agojngjn7r5326879r0ujngq0-203ru0hgf2j1-qw')
    end

    def as_json(*)
        super.except('password_digest')
    end

end
