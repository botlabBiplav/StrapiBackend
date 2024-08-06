module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('90EPcHfZk+JRXUbdPYEmcg==,7OnQVlelcETYZfBmJnTMIA==,H1/Xp/X/Z0y7rvYI+OM0Mg==,PcSszYdaz2QUwzIsRnjfoQ=='),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
