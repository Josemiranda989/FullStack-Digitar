module.exports = ( sequelize, DataTypes ) => {

    const alias = 'Movie'
    const cols = {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        length: {
            type: DataTypes.INTEGER(11)
        },
        release_date: {
            type: DataTypes.DATE
        },
        rating: {
            type: DataTypes.INTEGER(11)
        },
    }
    const config = {
        tableName: 'movies',
        timestamps: false
    }

    const Movie = sequelize.define(alias, cols, config)

    Movie.associate = (models) => {
        // Relacion con imagenes
        Movie.hasMany(models.Image, {
            as: "images", 
            foreignKey: 'movies_id' 
        })
           // Relacion con Actors
           Movie.belongsToMany(models.Actor, {
            as: "actors", 
            through: "movies_has_actors",
            foreignKey: 'movies_id',
            otherKey: "actors_id"
        })
          // Relacion con Directors
          Movie.belongsToMany(models.Director, {
            as: "directors", 
            through: "movies_has_directors",
            foreignKey: 'movies_id',
            otherKey: "directors_id"
        })
    }

    return Movie
}