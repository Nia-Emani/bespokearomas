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
@chanel = Fragrance.create!(name: 'Coromandel', image_url: 'https://lh3.googleusercontent.com/z2dotq_twXzngA9PEJVAT-br0xzG5wwfEv6Ee1OCRM5mHOCSvGVGy2232JEOHA-QlM_kqEshKSA8M2q6ThUJ4Ga5tuQfOTxpZ2SRj37rEho36B43RxXChWMKVkooutF6A_N_Bhrwpm8=h125')
@durga = Fragrance.create!(name: 'Rose Atlantic', image_url: 'https://lh3.googleusercontent.com/hgkNhAtKMQ7_PymTgAEs_s-kmlTKg558hBBMvPIJchqTWWGnnOc0cV_r3FB5Tjae_XFhNHJe3ft5TtPZJ_nLqMXsQF7wS6PLt921uG9BToh-FQc0PKcu4DHMA2Lsgma0THqMJyr_FJU=h125')
@diptyque = Fragrance.create!(name: 'Eau Capitale', image_url: 'https://lh3.googleusercontent.com/xcp8q_ubtbxiU04czUXiWL2xg6-vDwbyHxX56sOUk9Sm4QoRPT8OAZszwTytLLCkxIsrBxs2PUZy8FVZwdLBbtYOpu6MJwWAZ3FOGsBBMesslZg84C6QNNd1b63EHqjQyqGO5PP8m7k=h125')
@nihilo = Fragrance.create!(name: 'Explicite', image_url: 'https://lh3.googleusercontent.com/Wk66mFdiriNF86ljE-kivu3r_Cd8-QSt73WndwCDyB_-2IKs1-EDIaPZWhb12OpouXrwShZ0mXJdfWQTmaoG7kNBSCG9r97Cw79kp0KuMkGjtynqYJAxYZ-5UAygGDw17mqtFq41EJk=h125')
@kilian = Fragrance.create!(name: 'Rolling in Love', image_url: 'https://lh3.googleusercontent.com/vhFViBC-JlFcsAFMB_MzHuizZn4rR1o_sHjgusX6PXI4171pzMfxEEbSH-A5qGyqqCygdFH0ySmS-F39Vtz8hW0mj1WPu2UJJWohDV9ehmIr_qaHl5-YwiYpQQfwR7E6xPGnoLpqKb0=h125')
@oribe = Fragrance.create!(name: 'Cote dAzur', image_url: 'https://lh3.googleusercontent.com/ifJCLpHKyYnZDU8jlKvt84ALS53k0WnIEe4Xw3KG-plGSMJPKaug_lWr82TyFmHzOpgUYFkukGgLRPFnEojHX1M6PhcsPh076mHJkAicnWHPP1rRpIyrSQBm-lUYrFZSxlfcPLhLJu0=h125')
@tomford = Fragrance.create!(name: 'Vanille Fatale', image_url: 'https://lh3.googleusercontent.com/jwmjXWi9SNqbO9lGGLngkkwEXmZEZdjd1cPESOWH0XfAbZngeWiOBUazpgrPqoqHa3_lM1eFi4y9iSv-kl01A3YpaAGY8ClB5hmcWbbdXYlGqJS973qqunM0cozcxlJZuLPGtZTTZXE=h125')

Rating.create!({rank: '4', user: @admin, fragrance: @aerin})
Rating.create!({rank: '3', user: @admin, fragrance: @chanel})
Rating.create!({rank: '4', user: @admin, fragrance: @durga})
Rating.create!({rank: '3', user: @admin, fragrance: @diptyque})
Rating.create!({rank: '5', user: @admin, fragrance: @nihilo})
Rating.create!({rank: '5', user: @admin, fragrance: @kilian})
Rating.create!({rank: '5', user: @admin, fragrance: @tomford})

puts "#{Fragrance.count} fragrances created"

puts "#{Rating.count} ratings created"