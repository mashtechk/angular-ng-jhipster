/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

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
import {TruncateCharactersPipe} from '../../src/pipe/truncate-characters.pipe';

describe('TruncateCharactersPipe Tests', () => {

    let input: any = 'jhipster lover';
    let chars: any = 13;
    let breakOnWord: any = false;
    let pipe: TruncateCharactersPipe;
    beforeEach(() => {
        pipe = new TruncateCharactersPipe();
    });

    it('Should return the first word', () => {
        let result = pipe.transform(input, chars, breakOnWord);

        expect(result).toEqual('jhipster...');
    });
});
