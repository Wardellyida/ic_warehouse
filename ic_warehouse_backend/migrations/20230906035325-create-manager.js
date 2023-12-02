'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    
    // 1. 创建manager表
    await queryInterface.createTable('Managers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true  // 这样每个用户名都是唯一的
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });

    // 2. 创建warehouse表
    await queryInterface.createTable('Warehouse', {
      warehouse_name: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true
      },
      manager_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Managers',
          key: 'id'
        }
      },
      item_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });

    // 3. 创建item表
    await queryInterface.createTable('Items', {
      item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      item_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      item_quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      warehouse_name: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Warehouse',
          key: 'warehouse_name'
        }
      }
    });
    
  }, //async up

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
