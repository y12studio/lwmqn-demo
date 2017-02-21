function Dltdojo(){
}

// [  dltdojoEvent ] {"oid":"illuminance","iid":"1","rid":"sensorValue","data":40}
// [  dltdojoEvent ] {"oid":"presence","iid":"0","rid":"dInState","data":1}
// [  dltdojoEvent ] {"oid":"presence","iid":"0","rid":"dInState","data":0}
// [  dltdojoEvent ] {"oid":"dOut","iid":"0","rid":"dOutState","data":1}
// [  dltdojoEvent ] {"oid":"dOut","iid":"0","rid":"dOutState","data":0}

Dltdojo.Event = function(data){
    console.log('[  dltdojoEvent ] '+JSON.stringify(data));
}

module.exports = Dltdojo
