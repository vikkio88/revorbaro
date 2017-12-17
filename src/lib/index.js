const randomizer = {
  pickOne: function (array) {
    return array[this.int(0, array.length - 1)];
  },
  int: function (low, high) {
    return Math.round(Math.random() * (high - low) + low);
  },
  chance: function (percentage) {
    return this.int(0, 99) < percentage;
  }
};

export const ATTACK = "ATTACK";
export const RELOAD = "RELOAD";
export const DEFEND = "DEFEND";
const MOVES = [ATTACK, DEFEND, RELOAD];

const RESOLVE_MATRIX = {
  [ATTACK]: {
    [ATTACK]: function (context) {
      return { player: { loaded: false }, computer: { loaded: false } };
    },
    [DEFEND]: function (context) {
      return { player: { loaded: false } };
    },
    [RELOAD]: function (context) {
      return { winner: 'player' };
    }
  },
  [DEFEND]: {
    [ATTACK]: function (context) {
      return { computer: { loaded: false } };
    },
    [DEFEND]: function () {
    },
    [RELOAD]: function (context) {
      return { computer: { loaded: true } };
    }
  },
  [RELOAD]: {
    [ATTACK]: function (context) {
      return { winner: 'computer' };
    },
    [DEFEND]: function (context) {
      return { player: { loaded: true } };
    },
    [RELOAD]: function (context) {
      return {
        player: { loaded: true }, computer: { loaded: true }
      }
    }
  }
};

const getCpuMove = context => {
  if (!context.computer.loaded) {
    return randomizer.pickOne([RELOAD, DEFEND]);
  }

  return randomizer.pickOne([ATTACK, DEFEND]);
};

export const resolveActions = (playerMove, context) => {
  const cpuMove = getCpuMove(context);
  const stuff = RESOLVE_MATRIX[playerMove][cpuMove](context);
  console.log(stuff, playerMove, cpuMove);
  return stuff;
};