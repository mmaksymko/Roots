/*:
-------------------------------------------------------------------------------
@title Timed Choice Selection
@author Hime --> HimeWorks (http://himeworks.com)
@version 1.1
@date May 10, 2016
@filename HIME_TimedChoiceSelection.js
@url http://himeworks.com/2016/05/timed-choice-selection/

If you enjoy my work, consider supporting me on Patreon!

* https://www.patreon.com/himeworks

If you have any questions or concerns, you can contact me at any of
the following sites:

* Main Website: http://himeworks.com
* Facebook: https://www.facebook.com/himeworkscom/
* Twitter: https://twitter.com/HimeWorks
* Youtube: https://www.youtube.com/c/HimeWorks
* Tumblr: http://himeworks.tumblr.com/

-------------------------------------------------------------------------------
@plugindesc v1.1 - Set a timer that automatically selects a choice for the
player when the timer expires.
@help 
-------------------------------------------------------------------------------
== Description ==

In RPG Maker, you can present players with a set of choices to select.
However, by default, they can wait as long as they want to make a selection.

Using this plugin, you can automatically force a selection, to create a
mechanic where the player has a limited amount of time to make a decision.

== Terms of Use ==

- Free for use in non-commercial projects with credits
- Free for use in commercial projects, but it would be nice to let me know
- Please provide credits to HimeWorks

== Change Log ==

1.1 - May 10, 2016
 * Implemented force canceling via script call
1.0 - May 6, 2016
 * initial release

== Usage ==

To set a timer for the choice selection, use the script call

  HMS.setChoiceTimer( DURATION )

Where the DURATION is the number of frames that the game should wait before
it automatically selects a choice.

The "Cancel" choice will be automatically selected.

Note that this script call does not automatically display a timer.

-------------------------------------------------------------------------------
 */ 
var Imported = Imported || {} ;
var TH = TH || {};
Imported.TH_TimedChoiceSelection = 1;
TH.TimedChoiceSelection = TH.TimedChoiceSelection || {};

var HMS = HMS || {};

(function ($) {

  var TH_GameMessage_clear = Game_Message.prototype.clear;
  Game_Message.prototype.clear = function() {
    TH_GameMessage_clear.call(this);
    this._timedChoiceCount = 0;
    this._timedChoiceNum = -1;
    this._isForcedCancel = false;
  };

  Game_Message.prototype.setChoiceTimer = function(frames, choiceNum) {    
    if (choiceNum > 0) {
      choiceNum -= 1;
    }    
    this._timedChoiceCount = frames;
    this._timedChoiceNum = choiceNum;
  };
  
  Game_Message.prototype.timedChoiceCount = function() {
    return this._timedChoiceCount;
  };
  
  Game_Message.prototype.timedChoiceNum = function() {
    return this._timedChoiceNum;
  };
  
  Game_Message.prototype.forceCancel = function() {
    this._isForcedCancel = true;
  };
  
  Game_Message.prototype.isForcedCancel = function() {
    return this._isForcedCancel;
  };
  
  /***************************************************************************/
  
  var TH_WindowChoiceList_initialize = Window_ChoiceList.prototype.initialize;
  Window_ChoiceList.prototype.initialize = function(messageWindow) {
    TH_WindowChoiceList_initialize.call(this, messageWindow);
    this._count = 0;
  };
  
  var TH_WindowChoiceList_start = Window_ChoiceList.prototype.start;
  Window_ChoiceList.prototype.start = function() {
    this.setTimer();
    TH_WindowChoiceList_start.call(this);    
  };
  
  Window_ChoiceList.prototype.setTimer = function() {
    this._count = $gameMessage.timedChoiceCount();
  };
  
  var TH_WindowChoiceList_update = Window_ChoiceList.prototype.update;
  Window_ChoiceList.prototype.update = function() {
    TH_WindowChoiceList_update.call(this);
    this.updateTimer();
    this.updateForceCancel();
  };
  
  Window_ChoiceList.prototype.updateTimer = function() {
    if (this._count > 0) {
      this._count--;      
      if (this._count == 0) {        
        $gameMessage.forceCancel();
      };
    }
  };
  
  Window_ChoiceList.prototype.updateForceCancel = function() {
    if ($gameMessage.isForcedCancel()) {
      this.deactivate();
      this.callCancelHandler();
    }
  };
  
  var TH_WindowChoiceList_callOkHandler = Window_ChoiceList.prototype.callOkHandler;
  Window_ChoiceList.prototype.callOkHandler = function() {
    TH_WindowChoiceList_callOkHandler.call(this);
    this._count = 0;
  };

  var TH_WindowChoiceList_callCancelHandler = Window_ChoiceList.prototype.callCancelHandler;
  Window_ChoiceList.prototype.callCancelHandler = function() {
    TH_WindowChoiceList_callCancelHandler.call(this);
    this._count = 0;
  };
  
  /***************************************************************************/
  
  HMS.setChoiceTimer = function(frames, choiceNum) {
    $gameMessage.setChoiceTimer(frames, choiceNum);
  };

})(TH.TimedChoiceSelection);