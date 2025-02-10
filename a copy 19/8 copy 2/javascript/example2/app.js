/**
 * Copyright 2021 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'horus\'s intentionally vulnerable API!',
    })
  });

app.get('/any/path', (req, res) => {
    let url = req.param('url');
    if (url) {
        res.redirect(url);
    }
});

app.get('/healthcheck', (req, res) => {
    res.status(200).send('WORKING')
  });

  const PORT = 8888;
  
  app.listen(PORT, () => {
    console.log(`horus intentionally vulnerable test API is running on port: ${PORT}`)
  });