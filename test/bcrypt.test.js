const expect = require('chai').expect;
const bcrypt = require('bcrypt-as-promised');

describe('testing bcrypt', function(){
  it('should hash a password', function(done){
      bcrypt.hash('password', 10)
      .then(function(hash){
        expect(hash.length).to.be.greaterThan(0);
        done();
      })
      .catch(function(err){
        done(err);
      });
  });

  it('should fail if password is not a string', function(done){
    bcrypt.hash(1, 10)
    .then(function(hash){
      done('Hash completed');
    })
    .catch(function(err){
      expect(err.length).to.not.be.null;
      done();
    })
  })
});
