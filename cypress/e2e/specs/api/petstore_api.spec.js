const petSchema = require('./schemas/petSchema');
import Ajv from 'ajv';
const ajv = new Ajv({ allErrors: true });

describe('Petstore API Tests', () => {
  const apiBaseUrl = Cypress.env('apiTestingBaseUrl');
  let petId;

  it('should add a new pet', () => {
    const newPet = {
      id: 0,
      category: { id: 1, name: 'Dogs' },
      name: 'Fido',
      photoUrls: ['http://example.com/photo.jpg'],
      tags: [{ id: 1, name: 'tag1' }],
      status: 'available'
    };

    cy.request({
      method: 'POST',
      url: `${apiBaseUrl}/v2/pet`,
      body: newPet,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      // Perform JSON schema validation
      verifySchema(response.body);

      petId = response.body.id;
      cy.wrap(response.body.id).as('petId'); // Store the pet ID in an alias
    });
  });

  beforeEach(() => {
    cy.wrap(petId).as('petId');
  });

  it('should fetch details of a pet', () => {
    cy.get('@petId').then(petId => {
      cy.request({
        method: 'GET',
        url: `${apiBaseUrl}/v2/pet/${petId}`
      }).then(response => {
        expect(response.status).to.eq(200);

        // Perform JSON schema validation
        verifySchema(response.body);
      });
    });
  });

  it('should update a pet', () => {
    cy.get('@petId').then(petId => {
      const updatedPet = {
        id: petId,
        category: { id: 1, name: 'Dogs' },
        name: 'Max', // Updated name
        photoUrls: ['http://example.com/newphoto.jpg'],
        tags: [{ id: 1, name: 'tag2' }],
        status: 'sold'
      };

      cy.request({
        method: 'PUT',
        url: `${apiBaseUrl}/v2/pet`,
        body: updatedPet,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', updatedPet.id);
        expect(response.body).to.have.property('name', updatedPet.name);

        // Perform JSON schema validation
        verifySchema(response.body);
        });
      });
    });

  });

const verifySchema = (responseBody) => {
  const valid = ajv.validate(petSchema, responseBody);
  if (!valid) {
    console.log(ajv.errors);
    expect(valid, 'response does not adhere to expected schema').to.be.true;
  }
}