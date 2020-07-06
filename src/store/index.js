import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      gold: 10000,
      food: 10000,
      ore: 10000,
      wood: 10000,
    },

    upgradeCounter: {
      tool: {
        arrow: 0,
        pick: 0,
        axe: 0
      },
      idleIncome: {
        food: 0,
        ore: 0,
        wood: 0
      },
      hires: {
        hunter: 0,
        miner: 0,
        lumberjack: 0,
        blacksmith: 0,
        trader: 0,
        builder: 0
      },
      blacksmith: 1,
      tavern: 1,
      marketplace: 0
    },

    costs: {
      arrow: {
        gold: 200,
        ore: 50,
        wood: 100
      },
      pick: {
        gold: 200,
        ore: 50,
        wood: 100
      },
      axe: {
        gold: 200,
        ore: 50,
        wood: 100
      },
      hunter: 200,
      miner: 200,
      lumberjack: 200,
      trader: 200,
      builder: 200,
      blacksmith: 200
    },

    nextUpgrade: {
      arrow: {
        name: "Stone Arrows",
        img: "StoneArrow"
      },
      pick: {
        name: "Stone Picks",
        img: "StonePick"
      },
      axe: {
        name: "Stone Axes",
        img: "StoneAxe"
      }
    },

    totalWorkers: 0,
    //move to home page
    timerCounter: 0,

    arrowNames: ["Stone Arrows", "Bronze Arrows", "Iron Arrows", "Steel Arrows", "Diamond Arrows"],
    pickNames: ["Stone Picks", "Bronze Picks", "Iron Picks", "Steel Picks", "Diamond Picks"],
    axeNames: ["Stone Axes", "Bronze Axes", "Iron Axes", "Steel Axes", "Diamond Axes"],
    upgradeArrArrow: ['StoneArrow', 'BronzeArrow', 'IronArrow', 'SteelArrow', 'DiamondArrow'],
    upgradeArrPick: ['StonePick', 'BronzePick', 'IronPick', 'SteelPick', 'DiamondPick'],
    upgradeArrAxe: ['StoneAxe', 'BronzeAxe', 'IronAxe', 'SteelAxe', 'DiamondAxe'],

    tracks: ["@/assets/AdventureTrack1.wav", "../assets/AdventureTrack2.wav"]
  },
  mutations: {
    //#region COLLECTION
    gatherFood(state, num) {
      state.user.food += num
    },
    gatherOre(state, num) {
      state.user.ore += num
    },
    gatherWood(state, num) {
      state.user.wood += num
    },
    //#endregion
    //#region UPGRADES
    buyArrow(state, data) {
      state.upgradeCounter.tool.arrow++
      let index = state.upgradeCounter.tool.arrow
      state.user.gold -= data.cost.gold
      state.user.ore -= data.cost.ore
      state.user.wood -= data.cost.wood
      if (index < 5) {
        state.nextUpgrade.arrow.img = state.upgradeArrArrow[index]
        state.nextUpgrade.arrow.name = state.arrowNames[index]
      } else { state.nextUpgrade.arrow.name = state.arrowNames[4] + " +" + (index - 4).toString() }
      state.costs.arrow.gold = 200 + 200 * index
      state.costs.arrow.ore = 50 + 50 * index
      state.costs.arrow.wood = 100 + 100 * index
    },
    buyPick(state, data) {
      state.upgradeCounter.tool.pick++
      let index = state.upgradeCounter.tool.pick
      state.user.gold -= data.cost.gold
      state.user.ore -= data.cost.ore
      state.user.wood -= data.cost.wood
      if (index < 5) {
        state.nextUpgrade.pick.img = state.upgradeArrPick[index]
        state.nextUpgrade.pick.name = state.pickNames[index]
      } else { state.nextUpgrade.pick.name = state.pickNames[4] + " +" + (index - 4).toString() }
      state.costs.pick.gold = 200 + 200 * index
      state.costs.pick.ore = 50 + 50 * index
      state.costs.pick.wood = 100 + 100 * index
    },
    buyAxe(state, data) {
      state.upgradeCounter.tool.axe++
      let index = state.upgradeCounter.tool.axe
      state.user.gold -= data.cost.gold
      state.user.ore -= data.cost.ore
      state.user.wood -= data.cost.wood
      if (index < 5) {
        state.nextUpgrade.axe.img = state.upgradeArrAxe[index]
        state.nextUpgrade.axe.name = state.axeNames[index]
      } else { state.nextUpgrade.axe.name = state.axeNames[4] + " +" + (index - 4).toString() }
      state.costs.axe.gold = 200 + 200 * index
      state.costs.axe.ore = 50 + 50 * index
      state.costs.axe.wood = 100 + 100 * index
    },
    //#endregion
    //#region SELLING
    sellFood(state, num) {
      state.user.gold += num * 5
      state.user.food -= num
    },
    sellOre(state, num) {
      state.user.gold += num * 5
      state.user.ore -= num
    },
    sellWood(state, num) {
      state.user.gold += num * 5
      state.user.wood -= num
    },
    //#endregion
    //#region HIRES
    hireHunter(state) {
      state.user.gold -= state.costs.hunter
      state.costs.hunter = state.costs.hunter * 2
      state.upgradeCounter.idleIncome.food++
      state.upgradeCounter.hires.hunter++
    },
    hireMiner(state) {
      state.user.gold -= state.costs.miner
      state.costs.miner = state.costs.miner * 2
      state.upgradeCounter.idleIncome.ore++
      state.upgradeCounter.hires.miner++
    },
    hireLumberjack(state) {
      state.user.gold -= state.costs.lumberjack
      state.costs.lumberjack = state.costs.lumberjack * 2
      state.upgradeCounter.idleIncome.wood++
      state.upgradeCounter.hires.lumberjack++
    },
    hireTrader(state) {
      state.user.gold -= state.costs.trader
      state.costs.trader = state.costs.trader * 2
      state.upgradeCounter.hires.trader++
    },
    hireBuilder(state) {
      state.user.gold -= state.costs.builder
      state.costs.builder = state.costs.builder * 2
      state.upgradeCounter.hires.builder++
    },
    hireBlacksmith(state) {
      state.user.gold -= state.costs.blacksmith
      state.costs.blacksmith = state.costs.blacksmith * 2
      state.upgradeCounter.hires.blacksmith++
    },
    addIdleRss(state) {
      state.user.food += state.upgradeCounter.idleIncome.food
      state.user.ore += state.upgradeCounter.idleIncome.ore
      state.user.wood += state.upgradeCounter.idleIncome.wood
    }
  },
  actions: {
    collect({ commit, dispatch }, resource) {
      let UI = this.state.upgradeCounter.tool
      try {
        if (resource == "food") {
          let num = (UI.arrow + 1);
          commit("gatherFood", num);
        } else if (resource == "ore") {
          let num = (UI.pick + 1);
          commit("gatherOre", num)
        } else if (resource == "wood") {
          let num = (UI.axe + 1);
          commit("gatherWood", num)
        }
      } catch (error) {
        console.error(error)
      }
    },
    upgrade({ commit, dispatch }, tool) {
      if (tool == "arrow") {
        let mod = this.state.upgradeCounter.tool.arrow
        let data = {
          tool: tool,
          cost: {
            gold: 200 + 200 * mod,
            ore: 50 + 50 * mod,
            wood: 100 + 100 * mod
          }
        }
        commit("buyArrow", data)
      } else if (tool == "pick") {
        let mod = this.state.upgradeCounter.tool.pick
        let data = {
          tool: tool,
          cost: {
            gold: 200 + 200 * mod,
            ore: 50 + 50 * mod,
            wood: 100 + 100 * mod
          }
        }
        commit("buyPick", data)
      } else if (tool == "axe") {
        let mod = this.state.upgradeCounter.tool.axe
        let data = {
          tool: tool,
          cost: {
            gold: 200 + 200 * mod,
            ore: 50 + 50 * mod,
            wood: 100 + 100 * mod
          }
        }
        commit("buyAxe", data)
      }
    },
    sell({ commit }, obj) {
      if (obj.resource == "food") {
        commit("sellFood", obj.num)
      } else if (obj.resource == "ore") {
        commit("sellOre", obj.num)
      } else if (obj.resource == "wood") {
        commit("sellWood", obj.num)
      }
    },
    hire({ commit }, worker) {
      if (worker == "hunter") {
        commit("hireHunter")
      } else if (worker == "miner") {
        commit("hireMiner")
      } else if (worker == "lumberjack") {
        commit("hireLumberjack")
      } else if (worker == "trader") {
        commit("hireTrader")
      } else if (worker == "builder") {
        commit("hireBuilder")
      } else if (worker == "blacksmith") {
        commit("hireBlacksmith")
      }
    },
    idleCollection({ commit }) {
      commit("addIdleRss")
    }
  },
  modules: {
  }
})
