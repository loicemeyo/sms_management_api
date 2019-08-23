module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      message: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      } 
    }, {
      tableName: 'messages'
    });
    Message.associate = (models) => {
      Message.belongsTo(models.Contact,{
        as: 'sender',
        foreignKey:'senderId',
        hooks:true,
      })
      Message.belongsTo(models.Contact,{
        as: 'receiver',
        foreignKey:'receiverId',
        hooks:true,
      })
    };
    return Message;
  };