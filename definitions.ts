const ml4kidsColor = "#4a4b5f";

Blockly.Blocks["import_mlmodel"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("from mlmodel import *");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ml4kidsColor);
    },
};

Blockly.Blocks["import_mltext"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("from mltext import *");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ml4kidsColor);
    },
};

Blockly.Blocks['check_model'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("status"), "status")
          .appendField(" = checkModel(");
      this.appendValueInput("parameters")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(ml4kidsColor);
    }
};

Blockly.Blocks['classify_text'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("result"), "result")
          .appendField(" = classifyText(");
      this.appendValueInput("parameters")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(ml4kidsColor);
    }
};

Blockly.Blocks['store_text'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("storeText(");
      this.appendValueInput("parameters")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(ml4kidsColor);
    }
};

Blockly.Blocks['train_model'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("trainModel(");
      this.appendValueInput("parameters")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(ml4kidsColor);
    }
};
  
Blockly.Blocks['test_result_output'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("result"), "result")
          .appendField("[\"")
          .appendField(new Blockly.FieldDropdown([["class_name","class_name"], ["confidence","confidence"]]), "key")
          .appendField("\"]");
      this.setOutput(true, null);
      this.setColour(ml4kidsColor);
    }
};
  