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

    return Movie
}