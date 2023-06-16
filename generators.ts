Blockly.Python["import_mlmodel"] = function() {
    const code = `from mlmodel import *\n`;
    return code;
};

Blockly.Python["import_mltext"] = function() {
    const code = `from mltext import *\n`;
    return code;
};

Blockly.Python['check_model'] = function(block) {
    const status = Blockly.Python.nameDB_.getName(block.getFieldValue("status"), Blockly.VARIABLE_CATEGORY_NAME);
    const parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    const code = `${status} = checkModel(${parameters})\n`;
    return code;
};

Blockly.Python['classify_text'] = function(block) {
    const result = Blockly.Python.nameDB_.getName(block.getFieldValue("result"), Blockly.VARIABLE_CATEGORY_NAME);
    const parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    const code = `${result} = classifyText(${parameters})\n`;
    return code;
};

Blockly.Python['store_text'] = function(block) {
    const parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    const code = `storeText(${parameters})\n`;
    return code;
};

Blockly.Python['train_model'] = function(block) {
    const parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    const code = `trainModel(${parameters})\n`;
    return code;
};

Blockly.Python['test_result_output'] = function(block) {
    const result = Blockly.Python.nameDB_.getName(block.getFieldValue('result'), Blockly.VARIABLE_CATEGORY_NAME);
    const key = block.getFieldValue('key');
    var code = `${result}["${key}"]`;
    return [code, 0];
};
  