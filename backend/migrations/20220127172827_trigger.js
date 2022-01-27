/** @format */

exports.up = function (knex) {
  return knex.raw(`
            CREATE OR REPLACE FUNCTION on_update_timestamp() RETURNS TRIGGER
            LANGUAGE plpgsql
            AS $$
            BEGIN
                NEW.updated_at = now();
                RETURN NEW;
            END; $$;
      `);
};

exports.down = function (knex) {
  return knex.raw(`
            DROP FUNCTION IF EXISTS on_update_timestamp() CASCADE;
        `);
};
