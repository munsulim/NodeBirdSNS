module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      cotent: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      commentId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
      },
      userId: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    }
  );

  Comment.associate = db => {
    db.Comment.belongsTo(db.Post);
    db.Comment.belongsTo(db.User);
  };

  return Comment;
};
