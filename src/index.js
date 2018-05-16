if(!window.taco) throw new Error('Taco is not defined');
let taco = window.taco;

const EXTENSION_NAME = 'eventApi',
      EVENT          = 'taco-event-query';


taco[EXTENSION_NAME] = {

    all : (cb) => {
        query('', cb);
    }
};

function query(q, cb){
    taco.request(EVENT, {
        query : q
    }, function(res){
        cb(res);
    });
}

