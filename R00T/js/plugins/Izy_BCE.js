//============================================================================
// Izy_BCE.js
//----------------------------------------------------------------------------
// This script will excute command events when certain button is press.
//============================================================================

var Imported = Imported || {};
Imported.Izy_BCE = true;
Imported.Izy_BCE_name = "Izy's Button Common Events";
Imported.Izy_BCE_desc = "This script will excute command events when certain button is press.";
Imported.Izy_BCE_version = '1.01';
Imported.Izy_BCE_author = 'Izyees Fariz';

var Izy_BCE = Izy_BCE || {};
Izy_BCE.listKey = [];
Izy_BCE.listCommands = [];
Izy_BCE.listAvailablity = [];
Izy_BCE.save = false;

/*:
 * @plugindesc This script will excute command events when certain button is press.
 * Izys library scripts.
 * @author Izyees Fariz
 *
 * @param Key 0
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key 1
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key 2
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key 3
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key 4
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key 5
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key 6
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key 7
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key 8
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key 9
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key A
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key B
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key C
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key D
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key E
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key F
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key G
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key H
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key I
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key J
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key K
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key L
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key M
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key N
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key O
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key P
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key R
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key S
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key T
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key U
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key V
 * @desc Common event id to run when this key is pressed.
 *
 * @param Key Y
 * @desc Common event id to run when this key is pressed.
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This script will excute command events when certain button is press.
 * Free for commercial and non-Commercial games.
 * Credit me as Izyees Fariz.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 * Plugin Command (incasesensitive):
 * ------------------------------------------------------------------
 *   change_bce x y
 *
 *   x is the letter/number.
 *   y is id of the common event.
 *
 * ------------------------------------------------------------------
 *   enable_bce x
 *
 *   x is the letter/number. Leave blank to enable all.
 *   - This will enable the button common event.
 *
 * ------------------------------------------------------------------
 *   disable_bce x
 *
 *   x is the letter/number. Leave blank to disable all.
 *   - This will disable the button common event.
 *
 * ------------------------------------------------------------------
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * Version 1.01:
 * - Fix bug.
 * Version 1.00:
 * - Finished Plugin!
 */

//============================================================================
// Startin' Script.
//============================================================================

(function () {

	Input.keyMapper = {
		9 : 'tab', // tab
		13 : 'ok', // enter
		16 : 'shift', // shift
		17 : 'control', // control
		18 : 'control', // alt
		19 : 'pause', // pause
		20 : 'caps', // caps lock
		27 : 'escape', // escape
		32 : 'ok', // space
		33 : 'pageup', // pageup
		34 : 'pagedown', // pagedown
		37 : 'left', // left arrow
		38 : 'up', // up arrow
		39 : 'right', // right arrow
		40 : 'down', // down arrow
		45 : 'escape', // insert
		48 : '0',
		49 : '1',
		50 : '2',
		51 : '3',
		52 : '4',
		53 : '5',
		54 : '6',
		55 : '7',
		56 : '8',
		57 : '9',
		65 : 'A',
		66 : 'B',
		67 : 'C',
		68 : 'D',
		69 : 'E',
		70 : 'F',
		71 : 'G',
		72 : 'H',
		73 : 'I',
		74 : 'J',
		75 : 'K',
		76 : 'L',
		77 : 'M',
		78 : 'N',
		79 : 'O',
		80 : 'P',
		81 : 'pageup', // Q
		82 : 'R',
		83 : 'S',
		84 : 'T',
		85 : 'U',
		86 : 'V',
		87 : 'pagedown', // W
		88 : 'escape', // X
		89 : 'Y',
		90 : 'ok', // Z
		96 : 'escape', // numpad 0
		98 : 'down', // numpad 2
		100 : 'left', // numpad 4
		102 : 'right', // numpad 6
		104 : 'up', // numpad 8
		120 : 'debug' // F9
	};

	Izy_BCE.create = Scene_Map.prototype.create;
	Scene_Map.prototype.create = function () {
		Izy_BCE.create.apply(this);
		if (!Izy_BCE.save) {
			this.startButtonCommonEvents();
		}
	};

	Scene_Map.prototype.startButtonCommonEvents = function () {
		Izy_BCE.listCommands = [];
		Izy_BCE.listKey = [];
		var parameters = PluginManager.parameters('Izy_BCE');
		Izy_BCE.letters = '0123456789ABCDEFGHIJKLMNOPRSTUVY';
		for (var i = 0; i < Izy_BCE.letters.length; i++) {
			Izy_BCE.listKey.push(Izy_BCE.letters[i]);
		}
		for (i = 0; i < Izy_BCE.listKey.length; i++) {
			Izy_BCE.listCommands.push(Number(parameters['Key ' + Izy_BCE.listKey[i]] || 0));
		};
		for (i = 0; i < Izy_BCE.listKey.length; i++) {
			Izy_BCE.listAvailablity.push(true);
		};
	};

	Izy_BCE.updateSceneMap = Scene_Map.prototype.update;
	Scene_Map.prototype.update = function () {
		if (!$gameMessage.isBusy() && !this.isBusy()) {
			this.updateButtonInputs();
		}
		Izy_BCE.updateSceneMap.apply(this)
	};

	Scene_Map.prototype.updateButtonInputs = function () {
		for (i = 0; i < Izy_BCE.listKey.length; i++) {
			if (Input.isTriggered(Izy_BCE.listKey[i])) {
				if (Izy_BCE.listCommands[i] != 0 && Izy_BCE.listAvailablity[i]) {
					$gameTemp.reserveCommonEvent(Izy_BCE.listCommands[i]);
				}
			}
		}
	};

	Game_System.prototype.enableBCE = function (keyname) {
		if (keyname) {
			for (i = 0; i < Izy_BCE.listKey.length; i++) {
				if (keyname.toLowerCase() == Izy_BCE.listKey[i].toLowerCase()) {
					Izy_BCE.listAvailablity[i] = true;
				}
			}
		} else {
			for (i = 0; i < Izy_BCE.listAvailablity.length; i++) {
				Izy_BCE.listAvailablity[i] = true;
			}
		}

	};

	Game_System.prototype.disableBCE = function (keyname) {
		if (keyname) {
			for (i = 0; i < Izy_BCE.listKey.length; i++) {
				if (keyname.toLowerCase() == Izy_BCE.listKey[i].toLowerCase()) {
					Izy_BCE.listAvailablity[i] = false;
				}
			}
		} else {
			for (i = 0; i < Izy_BCE.listAvailablity.length; i++) {
				Izy_BCE.listAvailablity[i] = false;
			}
		}

	};

	Game_System.prototype.changeBCE = function (keyname, newId) {
		for (i = 0; i < Izy_BCE.listKey.length; i++) {
			if (keyname.toLowerCase() == Izy_BCE.listKey[i].toLowerCase()) {
				Izy_BCE.listCommands[i] = newId || 0;
			}
		}
	};

	//============================================================================
	// Plugin Commands
	//============================================================================

	Izy_BCE.PLGC = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function (command, args) {
		Izy_BCE.PLGC.call(this, command, args)
		if (command.toLowerCase() == 'change_bce') {
			$gameSystem.changeBCE(args[0], args[1]);
		}

		if (command.toLowerCase() == 'enable_bce') {
			$gameSystem.enableBCE(args[0]);
		}

		if (command.toLowerCase() == 'disable_bce') {
			$gameSystem.disableBCE(args[0]);
		}
	};
	
	//============================================================================
	// Saving And Loading
	//============================================================================

	Izy_BCE.save = DataManager.makeSaveContents;
	DataManager.makeSaveContents = function () {
		var contents = Izy_BCE.save.call(this);
		contents.bce = {
			save : true,
			listkeys : Izy_BCE.listKey,
			listcommands : Izy_BCE.listCommands,
			listavailable : Izy_BCE.listAvailablity
		};
		return contents;
	};

	Izy_BCE.extractSave =
		DataManager.extractSaveContents;
	DataManager.extractSaveContents = function (contents) {
		Izy_BCE.extractSave.call(this, contents);
		Izy_BCE.save = contents.bce.save || false;
		Izy_BCE.listKey = contents.bce.listkeys || [];
		Izy_BCE.listCommands = contents.bce.listcommands || [];
		Izy_BCE.listAvailablity = contents.bce.listavailable || [];
	};

})();

//============================================================================
// End Script.
//============================================================================
