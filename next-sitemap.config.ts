"use strict";
import { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: process.env.NEXT_SITE_URL || 'https://seeyouthursday.dev',
  generateRobotsTxt: true, 
}

export default config