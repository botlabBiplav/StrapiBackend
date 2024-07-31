'use strict';

/**
 * drone-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drone-type.drone-type');
