/*
 Copyright 2013-2019 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

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
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { JhiConfigService } from '../config.service';

@Injectable({
    providedIn: 'root'
})
export class JhiLanguageService {

    currentLang = 'en';

    constructor(private translateService: TranslateService, private configService: JhiConfigService) {
        this.init();
    }

    init() {
        const config = this.configService.getConfig();
        this.currentLang = config.defaultI18nLang;
        this.translateService.setDefaultLang(this.currentLang);
        this.translateService.use(this.currentLang);
    }

    changeLanguage(languageKey: string) {
        this.currentLang = languageKey;
        this.configService.CONFIG_OPTIONS.defaultI18nLang = languageKey;
        this.translateService.use(this.currentLang);
    }

    getCurrent(): Promise<string> {
        return Promise.resolve(this.currentLang);
    }
}
