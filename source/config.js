/**
 * Configuration
 */

var secure = window.location.protocol === 'https:';

module.exports = {
    name:      '[data-scl-share-box]',
    prefix:    'c-social-share__',
    secure:    secure,
    protocol:  secure ? 'https:' : 'http:'
};