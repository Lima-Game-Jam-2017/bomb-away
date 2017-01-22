Level = function(straightWaves, diagonalWaves, eightWaves, safes, goal) {
    this.straightWaves = straightWaves;
    this.diagonalWaves = diagonalWaves;
    this.eightWaves = eightWaves;
    this.safes = safes;
    this.goal = goal;
};

var levels = [];

levels.push(new Level(10, 5, 0, 2, 1));
levels.push(new Level(5, 10, 0, 0, 2));
levels.push(new Level(5, 10, 0, 0, 2));
levels.push(new Level(5, 10, 0, 0, 2));
levels.push(new Level(5, 10, 0, 0, 2));
levels.push(new Level(5, 10, 0, 0, 2));
levels.push(new Level(5, 10, 0, 0, 2));
levels.push(new Level(5, 10, 0, 0, 2));
levels.push(new Level(5, 10, 0, 0, 2));
