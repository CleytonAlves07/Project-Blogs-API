'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  User.associate = (models) => {
    //1:N - onde um user pode ter vários blogposts
    User.hasMany(models.BlogPost,
      {
        foreignKey: 'userId',
        as: 'blogpost'
      });
  };

  return User;
};


