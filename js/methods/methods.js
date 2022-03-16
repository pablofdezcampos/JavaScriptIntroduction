// Methods of propierties
const player = {
    reproduce: function(id) {
        return `Reproducing song with id:${id}`;
    },

    stop: function() {
        return 'The song is stopped';
    }
}

player.download = function(id) {
    return `Downloading song with id: ${id}`;
}

console.log(player.reproduce(1));
console.log(player.stop());
console.log(player.download(1));