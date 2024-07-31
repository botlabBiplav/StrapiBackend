'use strict';

/**
 * clients service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clients.clients');
