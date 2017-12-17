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

const RESOLVE_MATRIX = {
  [ATTACK]: {
    [ATTACK]: function () {
      return { player: { loaded: false }, computer: { loaded: false } };
    },
    [DEFEND]: function () {
      return { player: { loaded: false } };
    },
    [RELOAD]: function () {
      return { winner: 'player' };
    }
  },
  [DEFEND]: {
    [ATTACK]: function () {
      return { computer: { loaded: false } };
    },
    [DEFEND]: function () {
      return {};
    },
    [RELOAD]: function () {
      return { computer: { loaded: true } };
    }
  },
  [RELOAD]: {
    [ATTACK]: function () {
      return { winner: 'computer' };
    },
    [DEFEND]: function () {
      return { player: { loaded: true } };
    },
    [RELOAD]: function () {
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
  const actionsResult = RESOLVE_MATRIX[playerMove][cpuMove](context);
  const player = actionsResult.player || context.player;
  const computer = actionsResult.computer || context.computer;
  return {
    ...actionsResult,
    player: { ...player, lastAction: playerMove },
    computer: { ...computer, lastAction: cpuMove }
  };
};