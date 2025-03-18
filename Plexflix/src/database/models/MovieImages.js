module.exports = ( sequelize, DataTypes ) => {

    const alias = 'Image'
    const cols = {
        URL: {
            type: DataTypes.STRING
        }
    }
    const config = {
        tableName: 'movie_images',
        timestamps: false
    }

    const Image = sequelize.define(alias, cols, config)

    Image.associate = (model) => {
        // Relacion con movie
        Image.belongsTo(model.Movie, {
            as: 'movie',
            foreignKey: 'movies_id'
        })
    }

    return Image
}