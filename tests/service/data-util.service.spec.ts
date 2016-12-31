/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TestBed, inject } from '@angular/core/testing';

import { DataUtils } from '../../src/service/data-util.service';

describe('Data Utils service test', () => {

    describe('Data Utils Service Test', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    DataUtils
                ]
            });
        });

        it('should not abbreviate the text when below cutoff', inject([DataUtils], (service: DataUtils) => {
            expect(service.abbreviate('Hello Jhipster')).toBe('Hello Jhipster');
        }));

        it('should abbreviate the text and append ...', inject([DataUtils], (service: DataUtils) => {
            expect(service.abbreviate('Hello Jhipster lets test the data utils function')).toBe('Hello Jhipster ...s function');
        }));

        it('should abbreviate the text and append +++', inject([DataUtils], (service: DataUtils) => {
            expect(service.abbreviate('Hello Jhipster lets test the data utils function', '+++')).toBe('Hello Jhipster +++s function');
        }));

        it('should return the bytesize of the text', inject([DataUtils], (service: DataUtils) => {
            expect(service.byteSize('Hello Jhipster')).toBe(`10.5 bytes`);
        }));
    });
});
