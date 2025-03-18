module.exports = ( sequelize, DataTypes ) => {

    const alias = 'Actor'
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
        tableName: 'actors',
        timestamps: false
    }

    const Actor = sequelize.define(alias, cols, config)

    Actor.associate = (models) => {
        // Relacion con Movies
        Actor.belongsToMany(models.Movie, {
            as: "movies", 
            through: "movies_has_actors",
            foreignKey: 'actors_id',
            otherKey: "movies_id"
        })
    }

    return Actor
}