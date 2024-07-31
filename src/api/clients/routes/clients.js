'use strict';

/**
 * clients router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::clients.clients');
