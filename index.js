/*
Copyright 2022 DigitalOcean

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.

You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

/**
 * @module @digitalocean/do-markdownit
 */

const safeObject = require('./util/safe_object');

/**
 * @typedef {Object} DoMarkdownItOptions
 * @property {false} [highlight] Disable highlight syntax.
 * @property {false|import('./rules/user_mention').UserMentionOptions} [user_mention] Disable user mentions, or set options for the feature.
 * @property {false|import('./rules/html_comment').HtmlCommentOptions} [html_comment] Disable HTML comment stripping, or set options for the feature.
 * @property {false|import('./rules/embeds/callout').CalloutOptions} [callout] Disable callout block syntax, or set options for the feature.
 * @property {false|import('./rules/embeds/rsvp_button').RsvpButtonOptions} [rsvp_button] Disable RSVP buttons, or set options for the feature.
 * @property {false} [glob] Disable glob embeds.
 * @property {false} [dns] Disable DNS lookup embeds.
 * @property {false} [asciinema] Disable Asciinema embeds.
 * @property {false} [codepen] Disable Codepen embeds.
 * @property {false} [youtube] Disable YouTube embeds.
 * @property {false|import('./rules/embeds/terminal_button').TerminalButtonOptions} [terminal_button] Disable terminal buttons, or set options for the feature.
 * @property {false|import('./modifiers/fence_label').FenceLabelOptions} [fence_label] Disable fence labels, or set options for the feature.
 * @property {false|import('./modifiers/fence_secondary_label').FenceSecondaryLabelOptions} [fence_secondary_label] Disable fence secondary labels, or set options for the feature.
 * @property {false|import('./modifiers/fence_environment').FenceEnvironmentOptions} [fence_environment] Disable fence environments, or set options for the feature.
 * @property {false|import('./modifiers/fence_prefix').FencePrefixOptions} [fence_prefix] Disable fence prefixes, or set options for the feature.
 * @property {false} [fence_pre_attrs] Disable fence pre attributes, or set options for the feature.
 * @property {false|import('./modifiers/fence_classes').FenceClassesOptions} [fence_classes] Disable fence class filtering, or set options for the feature.
 * @property {false|import('./modifiers/heading_id').HeadingIdOptions} [heading_id] Disable Ids on headings, or set options for the feature.
 * @property {false|import('./modifiers/prismjs').PrismJsOptions} [prismjs] Disable Prism highlighting, or set options for the feature.
 */

/**
 * Inject all parts of the DigitalOcean community MarkdownIt plugin.
 *
 * @type {import('markdown-it').PluginWithOptions<DoMarkdownItOptions>}
 */
module.exports = (md, options) => {
    // Get the correct options
    const optsObj = safeObject(options);

    // Register rules

    if (optsObj.highlight !== false) {
        md.use(require('./rules/highlight'), safeObject(optsObj.highlight));
    }

    if (optsObj.user_mention !== false) {
        md.use(require('./rules/user_mention'), safeObject(optsObj.user_mention));
    }

    if (optsObj.html_comment !== false) {
        md.use(require('./rules/html_comment'), safeObject(optsObj.html_comment));
    }

    // Register embeds

    if (optsObj.callout !== false) {
        md.use(require('./rules/embeds/callout'), safeObject(optsObj.callout));
    }

    if (optsObj.rsvp_button !== false) {
        md.use(require('./rules/embeds/rsvp_button'), safeObject(optsObj.rsvp_button));
    }

    if (optsObj.glob !== false) {
        md.use(require('./rules/embeds/glob'), safeObject(optsObj.glob));
    }

    if (optsObj.dns !== false) {
        md.use(require('./rules/embeds/dns'), safeObject(optsObj.dns));
    }

    if (optsObj.asciinema !== false) {
        md.use(require('./rules/embeds/asciinema'), safeObject(optsObj.asciinema));
    }

    if (optsObj.codepen !== false) {
        md.use(require('./rules/embeds/codepen'), safeObject(optsObj.codepen));
    }

    if (optsObj.youtube !== false) {
        md.use(require('./rules/embeds/youtube'), safeObject(optsObj.youtube));
    }

    if (optsObj.terminal_button !== false) {
        md.use(require('./rules/embeds/terminal_button'), safeObject(optsObj.terminal_button));
    }

    // Register modifiers

    if (optsObj.fence_label !== false) {
        md.use(require('./modifiers/fence_label'), safeObject(optsObj.fence_label));
    }

    if (optsObj.fence_secondary_label !== false) {
        md.use(require('./modifiers/fence_secondary_label'), safeObject(optsObj.fence_secondary_label));
    }

    if (optsObj.fence_environment !== false) {
        md.use(require('./modifiers/fence_environment'), safeObject(optsObj.fence_environment));
    }

    if (optsObj.fence_prefix !== false) {
        md.use(require('./modifiers/fence_prefix'), safeObject(optsObj.fence_prefix));
    }

    if (optsObj.fence_pre_attrs !== false) {
        md.use(require('./modifiers/fence_pre_attrs'), safeObject(optsObj.fence_pre_attrs));
    }

    if (optsObj.fence_classes !== false) {
        md.use(require('./modifiers/fence_classes'), safeObject(optsObj.fence_classes));
    }

    if (optsObj.heading_id !== false) {
        md.use(require('./modifiers/heading_id'), safeObject(optsObj.heading_id));
    }

    if (optsObj.prismjs !== false) {
        md.use(require('./modifiers/prismjs'), safeObject(optsObj.prismjs));
    }
};
