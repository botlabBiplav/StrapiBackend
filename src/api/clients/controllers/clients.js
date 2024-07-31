'use strict';

/**
 * clients controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::clients.clients');
