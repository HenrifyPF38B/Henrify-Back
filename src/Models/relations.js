import User  from './User.js'
import ShoppingCart  from './ShoppingCart.js'
import Reviews  from './Reviews.js'
import Membership  from './Membership.js'
import Playlist  from './Playlist.js'
import Album  from './Album.js'
import Song  from './Song.js'
import Genre  from './Genre.js'
import Products  from './Products.js'

//RELACIONES DE USUARIO
User.hasMany(Reviews)
User.hasOne(Membership)
User.belongsTo(ShoppingCart)
User.hasMany(Playlist)

//RELACIONES DE SHOPPINGCART
ShoppingCart.belongsTo(User)
ShoppingCart.belongsToMany(Album, { through: Products } )
ShoppingCart.belongsToMany(Membership, { through: Products } )

//RELACIONES DE REVIEWS
Reviews.belongsTo(User)
Reviews.belongsTo(Album)

//RELACIONES DE MEMBERSHIPS
Membership.hasMany(User)
Membership.belongsToMany(Album, { through: Playlist })
Membership.belongsToMany(Song, { through: Playlist })

//RELACIONES DE PLAYLIST
Playlist.belongsTo(User)

//RELACIONES DE ALBUM
Album.hasMany(Reviews)
Album.belongsToMany(ShoppingCart, { through: Products })
Album.belongsToMany(Membership, { through: Playlist })
Album.belongsTo(Song)
Album.belongsToMany(Genre, { through: 'GenreRelation' })

//RELACIONES DE SONG  
Song.belongsToMany(Genre, { through: 'GenreRelation' })
Song.belongsToMany(Membership, { through: Playlist }) 
Song.belongsTo(Album)

//RELACIONES DE GENRES
Genre.belongsToMany(Album, { through: 'GenreRelation' })
Genre.belongsToMany(Song, { through: 'GenreRelation' })

export {
  Album,
  Genre,
  Membership,
  Playlist,
  Reviews,
  ShoppingCart,
  Song,
  User,
  Products
}