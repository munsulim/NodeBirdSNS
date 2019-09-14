module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      src: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      ImageId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
      },
      postId: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },
    {
      charset: 'utf8', //한글 + 이모티콘
      collate: 'utf8_general_ci'
    }
  );

  Image.associate = db => {
    db.Image.belongsTo(db.Post);
  };

  return Image;
};
