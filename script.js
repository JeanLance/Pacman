/* "x" stands for row and "y" for column on arrays or specifc array element when combined */
var worldArr = [
    [[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], // 25 by 11 -- x/y Map 1
    [2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2],
    [2,1,2,2,1,2,1,2,2,1,2,2,2,2,2,2,1,2,2,1,2,1,2,2,1,2],
    [2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2],
    [2,1,2,1,2,2,1,2,2,1,2,2,0,0,2,2,1,2,2,1,2,2,1,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,2,0,0,0,0,2,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,2,2,1,2,2,1,2,2,2,2,2,2,1,2,2,1,2,2,1,2,1,2],
    [2,1,2,1,1,1,1,1,2,1,1,1,0,1,1,1,1,2,1,1,1,1,1,2,1,2],
    [2,1,2,2,1,2,1,2,2,1,2,2,2,2,2,2,1,2,2,1,2,1,2,2,1,2],
    [2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]],

    [[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], // 21 by 21 -- x/y Map 2
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,1,2,2,1,2,1,2,1,2,2,1,2,2,2,1,2],
    [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2],
    [2,1,2,1,2,2,2,1,2,2,2,2,2,1,2,2,2,1,2,1,2],
    [2,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,2],
    [2,1,2,1,2,1,2,2,2,1,2,1,2,2,2,1,2,1,2,1,2],
    [2,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,2],
    [2,1,1,1,2,1,2,1,2,2,0,2,2,1,2,1,2,1,1,1,2],
    [2,1,2,1,2,1,1,1,2,0,0,0,2,1,1,1,2,1,2,1,2],
    [2,1,1,1,2,2,2,1,0,0,0,0,0,1,2,2,2,1,1,1,2],
    [2,1,2,1,2,1,1,1,2,0,0,0,2,1,1,1,2,1,2,1,2],
    [2,1,1,1,2,1,2,1,2,2,0,2,2,1,2,1,2,1,1,1,2],
    [2,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,2],
    [2,1,2,1,2,1,2,2,2,1,2,1,2,2,2,1,2,1,2,1,2],
    [2,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,2],
    [2,1,2,1,2,2,2,1,2,2,2,2,2,1,2,2,2,1,2,1,2],
    [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2],
    [2,1,2,2,2,1,2,2,1,2,1,2,1,2,2,1,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]],

    [[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], // 22 by 19 -- x/y Map 3
    [2,0,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,2,2,2,2,1,2,1,2,2,2,2,2,2,2,2,2,1,2],
    [2,1,2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,2,1,2],
    [2,1,2,1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,1,2],
    [2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2],
    [2,1,2,1,2,1,2,2,2,2,2,1,2,2,1,2,1,2,1,2,1,2],
    [2,1,1,1,2,1,2,1,1,1,2,1,1,2,1,2,1,1,1,2,1,2],
    [2,1,2,1,1,1,2,1,2,1,2,1,2,2,2,2,2,2,1,2,1,2],
    [2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,1,1,2,1,2,1,2],
    [2,1,2,2,2,1,2,1,2,1,2,1,2,2,2,2,1,2,1,2,1,2],
    [2,1,1,1,1,1,2,1,2,1,2,1,1,1,1,2,1,2,1,2,1,2],
    [2,1,2,2,2,2,2,1,2,2,2,1,2,2,2,2,1,2,1,1,1,2],
    [2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,2],
    [2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,1,1,2],
    [2,1,2,1,1,1,2,1,1,1,2,1,1,1,2,2,1,1,1,2,1,2],
    [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2],
    [2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,2,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]], 

    [[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], // 35 by 22 -- x/y Map 4
    [2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,1,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,1,2,2,1,2],
    [2,1,2,2,1,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,1,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,1,2],
    [2,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2],
    [2,2,2,2,1,2,1,2,1,2,1,2,2,2,2,2,0,2,0,2,2,2,2,2,1,2,1,2,1,2,1,2,2,2,2],
    [2,2,2,2,1,2,1,2,1,1,1,1,1,2,0,0,0,0,0,0,0,2,1,1,1,1,1,2,1,2,1,2,2,2,2],
    [2,2,2,2,1,2,1,2,1,2,2,2,1,2,0,2,2,0,2,2,0,2,1,2,2,2,1,2,1,2,1,2,2,2,2],
    [9,1,1,1,1,1,1,1,1,2,1,1,1,0,0,2,0,0,0,2,0,0,1,1,1,2,1,1,1,1,1,1,1,1,9],
    [2,2,2,2,1,2,1,2,2,2,1,2,2,2,0,2,2,2,2,2,0,2,2,2,1,2,2,2,1,2,1,2,2,2,2],
    [2,2,2,2,1,2,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1,2,1,2,2,2,2],
    [2,2,2,2,1,2,1,2,2,2,2,2,1,2,0,2,2,2,2,2,0,2,1,2,2,2,2,2,1,2,1,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,1,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,1,2,2,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2],
    [2,2,1,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,1,2,2],
    [2,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2],
    [2,1,2,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]],

    [[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], // 29 by 22 -- x/y Map 5
    [2,0,1,1,1,1,1,1,2,2,1,1,1,2,2,2,2,2,1,2,2,2,2,1,1,1,1,1,1,2],
    [2,1,2,2,2,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,2],
    [2,1,2,2,2,1,1,1,2,2,1,2,1,2,2,2,2,2,1,2,2,2,2,1,1,2,1,1,1,2],
    [2,1,2,2,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,0,2,1,1,1,1,2,1,1,2],
    [2,1,1,1,1,2,1,2,2,2,2,2,1,2,1,1,1,2,1,2,2,2,2,1,2,2,2,2,1,2],
    [2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,1,2,1,2,2,2,2,2,1,2,2,2,1,1,1,2,1,1,1,2,2,1,1,1,2,2],
    [2,2,2,2,1,2,1,2,1,1,1,2,1,1,1,2,1,2,1,2,2,1,2,2,2,2,1,2,2,2],
    [2,1,1,1,1,2,1,2,2,1,2,2,1,2,1,1,1,2,1,2,1,1,1,2,2,1,1,1,2,2],
    [2,1,2,2,2,2,1,2,1,1,1,2,1,2,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,1,2,1,1,1,2,1,2,2,2,2,2,1,2,2,2,2,1,1,1,2,2,1,2],
    [2,1,1,1,1,1,2,2,1,1,2,2,1,2,2,1,1,2,1,1,1,1,2,1,2,1,1,1,1,2],
    [2,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,2,1,2,1,2,2,2,2,1,2],
    [2,2,1,2,2,2,2,2,1,2,2,2,1,2,1,2,1,2,1,2,2,1,2,1,1,1,1,2,1,2],
    [2,1,1,2,2,2,2,2,1,1,2,2,1,2,1,2,1,1,1,1,1,1,2,1,1,2,2,2,1,2],
    [2,1,2,2,2,2,2,2,2,1,1,1,1,1,1,2,1,2,1,2,2,2,2,1,1,1,1,2,1,2],
    [2,1,2,2,2,2,2,2,2,1,2,2,1,2,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,2],
    [2,1,1,2,2,2,2,2,1,1,2,2,1,2,1,1,1,2,1,1,1,2,2,1,2,2,2,2,1,2],
    [2,2,1,1,2,2,2,1,1,2,2,2,1,2,1,2,1,2,2,1,2,2,2,1,1,1,1,1,1,2],
    [2,2,2,1,1,1,1,1,2,2,2,2,1,1,1,2,1,2,2,1,2,2,2,1,1,1,1,1,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]],
];


var ghostWorldArr = [ // Another world where if pacman and ghost/s meets on specific coordinate, pacman will die
    [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // 25 by 11 -- Ghost World 1
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],

    [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // 21 by 21 -- Ghost World 2
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],

    [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // 22 by 19 -- Ghost World 3
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],

    [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // 35 by 22 -- Ghost World 4
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],

    [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // 29 by 22 -- Ghost World 5
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
];

var pacmanLocations = [ // Pacman location per map
    pacman = {
        x: 12,
        y: 7
    },
    pacman = {
        x: 10,
        y: 10
    },
    pacman = {
        x: 1,
        y: 1
    },
    pacman = {
        x: 17,
        y: 12
    },
    pacman = {
        x: 1,
        y: 1
    }
];
var ghostBlueLocation = [ // Blue location per map
    ghostBlue = {
        x: 11,
        y: 5
    },
    ghostBlue = {
        x: 3,
        y: 3
    },
    ghostBlue = {
        x: 9,
        y: 11
    },
    ghostBlue = {
        x: 17,
        y: 9
    },
    ghostBlue = {
        x: 27,
        y: 20
    },
];
var ghostRedLocation = [ // Red location per map  
    ghostRed = {
        x: 13,
        y: 5
    },
    ghostRed = {
        x: 17,
        y: 17
    },
    ghostRed = {
        x: 16,
        y: 5
    },
    ghostRed = {
        x: 17,
        y: 10
    },
    ghostRed = {
        x: 9,
        y: 8
    },
];
var ghostOrangeLocation = [ // Orange location per map
    ghostOrange = {
        x: 12,
        y: 5
    },
    ghostOrange = {
        x: 17,
        y: 3
    },
    ghostOrange = {
        x: 7,
        y: 15
    },
    ghostOrange = {
        x: 16,
        y: 10
    },
    ghostOrange = {
        x: 20,
        y: 4
    },
];
var ghostPinkLocation = [ // Pink location per map
    ghostPink = {
        x: 14,
        y: 5
    },
    ghostPink = {
        x: 3,
        y: 17
    },
    ghostPink = {
        x: 15,
        y: 1
    },
    ghostPink = {
        x: 18,
        y: 10
    },
    ghostPink = {
        x: 17,
        y: 7
    },
];
var cherryLocation = [ // [y,x,y,x,y,x,y,x] Cherry location per map
    [7, 13, 1, 2, 9, 24, 3, 12], // Map 1
    [3, 10, 10, 17, 17, 10, 10, 3], // Map 2
    [1, 8, 11, 14, 13, 3, 3, 11], // Map 3
    [16, 17, 4, 4, 10, 29, 20, 9], // Map 4
    [5, 15, 18, 15, 12, 4, 7, 26], // Map 5
];

var map = Math.floor((Math.random() * 5) + 0); // Map randomizer

var pacmanDie = false; // True if pacman collides with a ghost
var world = worldArr[map];
var pacman = pacmanLocations[map];
var ghostWorld = ghostWorldArr[map];
var ghostBlue = ghostBlueLocation[map];
var ghostRed = ghostRedLocation[map];
var ghostOrange = ghostOrangeLocation[map];
var ghostPink = ghostPinkLocation[map];
var worldCherry = cherryLocation[map];
var score = 0;

var direction = "Right"; // Default direction pacman is facing
var ghostFacing = "Right"; // Default direction ghosts are facing

// Ghost move random counter and path number. Used to identify which path they will take if they hit a wall/brick
var ghostMoveNumB = [0, 0]; // Blue
var ghostMoveNumR = [0, 0]; // Red
var ghostMoveNumO = [0, 0]; // Orange
var ghostMoveNumP = [0, 0]; // Pink

// Temporary Positions of Ghosts, for resetting ghostWorld
var blueCoord = [ghostBlue.y, ghostBlue.x]; // Coordinate of Ghost Blue in Array
var redCoord = [ghostRed.y, ghostRed.x]; // Coordinate of Ghost Red in Array
var orangeCoord = [ghostOrange.y, ghostOrange.x]; // Coordinate of Ghost Orange in Array
var pinkCoord = [ghostPink.y, ghostPink.x]; // Coordinate of Ghost Pink in Array


function displayWorld() { // Displaying world. Update world
    var output = "";
    //ghostWalk = Math.floor((Math.random() * 4) + 1); 
        for (var i = 0; i < world.length; i++) {
            output += "\n<div class='row'>\n";
            for (var j = 0; j < world[i].length; j++) {
                if (world[i][j] == 2) {
                    output += "<div class='brick'></div>";
                }
                else if (world[i][j] == 1) {
                    output += "<div class='coin'></div>";
                }
                else if (world[i][j] == 0) {
                    output += "<div class='empty'></div>";
                }
                else if (world[i][j] == 3) {
                    output += "<div class='cherry'></div>";
                }
                else if (world[i][j] == 9) {
                    output += "<div class='portal'></div>";
                }
            }
            output += "\n</div>";
        }
        document.getElementById('world').innerHTML = output;
}

function displayPacman() { // Pacman's movement update
    if (map == 3) {
        if (pacman.y == 10 && pacman.x == -1) {
            pacman.y = 10;
            pacman.x = 34;
        }
        else if (pacman.y == 10 && pacman.x == 35) {
            pacman.y = 10;
            pacman.x = 1;
        }
    }
    
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}

function directionPacman() { // Pacman's Facing Direction
    document.getElementById("pacman").style.backgroundImage = "url('img/pacman"+direction+".gif')";
}

function displayScore() { // Display/Update Score
    document.getElementById('score').innerHTML = score;
}

var lastEnt1, lastEnt2, lastEnt3, lastEnt4 = 0; // Default last number of entity. When cherry disappears, last entity (e.g. coin or empty) will apear

function displayCherry(cherryArr) { // Display of cherry
    // World Cherry Location, Time and Duration

    // Appearance On Specific Score
    if (score == 390) {
        lastEnt1 = world[cherryArr[0]][cherryArr[1]];
        world[cherryArr[0]][cherryArr[1]] = 3;
    }
    else if (score == 990) {
        lastEnt2 = world[cherryArr[2]][cherryArr[3]];
        world[cherryArr[2]][cherryArr[3]] = 3;
    }
    else if (score == 1390) {
        lastEnt3 = world[cherryArr[4]][cherryArr[5]];
        world[cherryArr[4]][cherryArr[5]] = 3;
    }
    else if (score == 1990) {
        lastEnt4 = world[cherryArr[6]][cherryArr[7]];
        world[cherryArr[6]][cherryArr[7]] = 3;
    }

    // Disappears on Specific Score
    if (score == 540 && world[cherryArr[0]][cherryArr[1]] == 3) {
            world[cherryArr[0]][cherryArr[1]] = lastEnt1;
    }
    else if (score == 1140 && world[cherryArr[2]][cherryArr[3]] == 3) {
            world[cherryArr[2]][cherryArr[3]] = lastEnt2;
    }
    else if (score == 1540 && world[cherryArr[4]][cherryArr[5]] == 3) {
            world[cherryArr[4]][cherryArr[5]] = lastEnt3;
    }
    else if (score == 2140 && world[cherryArr[6]][cherryArr[7]] == 3) {
            world[cherryArr[6]][cherryArr[7]] = lastEnt4;
    }
}

function displayGhost(ghost, ghostId) { // Ghosts's Movement Update
    document.getElementById(ghostId).style.top = ghost.y*20+"px";
    document.getElementById(ghostId).style.left = ghost.x*20+"px";
}

function ghostFacingDirection(ghostId, ghostFacing) { // Ghost Facing Direction Update
    document.getElementById(ghostId).style.backgroundImage = "url('img/" + ghostId +""+ghostFacing+".gif')";
}

function ghostDirection(ghost, d1, d2, d3, d4, walkRand, ghostMoveNum, ghostId) { // Ghosts changes direction if it hits wall. "d" stands for direction
    ghostWalkLimiter = ghostMoveNum[0];
    ghostWalk = ghostMoveNum[1];

    if (ghostWalkLimiter == walkRand) { // Ghost Direction Randomizer
        ghostWalk = Math.floor((Math.random() * 4) + 1);
    }

    if (ghostWalk == d1 && world[ghost.y][ghost.x-1] != 2 && ghostWalk == d1 && world[ghost.y][ghost.x-1] != 9) { // Left
        ghost.x--;
        ghostWalk = d1;
        ghostFacing = "Left";
        
    }
    else if (ghostWalk == d1 && world[ghost.y][ghost.x-1] == 2) { // If can't go Left
        if (world[ghost.y-1][ghost.x] != 2) {
            ghost.y--;
            ghostWalk = d3;
            ghostFacing = "Left";
        }
        else if (world[ghost.y+1][ghost.x] != 2) {
            ghost.y++;
            ghostWalk = d4;
            hostFacing = "Right";
        }
        else if (world[ghost.y][ghost.x+1] != 2){ // Right
            ghost.x++;
            ghostWalk = d2;
            ghostFacing = "Right";
        }
    }
    else if (ghostWalk == d2 && world[ghost.y][ghost.x+1] != 2 && ghostWalk == d2 && world[ghost.y][ghost.x+1] != 9) { // Right
        ghost.x++;
        ghostWalk = d2;
        ghostFacing = "Right";
    }
    else if (ghostWalk == d2 && world[ghost.y][ghost.x+1] == 2) { // If can't go Right
        if (world[ghost.y+1][ghost.x] != 2) {
            ghost.y++;
            ghostWalk = d4;
            ghostFacing = "Right";
        }
        else if (world[ghost.y-1][ghost.x] != 2) {
            ghost.y--;
            ghostWalk = d3;
            ghostFacing = "Left";
        }
        else if (world[ghost.y][ghost.x-1] != 2) { // Left
            ghost.x--;
            ghostWalk = d1;
            ghostFacing = "Left";
        }
    }
    else if (ghostWalk == d3 && world[ghost.y-1][ghost.x] != 2 && ghostWalk == d3 && world[ghost.y-1][ghost.x] != 9) { // Up
        ghost.y--;
        ghostWalk = d3;
        ghostFacing = "Left";
    }
    else if (ghostWalk == d3 && world[ghost.y-1][ghost.x] == 2) { // If can't go Up
        if (world[ghost.y][ghost.x-1] != 2) { // Left
            ghost.x--;
            ghostWalk = d1;
            ghostFacing = "Left";
        }
        else if (world[ghost.y][ghost.x+1] != 2) { // Right
            ghost.x++;
            ghostWalk = d2;
            ghostFacing = "Right";
        }
        else if (world[ghost.y+1][ghost.x] != 2) {
            ghost.y++;
            ghostWalk = d4;
            ghostFacing = "Right";
        }
    }
    else if (ghostWalk == d4 && world[ghost.y+1][ghost.x] != 2 && ghostWalk == d4 && world[ghost.y+1][ghost.x] != 9) { // Down
        ghost.y++;
        ghostWalk = d4;
        ghostFacing = "Right";
    }
    else if (ghostWalk == d4 && world[ghost.y+1][ghost.x] == 2) { // If cant go Down
        if (world[ghost.y][ghost.x+1] != 2) { // Right
            ghost.x++;
            ghostWalk = d2;
            ghostFacing = "Right";
        }
        else if (world[ghost.y][ghost.x-1] != 2) { // Left
            ghost.x--;
            ghostWalk = d1;
            ghostFacing = "Left";
        }
        else if (world[ghost.y-1][ghost.x] != 2) {
            ghost.y--;
            ghostWalk = d3;
            ghostFacing = "Left";
        }
    }

    if (ghostWalkLimiter != walkRand) { // Trigger path randomizer
        ghostWalkLimiter++
    }
    else {
        ghostWalkLimiter = 0;
    }
    ghostFacingDirection(ghostId, ghostFacing); // Update of ghosts facing direction
    return [ghostWalkLimiter, ghostWalk];
}

function ghostCoordinates(ghost, arrPos) { // Updating ghostWorld where ghosts coordinates are changed (0 to 4) and reset back to 0 if no ghost in coordinates
    if (ghostWorld[ghost.y][ghost.x] == 0) {
        ghostWorld[ghost.y][ghost.x] = 4;
        ghostWorld[arrPos[0]][arrPos[1]] = 0;
    }
    arrPos[0] = ghost.y;
    arrPos[1] = ghost.x;
    return arrPos;
}

function pacmanDead(tpCoord, pCoord, tgCoord, gCoord) {
    // Adding temp and latest coordinates of moving entities (e.g pacman and ghosts)
    var tempPacSum = tpCoord[0] +""+ tpCoord[1];
    var pacSum = pCoord[0] +""+ pCoord[1];
    var tempGhostSum = tgCoord[0] +""+ tgCoord[1];
    var ghostCoordSum = gCoord[0] +""+ gCoord[1];

    if (ghostWorld[pacman.y][pacman.x] == 4) {
        pacmanDie = true;
        document.getElementById('finalScore').innerHTML = "Your score is: " + score;
        document.getElementById('dead').style.zIndex = 9999;
        console.log("dead");
    }
    if (pacSum == tempGhostSum && ghostCoordSum == tempPacSum) {
        pacmanDie = true;
        document.getElementById('finalScore').innerHTML = "Your score is: " + score;
        document.getElementById('dead').style.zIndex = 9999;
        console.log("dead");
    }
}

displayWorld();
displayPacman();
directionPacman();
displayGhost(ghostBlue, 'ghostBlue');
displayGhost(ghostRed, 'ghostRed');
displayGhost(ghostOrange, 'ghostOrange');
displayGhost(ghostPink, 'ghostPink');
displayScore();

document.onkeydown = function(e) { // When key is pressed, do something
    var tempPacCoord = ([pacman.y, pacman.x]); // Pacman temporary coordinate (Last Coordinate)
    // Pacman
    if (e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2) { // Left
        pacman.x--;
        direction = "Left";
    }
    else if (e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2) { // Right
        pacman.x++;
        direction = "Right";
    }
    else if (e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2) { // Up
        pacman.y--;
        direction = "Up";
    }
    else if (e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2) { // Down
        pacman.y++;
        direction = "Down";
    }
    var pacmanCoord = [pacman.y, pacman.x]; // Pacman Coordinate
    
    // Ghost temporary coordinates
    var tempBlue = [ghostBlue.y, ghostBlue.x];
    var tempRed = [ghostRed.y, ghostRed.x];
    var tempOrange = [ghostOrange.y, ghostOrange.x];
    var tempPink = [ghostPink.y, ghostPink.x];

    ghostMoveNumB = ghostDirection(ghostBlue, 1, 2, 3, 4, 6, ghostMoveNumB, "ghostBlue"); // Move Ghost Blue
    ghostMoveNumR = ghostDirection(ghostRed, 3, 4, 1, 2, 8, ghostMoveNumR, "ghostRed"); // Move Ghost Red
    ghostMoveNumO = ghostDirection(ghostOrange, 2, 3, 4, 1, 14, ghostMoveNumO, "ghostOrange"); // Move Ghost Orange
    ghostMoveNumP = ghostDirection(ghostPink, 4, 1, 2, 3, 10, ghostMoveNumP, "ghostPink"); // Move Ghost Pink

    // Ghosts coordinates
    blueCoord = ghostCoordinates(ghostBlue, blueCoord);
    redCoord = ghostCoordinates(ghostRed, redCoord);
    orangeCoord = ghostCoordinates(ghostOrange, orangeCoord);
    pinkCoord = ghostCoordinates(ghostPink, pinkCoord);
    
    pacmanDead(tempPacCoord, pacmanCoord, tempBlue, blueCoord); // Ghost Blue
    pacmanDead(tempPacCoord, pacmanCoord, tempRed, redCoord); // Ghost Red
    pacmanDead(tempPacCoord, pacmanCoord, tempOrange, orangeCoord); // Ghost Orange
    pacmanDead(tempPacCoord, pacmanCoord, tempPink, pinkCoord); // Ghost Pink

    // Coins and Cherry
    if (world[pacman.y][pacman.x] == 1) { // Upating score when coins obtained + 10 score
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayWorld();
        displayScore();
    }
    else if (world[pacman.y][pacman.x] == 3) { // Updating score when cherry obtained +20 score
        world[pacman.y][pacman.x] = 0;
        score += 20;
        displayWorld();
        displayScore();
    }

    displayPacman();
    directionPacman();
    displayGhost(ghostBlue, 'ghostBlue');
    displayGhost(ghostRed, 'ghostRed');
    displayGhost(ghostOrange, 'ghostOrange');
    displayGhost(ghostPink, 'ghostPink');
    displayCherry(worldCherry); // [y,x,y,x,y,x,y,x]
}