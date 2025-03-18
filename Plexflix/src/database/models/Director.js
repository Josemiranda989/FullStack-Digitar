module.exports = ( sequelize, DataTypes ) => {

    const alias = 'Director'
    const cols = {
        name: {
            type: DataTypes.STRING(128)
        },
        avatar: {
            type: DataTypes.STRING
        },
        bio: {
            type: DataTypes.STRING
        }
    }
    const config = {
        tableName: 'directors',
        timestamps: false
    }

    const Director = sequelize.define(alias, cols, config)

    Director.associate = (models) => {
        // Relacion con Movies
        Director.belongsToMany(models.Movie, {
            as: "movies", 
            through: "movies_has_directors",
            foreignKey: 'directors_id',
            otherKey: "movies_id"
        })
    }

    return Director
}