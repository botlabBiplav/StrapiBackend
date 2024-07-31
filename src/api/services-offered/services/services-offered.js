'use strict';

/**
 * services-offered service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::services-offered.services-offered');
