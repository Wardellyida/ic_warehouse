module.exports = (sequelize, DataTypes) => {
    const Manager = sequelize.define('Manager', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
    },{
        timestamps: false
    });
  
    return Manager;
};
  