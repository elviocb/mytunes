// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  	this.on('add', this.enqueue , this); 
  	this.on('remove', this.enqueue , this);
  	this.on('ended', this.playNext, this);
  },

  enqueue: function(){
		if (this.length === 1) {
			this.playFirst();
		}
  },

  playFirst: function(){
  	this.at(0).play();
  },
  
  playNext: function(song){
  		// removes the first item
  		this.shift();
  		// checks if there's more music to play
  		if (this.length >= 1) {
  			this.playFirst();
  		} 
      // if not, stop the player
  		else {
  			// --> implement this.trigger('stop');
  		}
  	} 
});