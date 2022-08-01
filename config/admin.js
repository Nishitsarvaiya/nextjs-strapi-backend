module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '447f9732a8da70cfd257199a1bbd8229'),
  },
});
