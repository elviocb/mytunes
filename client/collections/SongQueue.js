// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  	this.on('add', this.enqueue , this); 
  	this.on('remove', this.dequeue , this); 
  },

  enqueue: function(){
		if (this.length === 1) {
			this.playFirst();
		}
  },

  playFirst: function(){
  	this.at(0).play();
  }

});