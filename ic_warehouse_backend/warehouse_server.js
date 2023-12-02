const express = require('express');
const { Sequelize } = require('sequelize');
const { Manager } = require('./models');
const app = express();
const PORT = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');

// 获取请求体中的 JSON 数据

app.use(cors());
// 使用bodyParser解析JSON请求体
app.use(bodyParser.json());

// 为了简单起见，我们先定义一个简单的GET请求路由
// app.get('/', (req, res) => {
//     res.json({ message: 'Welcome to my API!' });
// });

app.get('/api/managers', (req, res) => {
    Manager.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.error("Error retrieving managers:", err); // 打印错误消息到控制台
            res.status(500).send({
                message: "Error retrieving managers"
            });
        });
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await Manager.findOne({ where: { username: username } });
    if (user && user.password === password) {
        res.json({ success: true, token: 'YOUR_JWT_OR_IDENTIFIER' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});



// ==========================================Sequelize部分==========================================
// 导入数据库配置
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

// 创建 Sequelize 实例
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
  });

// 测试数据库连接
sequelize.authenticate()
  .then(() => console.log('Database connected.'))
  .catch(err => console.error('Unable to connect to the database:', err));

// ... 其他的 Express 设置和路由 ...

app.listen(3001, () => {
    console.log('Server started on http://localhost:3001');
});
