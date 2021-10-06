# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Fragrance.destroy_all
Rating.destroy_all
User.destroy_all

@admin = User.create!(username: 'Dutchess', email: 'pawprint@woof.com', password: 'wagtail')

puts "#{User.count} users created"


@aerin = Fragrance.create!(name: 'Eclat de Vert', image_url: 'https://lh3.googleusercontent.com/2ZSDCVor6PMO-CVLQno3B4--xL6RZjS7lGmkQzyih6qgEchOagXWuG3oYF6qiOLfb9zi6Lfo2B_9BI50kWqYzFqUFJ1RTKyt-rj0gNVmcgzUuNyTHQY18Yx-AD22Rsc4GgK3QK7u_ss=w200-h113')
@chanel = Fragrance.create!(name: 'Coromandel', image_url: 'https://lh3.googleusercontent.com/2ZSDCVor6PMO-CVLQno3B4--xL6RZjS7lGmkQzyih6qgEchOagXWuG3oYF6qiOLfb9zi6Lfo2B_9BI50kWqYzFqUFJ1RTKyt-rj0gNVmcgzUuNyTHQY18Yx-AD22Rsc4GgK3QK7u_ss=w200-h113')
@durga = Fragrance.create!(name: 'Rose Atlantic', image_url: 'https://lh3.googleusercontent.com/2ZSDCVor6PMO-CVLQno3B4--xL6RZjS7lGmkQzyih6qgEchOagXWuG3oYF6qiOLfb9zi6Lfo2B_9BI50kWqYzFqUFJ1RTKyt-rj0gNVmcgzUuNyTHQY18Yx-AD22Rsc4GgK3QK7u_ss=w200-h113')
@diptyque = Fragrance.create!(name: 'Eau Capitale', image_url: 'https://lh3.googleusercontent.com/2ZSDCVor6PMO-CVLQno3B4--xL6RZjS7lGmkQzyih6qgEchOagXWuG3oYF6qiOLfb9zi6Lfo2B_9BI50kWqYzFqUFJ1RTKyt-rj0gNVmcgzUuNyTHQY18Yx-AD22Rsc4GgK3QK7u_ss=w200-h113')
@nihilo = Fragrance.create!(name: 'Explicite', image_url: 'https://lh3.googleusercontent.com/2ZSDCVor6PMO-CVLQno3B4--xL6RZjS7lGmkQzyih6qgEchOagXWuG3oYF6qiOLfb9zi6Lfo2B_9BI50kWqYzFqUFJ1RTKyt-rj0gNVmcgzUuNyTHQY18Yx-AD22Rsc4GgK3QK7u_ss=w200-h113')
@kilian = Fragrance.create!(name: 'Rolling in Love', image_url: 'https://lh3.googleusercontent.com/2ZSDCVor6PMO-CVLQno3B4--xL6RZjS7lGmkQzyih6qgEchOagXWuG3oYF6qiOLfb9zi6Lfo2B_9BI50kWqYzFqUFJ1RTKyt-rj0gNVmcgzUuNyTHQY18Yx-AD22Rsc4GgK3QK7u_ss=w200-h113')
@oribe = Fragrance.create!(name: 'Cote dAzur', image_url: 'https://lh3.googleusercontent.com/2ZSDCVor6PMO-CVLQno3B4--xL6RZjS7lGmkQzyih6qgEchOagXWuG3oYF6qiOLfb9zi6Lfo2B_9BI50kWqYzFqUFJ1RTKyt-rj0gNVmcgzUuNyTHQY18Yx-AD22Rsc4GgK3QK7u_ss=w200-h113')
@tomford = Fragrance.create!(name: 'Vanille Fatale', image_url: 'https://lh3.googleusercontent.com/2ZSDCVor6PMO-CVLQno3B4--xL6RZjS7lGmkQzyih6qgEchOagXWuG3oYF6qiOLfb9zi6Lfo2B_9BI50kWqYzFqUFJ1RTKyt-rj0gNVmcgzUuNyTHQY18Yx-AD22Rsc4GgK3QK7u_ss=w200-h113')

Rating.create!({rank: '4', user: @admin, fragrance: @aerin})
Rating.create!({rank: '3', user: @admin, fragrance: @chanel})
Rating.create!({rank: '4', user: @admin, fragrance: @durga})
Rating.create!({rank: '3', user: @admin, fragrance: @diptyque})
Rating.create!({rank: '5', user: @admin, fragrance: @nihilo})
Rating.create!({rank: '5', user: @admin, fragrance: @kilian})
Rating.create!({rank: '5', user: @admin, fragrance: @tomford})

puts "#{Fragrance.count} fragrances created"

puts "#{Rating.count} ratings created"