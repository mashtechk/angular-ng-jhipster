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
import { Pipe, PipeTransform } from '@angular/core';
import { JhiFilterPipe } from './filter.pipe';

@Pipe({ name: 'pureFilter' })
export class JhiPureFilterPipe extends JhiFilterPipe implements PipeTransform {
    transform(input: Array<any>, filter: string, field: string): any {
        return super.transform(input, filter, field);
    }
}
