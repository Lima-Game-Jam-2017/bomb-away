Level = function(straightWaves, diagonalWaves, eightWaves, safes, goal) {
    this.straightWaves = straightWaves;
    this.diagonalWaves = diagonalWaves;
    this.eightWaves = eightWaves;
    this.safes = safes;
    this.goal = goal;
};

var levels = [];

levels.push(new Level(5, 0, 0 , 0, 2));
levels.push(new Level(9, 0, 0, 0, 5));
levels.push(new Level(12, 0, 0, 0, 7));
levels.push(new Level(5, 0, 0, 1, 2));
levels.push(new Level(8, 0, 0, 1, 3));
levels.push(new Level(5, 5, 0, 1, 2));
levels.push(new Level(5, 5, 0, 2, 2));
levels.push(new Level(5, 5, 2, 3, 4));
levels.push(new Level(5, 5, 5, 2, 5));
