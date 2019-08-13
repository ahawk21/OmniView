# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Favorite.destroy_all
Card.destroy_all


User.create(username: "test", password: "12345")
Card.create(category: "News", title: "Test Title", preview_img: "https://image.cnbcfm.com/api/v1/image/106076974-1565721632544gettyimages-1160676089.jpeg?v=1565723219", link: "https://www.cnbc.com/2019/08/13/warden-of-jail-where-jeffrey-epstein-killed-himself-reassigned.html")
Favorite.create(user_id: "1", card_id: "1")