import Users from './Users.js'
import ShoppingCarts from './ShoppingCarts.js'
import Reviews from './Reviews.js'
import Memberships from './Memberships.js'
import Playlists from './Playlists.js'
import Albums from './Albums.js'
import Songs from './Songs.js'
import Genres from './Genres.js'
import Products from './Products.js'

//RELACIONES DE USUARIO
Users.hasMany(Reviews)
Users.hasOne(Memberships)
Users.belongsTo(ShoppingCarts)
Users.hasMany(Playlists)

//RELACIONES DE SHOPPINGCARTs
ShoppingCarts.belongsTo(Users)
ShoppingCarts.belongsToMany(Albums, { through: Products })
ShoppingCarts.belongsToMany(Memberships, { through: Products })

//RELACIONES DE REVIEWS
Reviews.belongsTo(Users)
Reviews.belongsTo(Albums)

//RELACIONES DE MEMBERSHIPsS
Memberships.hasMany(Users)
Memberships.belongsToMany(Albums, { through: Playlists })
Memberships.belongsToMany(Songs, { through: Playlists })

//RELACIONES DE PLAYLIST
Playlists.belongsTo(Users)

//RELACIONES DE ALBUM
Albums.hasMany(Reviews)
Albums.belongsToMany(ShoppingCarts, { through: Products })
Albums.belongsToMany(Memberships, { through: Playlists })
Albums.belongsTo(Songs)
Albums.belongsToMany(Genres, { through: 'GenreRelation' })

//RELACIONES DE SONG
Songs.belongsToMany(Genres, { through: 'GenreRelation' })
Songs.belongsToMany(Memberships, { through: Playlists })
Songs.belongsTo(Albums)

//RELACIONES DE GENRES
Genres.belongsToMany(Albums, { through: 'GenreRelation' })
Genres.belongsToMany(Songs, { through: 'GenreRelation' })

export {
  Albums,
  Genres,
  Memberships,
  Playlists,
  Reviews,
  ShoppingCarts,
  Songs,
  Users,
  Products,
}
