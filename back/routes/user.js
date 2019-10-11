const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models');
const passport = require('passport');

router.get('/', (req, res) => {});

router.post('/', async (req, res) => {
  try {
    const exUser = await db.User.findOne({
      where: {
        userId: req.body.userId
      }
    });
    if (exUser) {
      return res.status(304).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await db.User.create({
      nickname: req.body.nickname,
      userId: req.body.userId,
      password: hashedPassword
    });
    console.log(newUser);
    return res.json(newUser);
  } catch (e) {
    console.error(e);
    return next(e);
  }
});

router.get('/:id', (req, res) => {});

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('logout 성공');
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async loginErr => {
      if (loginErr) {
        return next(loginErr);
      }
      const filterUser = await db.User.findOne({
        where: { id: user.id },
        include: [
          {
            model: db.Post,
            as: 'Posts'
          },
          {
            model: db.User,
            as: 'Followings'
          },
          {
            model: db.User,
            as: 'Followers',
            attributes: ['id']
          }
        ],
        attributes: ['id', 'nickname', 'userId']
      });
      return res.json(filterUser);
    });
  })(req, res, next);
});

router.get('/:id/follow', (req, res) => {});

router.post('/:id/follow', (req, res) => {});

router.delete('/:id/follow', (req, res) => {});

router.delete('/:id/follower', (req, res) => {});

router.get('/:id/posts', (req, res) => {});

module.exports = router;
