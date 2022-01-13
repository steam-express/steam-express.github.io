module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7957bc42e7efac3b0e4ab0ad961f7d8c'),
  },
});
