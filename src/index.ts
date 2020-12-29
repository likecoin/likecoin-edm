import fs from 'fs';
import path from 'path';
import mjml2html from 'mjml';
import Handlebars from 'handlebars';

import { getPriceEmojiURL } from './utils/civic';

const TEMPLATE_BASE = `${__dirname}/templates`;

export const readUTF8TextFile = (templatePath: string) => {
  return fs.readFileSync(templatePath, 'utf-8');
}

export const getTemplateFile = (filename: string) => {
  return readUTF8TextFile(`${TEMPLATE_BASE}/${filename}`);
}

export const parseMJMLToHTML = (template: string) => {
  const { html } = mjml2html(template, {
    minify: true,
    filePath: path.join(__dirname, 'components'),
  });
  return html;
}

export const compileTemplate = (template: string, opts = {}) => {
  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate(opts);
}

export const getNewSupporterTemplate = (opts: {
  title?: string;
  billingPlan?: string;
  amount?: number;
  isCivicLiker?: boolean;
  avatarURL?: string;
  content?: string;
  helpCenterText?: string;
  unsubscribeText?: string;
} = {
  isCivicLiker: false,
}) => {
  const options = {
    priceEmojiURL: getPriceEmojiURL(opts.amount),
    ...opts,
  }; 
  // Compile MJML
  const template = compileTemplate(getTemplateFile('new-supporter.mjml'), options);
  // Compile HTML
  const html = parseMJMLToHTML(template);
  return compileTemplate(html, options);
}
