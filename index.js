var pcapp = require('pcap-parser');
 
var parser = pcapp.parse('capture.pcap');

parser.on('packet', function(packet) {
  // do your packet processing
  console.log('Packets extracted from Ethernet.', packet);

});