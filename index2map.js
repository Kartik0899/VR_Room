const map =
{
    "data": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    "height": 10,
    "width": 10
}

document.querySelector('a-scene').addEventListener('render-target-loaded', function () {
    var WALL_SIZE = 5, WALL_HEIGHT = 3;
    var el = document.querySelector('#walls');
    var wall;


    for (var x = 0; x < map.height; x++) {
        for (var y = 0; y < map.width; y++) {
            var i = y * map.width + x;
            var position = (x - map.width / 2) * WALL_SIZE + ' ' + 1.5 + ' ' + (y - map.height / 2) * WALL_SIZE;
            if (map.data[i] === 1) {
                // Create wall
                wall = document.createElement('a-box');
                el.appendChild(wall);
                wall.setAttribute('color', '#fff');
                wall.setAttribute('material', 'src: #texture-wall;');
                wall.setAttribute('width', WALL_SIZE);
                wall.setAttribute('height', WALL_HEIGHT);
                wall.setAttribute('depth', WALL_SIZE);
                wall.setAttribute('position', position);
                wall.setAttribute('static-body', '');
            }
            if (map.data[i] === 2) {
                // Set player position
                document.querySelector('#player').setAttribute('position', position);
            }
        }
    }
    console.info('Walls added.');
});