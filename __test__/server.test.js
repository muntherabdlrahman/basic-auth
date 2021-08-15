'use strict';
const {app} = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(app);
const base64 = require('base-64');

describe('my API Server', ()=> {


    let object={
        username:'deep1',
        password:'deep123'
    }

    it('Create a record using POST signup ', async () => {
       
        const response = await request.post('/signup').send(object); // async
        expect(response.status).toEqual(201);
      
    
    });

    it('Create a record using POST signin ', async () => {
       
        const response = await request.post('/signin').set('Authorization', `Basic ZGVlcDE6ZGVlcDEyMw==`); // async
        expect(response.status).toEqual(200);
    expect(response.body.username).toBe('deep1');
      
    
    });

  


    
})