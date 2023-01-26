module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf630h4gqg47vk781cp0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_hl2l'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'yFlkBOLblWavaAzfaeW9u3Fmh2JDAdnd'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
